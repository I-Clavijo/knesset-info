import { NextResponse } from 'next/server';
import dbConnect from '../../lib/db';
import Bill from '../../lib/models/Bill';

export async function GET() {

    try {
        await dbConnect();
        console.log("Connected to database");   
        const bills = await Bill.find({});
        console.log("Getting bills from database");
        return NextResponse.json({ success: true, bills: bills });
    } catch (error) {
        console.error('Error fetching bills:', error);
        return NextResponse.json({ error: 'Failed to fetch bills' }, { status: 500 });
    }

}
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