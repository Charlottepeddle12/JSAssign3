import { connectToDB } from "@/app/api/db";

export async function POST(request) {
    const {db} = await connectToDB();
    const newCharacter = await request.json();
    await db.collection("characters").insertOne(newCharacter);
    return new Response(JSON.stringify("Character sucessfully added."), 
        {status: 200,
        headers: { 'Content-Type' : 'application/json'  
        }
    });


}
