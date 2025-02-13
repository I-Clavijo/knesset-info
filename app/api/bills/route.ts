import { NextResponse } from 'next/server';
import Bill from '@/lib/models/Bill';
import dbConnect from "@/lib/db";

const LIMIT_PAGINATION = 10;  

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const pageNumber = parseInt(searchParams.get('page') || '1', 10);
  const toSkip = (pageNumber - 1) * LIMIT_PAGINATION;


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
        bills: await Bill.find({}).sort({ LastUpdatedDate: -1 }).skip(toSkip).limit(LIMIT_PAGINATION),
      });
  }
}