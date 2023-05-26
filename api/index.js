const express =  require("express");
const mongoose = require("mongoose")
const app = express();
const dotenv = require("dotenv");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(()=> console.log("DB Connection")).catch(err=>console.log(e));

app.use(express.json());
app.use('/api/auth',authRoute);
app.use('/api/users',userRoute);

app.listen(8800,()=>{console.log("backend")});
