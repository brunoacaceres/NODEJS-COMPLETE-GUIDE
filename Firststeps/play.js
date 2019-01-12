const person = {
    name: 'Bruno',
    age: 35,
    greet() {
        console.log('Hi, I am ' + this.name)
    }
};

// const printName = (personData) => {
//     console.log(personData.name);
// }

// printName(person)

const printName = ({ name }) => {
    console.log(name);
}

printName(person)

const { name, age} = person;
console.log(name, age);



// const copiedPerson = {...person};
// console.log(copiedPerson);


const hobbies = ['Sports', 'Cooking'];
const [ hobby1, hobby2 ] = hobbies;
console.log(hobby1, hobby2);


// for(let hobby of hobbies){
//     console.log(hobby);
// }

// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

// hobbies.push('Programming');
// console.log(hobbies);

// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const toArray = (arg1, arg2, arg3) => {
//     return [arg1, arg2, arg3];
// };

// const toArray = (...args) => {
//     return [args];
// };
// console.log(toArray(1,2,3,4,5,6,7,8,9,10));