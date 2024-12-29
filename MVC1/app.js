const connectDB = require('./config/db.config');
const express = require('express');
const app = express();
const userRouter = require('./routers/user.router');
const userTypeRouter = require('./routers/userType.router');
const productRouter = require('./routers/product.router');
const port = 3000;
const cors = require('cors');
//test
connectDB(); // connect to database
app.use(cors(
    {
        origin: 'http://localhost:4200'
    }
));
app.use(express.json()); // for parsing application/json
app.use('/users', userRouter); 
app.use('/userTypes', userTypeRouter);
app.use('/products', productRouter);




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    // show my name in cool way
    


    
        
}
);