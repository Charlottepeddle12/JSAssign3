import { MongoClient, ServerApiVersion } from 'mongodb';

export async function connectToDB() {
    const uri = `mongodb+srv://charlottepeddle12_db_user:test1234@cluster0.1hekjea.mongodb.net/?appName=Cluster0`

    const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
    });

    await client.connect();

    console.log("Connected to server.");

    return { client, db: client.db("rickmorty") };
}
