import { connectMongoDB } from "@/lib/mongodb";
import Question from "@/models/question";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type') as string; 
   
  
  
    
    await connectMongoDB();
    try {
        let data;
        if(type) {
             data = await ( Question.find({"type": type})).limit(30)
        }
       
        
        return NextResponse.json({ data }, { status: 200 });
    } catch (err) {
        console.error(err); // Log the error for debugging purposes
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
