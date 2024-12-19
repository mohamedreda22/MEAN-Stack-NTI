const express =require("express")

const router = express.Router();
const ProductsArray =[    
    {id:1,name:"Phone",description:"description of the Phone"},
    {id:2,name:"card",description:"description of the card"},
    {id:3,name:"ssss",description:"description of the ssss"},
]
router.get('/',(req,res)=>{
    res.json(ProductsArray)
})
router.post('/',(req,res)=>{
    // const {id,name,description }= req.body
    ProductsArray.push(req.body)
    res.json(req.body)
})

module.exports = router;