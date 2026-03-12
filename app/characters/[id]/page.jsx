import Character from "@/components/Character";

export async function generateStaticParams(){
    const options = {
                method: "GET",
                headers: {"Content-Type": "application/json"}
            }
   const response = await fetch("https://rickandmortyapi.com/api/character", options)
   const characters = await response.json();
   return characters.results.map((character)=>({
    id:character.id.toString() 
   }))
}

export default async function CharacterDetail(props) {
    const {id} = await props.params;

    const options = {
                method: "GET",
                headers: {"Content-Type": "application/json"}
            }
    const response = await fetch("https://rickandmortyapi.com/api/character/" + id, options);
    const character = await response.json();

    return(
        <Character name={character.name} species={character.species} image={character.image}/>
    )   
}