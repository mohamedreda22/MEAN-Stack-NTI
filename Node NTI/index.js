// let object = "hello world!"
// console.log('object :>> ', object);

// console.log("process.argv :>> ", process.argv);
// console.log("global :>> ", global);

// function calc (num1, num2) {
//   return num1 + num2
// }

// console.log(calc(process.argv[2], process.argv[3]));//string input

// console.log(calc(parseInt(process.argv[2]), parseInt(process.argv[3])));//number input

// three types of modules

// 1. core modules

const fs = require("fs"); // file system

// console.log('fs :>> ', fs);

// fs.mkdir('newDir', (err) => {
//     if(err) throw err
//     else{
//         fs.writeFile('./newDir/hello.txt', 'Hello World!', (err) => {
//             if(err) throw err
//             console.log('File created');
//         })
//     }
// })

// fs.mkdir("NEW Folder", (err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log("NEW FOLDER CREATED :>> ");
//   }
// });

// console.log("object1 :>> ");
// console.log(fs.mkdirSync("./NEW FOLDER1"));
// console.log("object2 :>> ");

// fs.mkdir('./newDir/child',
//     {recursive:true},(err)=>{
//         if(err){
//             console.log('err :>> ', err);
// }else{
//     console.log('folder created :>> ');
// }})

// we want to make a package to create the folder strucuer for the node.js backend!!

const fsPromises = fs.promises;

// fsPromises.mkdir('./newDir/child',{recursive:true})
// .then(()=>{
//     console.log('folder created');
// })
// .catch((err)=>{
//     console.log('err :>> ', err);
// })
// async function createFolder(){
//     try{
//         await fsPromises.mkdir('./newDir/child1',{recursive:true}).then(()=>{
//             fsPromises.writeFile('./newDir/child1/hello.txt','Hello World!')
//         }
//         )
//     }catch(err){
//         console.log('err :>> ', err);
//     }
// }
// createFolder()

// fsPromises
//   .mkdir("./controller/authController", { recursive: true })
//   .then(() => {
//     fsPromises
//       .writeFile(
//         "./controller/authController/auth.js",
//         `console.log('file created')`
//       )
//       .then(() => {
//         console.log("file created");
//       })
//       .catch((err) => {
//         console.log("err :>> ", err);
//       });
//   });

// fs.rm("./controller",{recursive:true}, (err) => {
//   if (err) {
//     console.log("err :>> ", err);
//   } else {
//     console.log("folder deleted");
//   }
// });

// fs.rename("./NEW FOLDER1", "./Abo Reda", (err) => {
//   if (err) {
//     console.log("err :>> ", err);
//   } else {
//     console.log("folder renamed");
//   }
// });

// fs.writeFile("./test.txt", "Hello World!", (err) => {
//     if (err) {
//         console.log("err :>> ", err);
//     } else {
//         console.log("file created");
//     }
//     }
// );

// fs.appendFile("./test.txt", `\n"Hello World!"`, (err) => {
//     if (err) {
//         console.log("err :>> ", err);
//     } else {
//         console.log("file created");
//     }
//     }
// );

// fs.readFile("./test.txt", "utf8", (err, data) => {
//     if (err) {
//         console.log("err :>> ", err);
//     } else {
//         console.log("data :>> ", data);
//     }
//     }
// );

// fs.unlink("./text.txt", (err) => {
//     if (err) {
//         console.log("err :>> ", err);
//     } else {
//         console.log("file deleted");
//     }
//     });

// fs.access("./test.txt", fs.constants.F_OK | fs.constants.W_OK | fs.constants.R_OK | fs.constants.X_OK, (err) => {
//     if (err) {
//         console.log("err :>> ", err);
//     } else {
//         console.log("file exists");
//     }
//     }
// );

// fs.readdir("./", (err, files) => {
//   if (err) {
//     console.log("err :>> ", err);

//   } else {
//     console.log("files :>> ", files);
//   }
// });

// 2. local modules

// const myModule = require('./myModule')

// console.log('myModule :>> ', myModule);

// 3. third party modules

// const _ = require('lodash')

// console.log('_.random(1, 10) :>> ', _.random(1, 10));

// console.log('_.shuffle([1, 2, 3, 4, 5]) :>> ', _.shuffle([1, 2, 3, 4, 5]));

// console.log('_.camelCase("Hello World") :>> ', _.camelCase("Hello World"));

// const{
//     getStudent,
//     AddStudent,
//     mayVar
// }= require('./student')

// console.log('getStudent() :>> ', getStudent());

// console.log('AddStudent() :>> ', AddStudent());

// console.log('mayVar :>> ', mayVar);

//
