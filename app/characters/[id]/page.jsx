import Character from "@/components/Character";
export default async function CharacterDetail( props ) {
    const {id} = await props.params;

    const response = await fetch(`http://localhost:3000/api/characters/${id}`);
    const data = await response.json()
    return (
        <Character name={data.name} species={data.species} imageURL={data.imageURL} />
    )
}