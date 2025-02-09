import { NextResponse } from 'next/server';
import Bill from '@/lib/models/Bill';
import dbConnect from "@/lib/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  await dbConnect();

  if (category && category.trim() === '') {
    return NextResponse.json({ message: 'Invalid category parameter' }, { status: 400 });
  }

  if (category) {
    return NextResponse.json({
        success: true,
        bills: await Bill.find({Category: category}),
      });
  } else {
    return NextResponse.json({
        success: true,
        bills: await Bill.find({}).sort({ LastUpdatedDate: -1 }),
      });
  }
}