// let object = "hello world!";
// console.log('object :>> ', object);

// console.log("process.argv :>> ", process.argv);
// console.log("global :>> ", global);

// function calc(num1, num2) {}

// console.log(calc(process.argv[2], process.argv[3])); // string input
// console.log(calc(parseInt(process.argv[2]), parseInt(process.argv[3]))); // number input

// Core modules
const fs = require("fs"); // file system

// fs.mkdir('Abo reda1',(err)=>{
//     if (err) {
//         return console.error(err);
//     } else {
//         console.log('new folder :>> created!');
//     }

// });
// fs.mkdirSync("new abo reda folder", (err) => {
//   if (err) {
//     return err;
//   } else {
//     console.log("new abo reda folder :>> ");
//   }
// });
// fs.rm("./new abo reda folder", { recursive: true }, (err) => {
//   if (err) {
//     return err;
//   } else {
//     console.log("removed! :>> ");
//   }
// });
// fs.rename("./Abo reda1", "./Abo reda2", (err) => {
//   if (err) {
//     return err;
//   } else {
//     console.log("renamed :>> ");
//   }
// });
// fs.writeFile("test.txt", "new line created!", (err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log("addd new lined :>> ");
//   }
// });
// fs.appendFile("test.txt", "hello world!! new lined added!!", (err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log("new line added~~\n");
//   }
// });
// fs.readFile("test.txt", "utf-8",function(req,res) {
//     if (req){
//         console.log('request :>> ', req);
//     }if(res){
//         console.log('responsed :>> ', res);
//     }
//     else{
//         console.log('error :>> ');
//     }
// })
// fs.unlink("./test.txt", (err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log("the file removed!! :>> ");
//   }
// });
// fs.access("student.js",(err)=>{
//     if(err){
//         throw err
//     }else{
//         console.log('access the data :>> ');
//     }
// });
// fs.readdir();

// Using promises with `fs.promises`
const fsPromises = fs.promises;

// fsPromises.mkdir("New folder!",(err)=>{
//     if(err) throw err
//     else fsPromises.appendFile("text.txt","hello world!!",(err)=>{
//         if(err) throw err
//         else console.log("new file created!")
//     })
// });
// fsPromises.writeFile(...);

// Local modules
// const myModule = require('./myModule');
// console.log('myModule :>> ', myModule);

// Third-party modules
// const _ = require('lodash');
// console.log('_.random(1, 10) :>> ', _.random(1, 10));
// console.log('_.shuffle([1, 2, 3, 4, 5]) :>> ', _.shuffle([1, 2, 3, 4, 5]));
// console.log('_.camelCase("Hello World") :>> ', _.camelCase("Hello World"));

// Destructuring from a local module
// const {
//     getStudent,
//     AddStudent,
//     mayVar
// } = require('./student');

// console.log('getStudent() :>> ', getStudent());
// console.log('AddStudent() :>> ', AddStudent());
// console.log('mayVar :>> ', mayVar);
//test!!