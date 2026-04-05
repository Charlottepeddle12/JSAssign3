export default function Character( {data} ) {
    return (
        <>
            <h2>{data.name}</h2>
            <p>{data.species}</p>
            <img src={data.image} alt={"An image of" + data.name} height={100} width={200}></img>
        </>
    )
}