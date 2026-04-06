//import { gameData } from "@/app/gameData";
import { connectToDB } from "@/app/api/db";

export async function GET(request,{params}) {
    const {db} = await connectToDB();
    const {id} = await params;

    const currentCharacter = await db.collection("characters").findOne({id: parseInt(id)});
    if (!currentCharacter) {
        return new Response(JSON.stringify("Character not found"), {status: 404});
    }
    return new Response(JSON.stringify(currentCharacter), 
        {status: 200,
        headers: { 'Content-Type' : 'application/json'  
        }
    });
}
