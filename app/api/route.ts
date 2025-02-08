import { NextResponse } from 'next/server';
import dbConnect from '../../lib/db';
import Bill from '../../lib/models/Bill';



export async function GET() {

    
    try {
        await dbConnect();
        console.log("Connected to database");   
        console.log("Getting bills from database");
        //await processBills();
        const cursor = Bill.find({}).cursor();
    const testbill = await (await cursor.next());
    testbill.MagazineNumber = 3;
    testbill.Comments = 3;

    await testbill.save();
    console.log(testbill);
        return NextResponse.json({ success: true, bills: [] });
    } catch (error) {
        console.error('Error fetching bills:', error);
        return NextResponse.json({ error: 'Failed to fetch bills' }, { status: 500 });
    }

}
    