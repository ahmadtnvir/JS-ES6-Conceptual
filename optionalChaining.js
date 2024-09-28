const petOwner = {
    name: "John Doe",
    pets: [
        {
            name: "Max",
            type: "Dog",
            breed: {
                name: "Labrador Retriever",
                age: 3,
                color: "Golden Retriever"
            }
        },
        {
            name: "Buddy",
            type: "Cat",
        }
    ]
}

console.log(petOwner.pets[0].breed.age); // Output: 3
console.log(petOwner.pets[1]?.breed?.age); // Output: undefined