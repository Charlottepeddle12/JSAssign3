import { connectToDB } from "@/app/api/db";
export async function GET() {
    const {db} = await connectToDB();
    const characterData = await db.collection("characters").find({}).toArray();
    
    console.log("Characters sucessfully retrived.");

    return new Response(JSON.stringify(characterData), 
        {status: 200,
        headers: { 'Content-Type' : 'application/json'  
        }
    });
}

