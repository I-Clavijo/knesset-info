import { NextResponse } from 'next/server';
import dbConnect from '../../lib/db';
import axios from 'axios';

export async function GET() {
    try {
        await dbConnect();
        console.log("Connected to database");

        const baseUrl = "http://knesset.gov.il/Odata/ParliamentInfo.svc/";
        
        const response = await axios.get(baseUrl + 'KNS_Bill()?$filter=KnessetNum eq 25 and StatusID eq 108');

        const data = response.data.value;

        
        if (!data) {
            return NextResponse.json({ error: 'No data found' }, { status: 404 });
        }

        return NextResponse.json({ 
            success: true,
            data: data 
        });

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ 
            success: false,
            error: error instanceof Error ? error.message : 'An unknown error occurred' 
        }, { 
            status: 500 
        });
    }
}