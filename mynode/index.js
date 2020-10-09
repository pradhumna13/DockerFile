const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send({
        message:"You are visiting root"
    });
});

app.get("/login", (req,res) => {
    res.send({
        message:"You are visiting login route"
    });
});

app.get("/signup", (req,res) => {
    res.send({
        message:"You are visiting signup route"
    });
});

app.get("/logout", (req,res) => {
    res.send({
        message:"You are logged out"
    });
});

app.listen(8000, () => {
    console.log("App is running at 8000");
});