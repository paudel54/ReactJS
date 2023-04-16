const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// adding scrret hidden keys:
const stripe = require("stripe")("sk_test_51MfiqIFUQcYcgGbkA89wLrDuUGFv7Ti1goiqDVURIdKaskihOA9d2Kwxp60hOyaMka79E7Pz1Liw8niBtlrUnai600R9v7J09g")

// API

// App config
const app = express();
// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// Api routes
app.get("/", (request, response) => response.status(200).send("hello World"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("payment request Received Boom!! for this amount >>", total)
    const paymentIntent = await stripe.paymentIntents.create(
        {
            amount: total, //subunit of currency
            currency: "usd",
        });
    // ok -created 201
    response.status(201).send({
        clientSecret: paymentIntent.clientSecret,
    })
})

// Listencommand
exports.api = functions.https.onRequest(app);

// install few dependencies:
// npm i express
// npm i cors middleware
// npm i stripe

// generated  example endpoint
// http://127.0.0.1:5001/challenge-77073/us-central1/api
// test app.get("/paudel", (request, response) => response.status(200).send("Hey paudel what's up"));