// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("rickmorty");

db.getCollection("characters").insertMany(
    [
    {
        "name": "Rick Sanchez",
        "species": "Human",
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
        "name": "Morty Smith",
        "species": "Human",
        "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    }
    ]
)

console.log(db.getCollection("characters").find({}));


// Find a document in a collection.
//db.getCollection("my_games").findOne({

//});
