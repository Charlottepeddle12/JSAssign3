import Link from "next/link";

export default async function Characters() {

    const response = await fetch("http://localhost:3000/api/characters");
    const data = await response.json()
    console.log(data)
    
    return (
        <>
        <h2>Characters</h2>
        <ul>
            { data.map((character) => {   
                return <li key={character.id}><Link href={"/characters/" + character.id} >{character.name}</Link></li>
            })}
        </ul>
        </>
    )
}