const connectDB = require('./config/db.config');
const express = require('express');
const app = express();
const userRouter = require('./routers/user.router');
const userTypeRouter = require('./routers/userType.router');
const productRouter = require('./routers/product.router');
const categoryRouter = require('./routers/category.router');
const cartRouter = require('./routers/cart.router');
const port = 3000;
const cors = require('cors');
//test
connectDB(); // connect to database
app.use(cors(// allow requests from all domains and localhost:4200 (Angular app)    
    {
        origin: 'http://localhost:4200'
    }
));
app.use(express.json()); // for parsing application/json
app.use('/users', userRouter); 
app.use('/userTypes', userTypeRouter);
app.use('/products', productRouter);
app.use("/categories", categoryRouter);
app.use("/cart", cartRouter);
app.use('/images', express.static('imgs')); // serve images from imgs folder in the root directory



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    // show my name in cool way
    


    
        
}
);