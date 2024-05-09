import { connectMongoDB } from "@/lib/mongodb";
import Question from "@/models/question";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    try {
        const data = await Question.find({});
        return NextResponse.json({ data }, { status: 200 });
    } catch (err) {
        console.error(err); // Log the error for debugging purposes
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
