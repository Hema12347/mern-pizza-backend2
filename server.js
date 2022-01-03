const express = require("express");
const cors = require('cors')

const Pizza = require("./models/pizzaModel");

const app = express();
app.use(cors())
const db = require("./db.js");
app.use(express.json());

const path = require("path");
const pizzasRoute = require("./routes/pizzasRoute");
const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/ordersRoute");
const router = require("./routes/pizzasRoute");

app.use("/api/pizzas/", pizzasRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", ordersRoute);


app.use('/',(req,res)=>{
    res.send("server running in backend")
})

const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on port port`);
