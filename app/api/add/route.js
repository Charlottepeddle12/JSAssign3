import { connectToDB } from "@/app/api/db";

export async function POST(request) {
    const {db} = await connectToDB();
    try{
        const newCharacter = request.body;
        console.log("Character " + newCharacter);

        //await db.collection("characters").insertOne(newCharacter);
        
        return new Response(JSON.stringify("Character sucessfully added."), 
        {status: 200,
        headers: { 'Content-Type' : 'application/json'  
        }
     });
    }
    catch(error){
        return new Response(JSON.stringify(error.message), 
        {status: 400,
        headers: { 'Content-Type' : 'application/json'  
        }
     });

    }
}
