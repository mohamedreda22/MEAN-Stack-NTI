const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
app.use(express.json());



mongoose.connect('mongodb://127.0.0.1:27017/newDB1').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error: ', err);
});

const StudentSchema = new mongoose.Schema({
    // trim: true to remove any white spaces (start and end)
    name: {type: String,unique:true ,required: true,minlength:3,maxlength: 25,trim: true,match: /^[a-zA-Z ]+$/},
    age: {type: Number, required: true, min: 10, max: 50},
    courses:[{subject:String,score:Number}],
    isActive: Boolean,
    grade: Number
}, {timestamps: true});
const Student = mongoose.model('Student', StudentSchema);
// very important to create index for unique fields like email and username to make the search faster
Student.syncIndexes().then(() => {
    console.log('Index created');
}).catch((err) => { 
    console.log('Error: ', err);
});

app.post('/students', async (req, res) => {
    // const student = new Student(req.body);
    // await student.save();
    // res.send(student);
    try {
        const myStudent = await Student.insertMany(req.body);
        res.status(201).json(myStudent);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

app.get('/students', async (req, res) => {
    // const students = await Student.find({$and:[{grade:85},{age:25}]});
    // const students = await Student.find({$or:[{grade:85},{age:25}]});
    // const students = await Student.find({$nor:[{grade:85},{age:25}]});
    // const students = await Student.find({grade:{$gt:85}});
    // const students = await Student.find({grade:{$lt:85}});
    // const students = await Student.find({grade:{$gte:85}});
    // const students = await Student.find({grade:{$lte:85}});
    // const students = await Student.find({grade:{$ne:85}});
    // const students = await Student.find({grade:{$in:[85,90]}});
    // const students = await Student.find({grade:{$nin:[85,90]}});
    // const students = await Student.find({grade:{$exists:true}});
    // const students = await Student.find({grade:{$exists:false}});
    // const students = await Student.find({grade:{$type:'number'}});
    // const students = await Student.find({grade:{$type:'string'}});
    // const students = await Student.find({"courses.subject":{$in:'math'}});
    // const students = await Student.find({"courses.subject":{$nin:'Arabic'}});
    // to display only the name and age
    // const students = await Student.find({},{name:1,age:1,_id:0});
    // contains /al/ ends with /^al/ ends with /al$/
    // const students = await Student.find({name:/^Al/});
    // const students = await Student.find().sort({grade:1});
    // const students = await Student.find().sort("-grade");
    // const students = await Student.find().limit(5);
    // const students = await Student.find().skip(5).limit(5);
    // const students = await Student.find().countDocuments();
    // const students = await Student.find().select('name age');
    // const students = await Student.find().select('name age -_id');
    // const students = await Student.findById('6767e207bf6f6599bb2c78f7');
    // const students = await Student.where('grade').gte(85).lte(90);
    // const students = await Student.aggregate([
    //     {
    //         // $group: {_id:null,avgAge:{$avg: '$grade'}}
    //         $group: {_id:null,sum:{$sum: '$grade'}}
    //     }
    // ]);
    const students = await Student.find()
    res.status(200).json(students);
    // res.status(200).json({totalGrades:students});
});

// This is the original code for the get by id (req.params.{id || name})
app.get('/students/:grade/:age', async (req, res) => {
    const students = await Student.find({grade: req.params.grade, age: req.params.age});
    res.status(200).json(students);
});

// This is the code for the get by id (req.query.{id || name})
app.get('/students', async (req, res) => {
    const students = await Student.find
    ({grade: req.query.grade, age: req.query.age});
    res.status(200).json(students);
});

// app.put('/students/:id', async (req, res) => {
//     try {
//         // const student = await Student.findByIdAndUpdate(req.params.id, req.body, {new: true});
//         const student = await Student.updateOne({grade:100},{name:"Ahmed"});
//         res.status(200).json(student);
//     } catch (err) {
//         res.status(404).json({message: err.message});
//     }
// }
// );
 app.delete('/students', async (req, res) => {
    try {
        // const student = await Student.deleteOne({grade:100});
        res.status(200).json(student);
    } catch (err) {
        res.status(404).json({message: err.message});
    }
}
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });
    