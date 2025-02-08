import { NextResponse } from 'next/server';
import dbConnect from '../../lib/db';
import Bill from '../../lib/models/Bill';
import axios from 'axios';
import OpenAI from "openai";
import mammoth from 'mammoth';
import { myCategories } from "../categories";
import { send } from 'process';


export async function GET() {

    try {
        await dbConnect();
        console.log("Connected to database");   
        const bills = await Bill.find({});
        console.log("Getting bills from database");
        //processBills();
        return NextResponse.json({ success: true, bills: bills });
    } catch (error) {
        console.error('Error fetching bills:', error);
        return NextResponse.json({ error: 'Failed to fetch bills' }, { status: 500 });
    }
}

async function processBills() {
    //const cursor = Bill.find({}).cursor();
    //const testbill = await (await cursor.next());
    //console.log("testbill", testbill.BillID);
    //const summary = await Summarize('https://fs.knesset.gov.il/25/law/25_lst_1335930.docx');
    //console.log("summary", summary);    
    //categorizeAndSummarize('https://fs.knesset.gov.il/25/law/25_lst_1335930.docx');
    /*
    const llmResponse = await categorizeAndSummarize('https://fs.knesset.gov.il/25/law/25_lst_1335930.docx');
    console.log(llmResponse);
    if (llmResponse) {
        console.log("category ", llmResponse.category);
        console.log("summary ", llmResponse.summary);
    }
        */
   
    //console.log("filepath", await fetchFilePath(testbill));
    //fetchFilePath(testbill)
    //fetchInitiators(testbill);
    /*
    for (let bill = await cursor.next(); bill != null; bill = await cursor.next()) {
        bill.Summary = "";
        bill.Initiators = await fetchInitiators(bill);
        bill.Category = 2;
        bill.VotesUp = 0;
        bill.VotesDown = 0;
        bill.Comments = 0;
        bill.FilePath = await fetchFilePath(bill);
        //await bill.save();
        
    }*/
}

interface BillInitiator {
    BillInitiatorID: number;
    BillID: number;
    PersonID: number;
    IsInitiator: boolean;
    Ordinal: number;
    LastUpdatedDate: Date;
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

async function fetchFilePath(bill: typeof Bill.prototype) {
    const response = await axios('https://knesset.gov.il/Odata/ParliamentInfo.svc/KNS_DocumentBill()?$filter=BillID eq ' + bill.BillID);
    const data = response.data.value;

    if (data.length > 0) {
        return data[0].FilePath;
    }
    return null;
}

const openai = new OpenAI({
    baseURL: "https://api.deepseek.com",
    apiKey: process.env.DEEPSEEK_KEY,
  });

  async function Summarize(url: string) {

    console.log("Summarizing bill...");

    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, 'binary');

    const HTMLString = await mammoth.convertToHtml({ buffer: buffer });

    const prompt = `
    ספק סיכום תמציתי ואובייקטי של הצעת החוק, תוך הדגשת ההוראות המרכזיות וההשפעות המיעדות שלה. הימנע מהבעת דעות או הטיות אישיות.
    
    הצעת החוק:
    ${HTMLString.value}
    `;

    async function sendToDeepSeek(retryCount = 0) {
        const maxRetries = 3; // Maximum number of retries
        const initialDelay = 1000; // Initial delay in milliseconds

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
            console.error("Error communicating with DeepSeek:", error);

            if (retryCount < maxRetries) {
                const delay = initialDelay * Math.pow(2, retryCount); // Exponential backoff
                console.log(`Retrying in ${delay / 1000} seconds...`);
                await new Promise(resolve => setTimeout(resolve, delay));
                return sendToDeepSeek(retryCount + 1); // Retry with incremented count
            } else {
                throw new Error('Failed to get a response from DeepSeek after multiple retries.');
            }
        }
    }

    console.log("Sending to deepseek...");
    const responseLLM = await sendToDeepSeek();
    if (!responseLLM) {
        throw new Error('No response from DeepSeek'); // This error is now less likely
    }
    return responseLLM;
}


  
/*

async function categorizeAndSummarize(url : string) {

    
    console.log("Categorizing and summarizing bill...");

    const response = await axios.get(url,{ responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, 'binary'); 

    const result = await mammoth.convertToHtml({ buffer: buffer });

    const prompt = `
    נתח את הצעת החוק הבאה וספק את הקטגוריה המתאימה ביותר ותקציר תמציתי.

  Bill Data:
    ${result.value}

  Categories:
    ${JSON.stringify(myCategories, null, 2)}

  Instructions:
  1.  ספק את המזהה של הקטגוריה המתאימה ביותר שמתארת את הצעת החוק מתוך רשימת הקטגוריות שסופקה.
  2.  ספק סיכום תמציתי ואובייקטי של הצעת החוק, תוך הדגשת ההוראות המרכזיות וההשפעות המיעדות שלה. הימנע מהבעת דעות או הטיות אישיות. 

  Output Format:
  {
    "category": המזהה של הקטגוריה,
    "summary": " סיכום של הצעת החוק"
  }

   * הערות: החזר את האובייקט JSON בפורמט שצוין, ללא סימנים נוספים
  `;


  const openai = new OpenAI({
    baseURL: "https://api.deepseek.com",
    apiKey: process.env.DEEPSEEK_KEY,
  });

  async function sendToDeepSeek() {
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
  }
  console.log("Sending to deepseek...");
  const responseLLM = await sendToDeepSeek();

  if (!responseLLM) {
    throw new Error('No response from DeepSeek');
  }

  console.log(responseLLM);

}
  */

    /*
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
}*/