import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../../lib/db';
import User from '../../../lib/models/user';

export async function GET() {
  try {
    await dbConnect();
    console.log("Connected to db");

    const users = await User.find({}); // Get all users
    
    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    
    const body = await request.json();
    const user = await User.create(body);
    
    return NextResponse.json(
      { success: true, data: user },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to create user" },
      { status: 500 }
    );
  }
}