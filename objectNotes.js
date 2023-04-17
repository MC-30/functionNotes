// create an object of key-value pairs
let contacts = {
    bff: 123456,
    mom: 555555,
    bro: 897450
}

//log all
console.log(contacts);

//access a specific entry by its key (name)
console.log(contacts.bff);

//cant access if the key doesnt exist
console.log(contacts.myself);

//add a new entry
contacts.sis = 3235456;
console.log(contacts);

//update an entry
contacts.bff = 1111111;
console.log(contacts);

//delete an entry
delete contacts.mom;
console.log(contacts);

//is there a key called __ in there?
console.log("bff" in contacts);
console.log("myself" in contacts);

//objects are like arrays - pass by reference (location) not by value
//notice the following
let a = {
    value:20
};
let b = a;
let c = {
    value:20
};

console.log(a==b); //same object, as b points to a

console.log(a==c); //different objects with same value

console.log(b==c); //different objects with same value

console.log(a.value == c.value); //the value is the same, but not the object


//numbers are passed by value, not by reference. Similar for strings and booleans.

//create 5 objects below:

let dog = {

    dogName: 'Zelda',

    breed: 'Terrier',

    age: 9,

    size: 'medium',

    barks: true

}

console.log(dog);


let movie = {
    Rating: '5 stars',
    movieName: 'Guardians of the Galaxy',
    RunTime: '122 minutes',
    ReleaseDate: 'August 1, 2014'
}
console.log(movie);


let pen = {
    Model: 'Gel Pen',
    Color: 'Green',
    Price: '$3.99'
}
console.log(pen);


let sweater = {
    color: 'grey',
    type: 'hoodie',
    material: 'cotton',
    size: 'medium'
}
console.log(sweater);


let hamster = {
    name: 'jerry',
    color: 'tan',
    size: 'small',
    legs: '3',
    bites: 'false'
}
console.log(hamster);









