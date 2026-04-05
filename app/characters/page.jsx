import Link from "next/link";
import Character from "@/components/Character";

export default async function Characters() {

    const response = await fetch("http://localhost:3000/api/characters");
    const data = await response.json()
    console.log(data)
    
    return (
        <>
        <h2>Characters</h2>
        <ul>
            { data.map((character) => {  
                return(
                <>
                    <Character data={character} />
                    <li key={character.id}><Link href={"/characters/" + character.id}>View {character.name} here</Link></li>
                    <br/>
                </>
            )
            })}
        </ul>
        </>
    )
}