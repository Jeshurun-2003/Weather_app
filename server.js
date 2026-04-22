const express = require("express");
const axios = require("axios");
require("dotenv").config();
const app = express();
const port = 3001;

app.use(express.static("public"));

const API_KEY = process.env.API_KEY;

app.get("/weather", async(req,res) => {
    const city = req.query.city;

    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
        res.json(response.data);
    }
    catch(error){
        res.status(500).json({error : "city not found"});
    }
});

app.listen(port,() => {
    console.log(`server running on port ${port}`);
})