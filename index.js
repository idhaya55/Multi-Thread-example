const express = require("express");
const {Worker} = require("worker_threads");
const app = express();


const port = 10000;

let counter = 0;

app.get('/', (req,res) => {
    res.status(200).json('You are Seeing an Beispiel of Multi Threading NodeJS server');
})


app.get('/counter', (req,res) => {
    let worker = new Worker('./worker.js');
    worker.on('message', (data) => {
      res.status(200).json({data});
    })
    worker.on("start", (data) => {
        res.status(200).json("close");
    })
})


app.listen(port, () => {
    console.log("Multi Threaded NodeJS Server Running on Port 10000...");
})