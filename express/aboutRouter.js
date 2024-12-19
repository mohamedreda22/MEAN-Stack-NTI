const express =require("express")
const router=express.Router();

router.get("/",(req,res)=>{
    res.send('Hello WOrld from about GET!!')
})
router.get("/skills",(req,res)=>{
    res.send('Hello WOrld from about/skills GET!!')
})
router.post("/",(req,res)=>{
    res.send('Hello WOrld from about POST!!')
})

module.exports = router;

