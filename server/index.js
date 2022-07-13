const express = require ("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");



dotenv.config()


mongoose.connect(process.env.MONGO_URL)
.then(() =>console.log("DB connection successfull"))
.catch((err) => {
    console.log(err)
})


app.use(express.json())
app.use("/server/users", userRoute)
app.use("/server/auth", authRoute)
app.use("/server/products", productRoute)
app.use("/server/carts", cartRoute)
app.use("/server/orders", orderRoute)

app.listen(process.env.PORT || 5500, () => {
    console.log("Backend server is running!")
})