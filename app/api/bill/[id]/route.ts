import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Bill from "@/lib/models/Bill";

export async function GET( request: Request, { params }: { params: { id: string } }
) {
  const { id } =  await params;

  await dbConnect();

  return NextResponse.json({
    success: true,
    billId: id,
    bill: await Bill.findOne({BillID: id}),
  });
}


/*import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/db';
import Bill from '../../../lib/models/Bill';

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
*/