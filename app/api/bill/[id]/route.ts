import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Bill from "@/lib/models/Bill";

export async function GET( request: Request) {
  const pathname = new URL(request.url).pathname;
  const id = pathname.split('/').pop();

  await dbConnect();

  try {
    const bill = await Bill.findOne({ BillID: id });
    if (!bill) {
      return new NextResponse("Bill not found", { status: 404 });
    }

    return NextResponse.json({
      success: true,
      bill: bill, 
    });
  } catch (error) {
    console.error("Error fetching bill:", error); 
    return new NextResponse("Error fetching bill", { status: 500 }); 
  }
}