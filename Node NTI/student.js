function getStudent() {   
    console.log('object :>> ');
    return {
        name: "John Doe",
        age: 25,
} }

function AddStudent() {
    console.log('student added :>> ', );
    return {
        name: "Jane Doe",
        age: 30,
    }
}

function sayHello() {
    console.log('hello world!');
}

let mayVar = "hello world!";


module.exports = {
    getStudent,
    AddStudent,
    // sayHello,
    mayVar
}