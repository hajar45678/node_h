
const express = require("express");
// mongodb+srv://bahharihajar:<db_password>@cluster0.incm9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const mongoose = require("mongoose");
const app = express();

const Article = require("../models/Article");
mongoose.connect(
    "mongodb+srv://bahharihajar:hZcoeu5eRnTjoZlD@cluster0.incm9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
        console.log("connected successfuly");
    }).catch((error) => {
        console.log("error with connecting with th DB ", error.message);
    });


// kan diroha bach nkhadmo bi body 
app.use(express.json());
app.get("/hello", (req, res) => {
    res.send("hello");
})
app.get("/", (req, res) => {
    res.send("Hi node js project");
})
app.put("/test", (req, res) => {
    res.send("you visited test ");
})
app.post("/addcomment", (req, res) => {
    res.send("post request on add comment");
})
app.delete("/testingdelete", (req, res) => {
    res.send("delete True");
})
app.get("/numbers", (req, res) => {
    let numbers = ""
    for (let i = 0; i <= 100; i++) {
        numbers += i + " - ";
    }
    res.send(`the numbers are : ${numbers}`);
})
app.get("/findsum/:number1/:number2", (req, res) => {
    const num1 = req.params.number1;
    const num2 = req.params.number2;
    const total = Number(num1) + Number(num2);
    console.log(req.params);

    res.send(`the total is ${total} `);
})
app.get("/sayHello", (req, res) => {
    // console.log(req.query);
    // console.log(`hello ${req.body.name}, Age is : ${req.query.age}`);

    res.json({
        name: req.body.name,
        age: req.query.age,
        language: "Arabic"
    });
});
app.get("/user", (req, res) => {
    // res.sendFile(__dirname + "/views/numbers.html");
    res.render("numbers.ejs", {
        name: "yarob",
    });
})



app.listen(3001, () => {
    console.log("I am listening in port 300");
})


