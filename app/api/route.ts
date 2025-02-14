import { NextResponse } from 'next/server';
import dbConnect from '../../lib/db';
import axios from 'axios';
import OpenAI from "openai";
import mammoth from 'mammoth';
import myCategories from "../categories";
import Bill from '../../lib/models/Bill';

const openai = new OpenAI({
    baseURL: "https://api.deepseek.com",
    apiKey: process.env.DEEPSEEK_KEY,
  });

interface BillInitiator {
    BillInitiatorID: number;
    BillID: number;
    PersonID: number;
    IsInitiator: boolean;
    Ordinal: number;
    LastUpdatedDate: Date;
}



async function fetchFilePath(bill: typeof Bill.prototype) {
    const response = await axios('https://knesset.gov.il/Odata/ParliamentInfo.svc/KNS_DocumentBill()?$filter=BillID eq ' + bill.BillID);
    const data = response.data.value;

    for (const doc of data) { 
        if (doc.ApplicationDesc == "DOC") {
            return doc.FilePath;
        }
    }
    return null;
}

async function fetchInitiators(bill: typeof Bill.prototype) {
    const initiators: number[] = [];
    const response = await axios('https://knesset.gov.il/Odata/ParliamentInfo.svc/KNS_BillInitiator()?$filter=BillID eq ' + bill.BillID);
    const data = response.data.value;
    data.forEach((bill: BillInitiator) => {
        initiators.push(bill.PersonID);
    });
    return initiators;
}


async function categorizeAndSummarize(url: string) {
    console.log("Categorizing and summarizing bill...");

    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, 'binary');

    const result = await mammoth.convertToHtml({ buffer: buffer });

    const prompt = `
    נתח את הצעת החוק וספק את מספר הקטגוריה המתאימה ביותר, תקציר תמציתי, הוראות מרכזיות וההשפעות המיועדות.

    הצעת החוק:
        ${result.value}

    קטגוריות:
        ${JSON.stringify(myCategories, null, 2)}

    Instructions:
    1. ספק את מספר המזהה של הקטגוריה המתאימה ביותר שמתארת את הצעת החוק מתוך רשימת הקטגוריות שסופקה.
    2. ספק סיכום תמציתי, אובייקטיבי ופשוט להבנה של הצעת החוק. הימנע מהבעת דעות או הטיות אישיות.
    3. ספק סיכום תמציתי של ההוראות המרכזיות של הצעת החוק.
    4. ספק סיכום תמציתי של ההשפעות המיועדות של הצעת החוק.

    Output Format:
    {
        "Category": מספר המזהה של הקטגוריה המתאימה ביותר,
        "Summary": "תקציר תמציתי של הצעת החוק",
        "MainInstructions": "תקציר תמציתי של ההוראות המרכזיות של הצעת החוק",
        "Impacts": "תקציר תמציתי של ההשפעות המיועדות של הצעת החוק"
    }

    * הערות: ספק את האובייקט עצמו ללא סימנים נוספים כמו נקודות ופסיקים.
    `;


    async function sendToDeepSeek(retryCount = 4) {

        let lastError;
        while (retryCount > 0) {
            try {
                const completion = await openai.chat.completions.create({
                    messages: [
                        {
                            role: "system",
                            content: prompt
                        },
                    ],
                    model: "deepseek-chat",
                });
                return completion.choices[0].message.content;
            } catch (error) {
                console.error(`Error sending to DeepSeek (retry ${4 - retryCount + 1}):`, error);
                lastError = error;
                retryCount--;
                await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second before retrying
            }
        }
        throw new Error(`Failed to send to DeepSeek after multiple retries: ${lastError}`);
    }

    console.log("Sending to deepseek...");
    const responseLLM = await sendToDeepSeek();
    console.log("Received response from deepseek:", responseLLM);

    if (!responseLLM) {
        throw new Error('No response from DeepSeek');
    }

    try {
        const jsonResponse = JSON.parse(responseLLM);
        return jsonResponse;
    } catch (error) {
        console.error('Failed to parse LLM response as JSON:', error);
        throw new Error('Invalid JSON response from DeepSeek');
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function processBills() {

    const cursor = Bill.find({}).cursor();
    for (let bill = await cursor.next(); bill != null; bill = await cursor.next()) {
        console.log("Processing bill: ", bill.BillID);
        const filePath = await fetchFilePath(bill);
        bill.FilePath = filePath;   
        console.log("File path: ", filePath);
        let llmResponse;
        try{
        llmResponse = await categorizeAndSummarize(filePath);
        } catch (error) {         
            console.error('Error processing catergorizeAndSummarize:', error);
            llmResponse = null;
        }
        bill.Summary = llmResponse? llmResponse.Summary : null;
        bill.MainInstructions = llmResponse? llmResponse.MainInstructions : null;
        bill.Impacts = llmResponse? llmResponse.Impacts : null;
        bill.Initiators = await fetchInitiators(bill);
        bill.Category = llmResponse? llmResponse.Category : null;
        bill.VotesUp = 0;
        bill.VotesDown = 0;
        bill.Comments = 0;
        
        await bill.save();
        
    }
    
}

export async function GET() {
    try {
        await dbConnect();
        console.log("Connected to database");   
        console.log("Getting bills from database");
        //await processBills();
        return NextResponse.json({ success: true, bills: await Bill.find({}) });
    } catch (error) {
        console.error('Error fetching bills:', error);
        return NextResponse.json({ error: 'Failed to fetch bills' }, { status: 500 });
    }
}


/*
async function fetchAll() {
    try {
        await dbConnect();
        console.log("Connected to database");
        
        const dataPromise = fetchData('https://knesset.gov.il/Odata/ParliamentInfo.svc/KNS_Bill()?$filter=KnessetNum eq 25 and StatusID eq 108');
        const data = await dataPromise;
        console.log(data.length);
        
        if (!data) {
           return NextResponse.json({ error: 'No data found' }, { status: 404 });
        }

        // Insert the data into the database
        await Bill.insertMany(data);

        return NextResponse.json({ 
            success: true,
            data: data 
        });

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ 
            success: false,
            error: error instanceof Error ? error.message : 'An unknown error occurred'
        }, { status: 500 });
    }
}

const baseUrl = 'https://knesset.gov.il/Odata/ParliamentInfo.svc/';

async function fetchData(url: string, accumulatedData: any[] = []): Promise<any[]> {
    try {
        const response = await axios.get(url);
        const data = response.data.value;
        accumulatedData.push(...data);

        // Check if there is a next page
        const nextLink = response.data['odata.nextLink'];
        if (nextLink) {
            console.log('Fetching next page...');
            return fetchData(baseUrl + nextLink, accumulatedData);
        } else {
            console.log('All data fetched.');
            return accumulatedData;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
     
}
*/