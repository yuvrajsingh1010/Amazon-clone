/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
//const {onRequest} = require("firebase-functions/v2/https");
//const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express = require("express");


const cors = require("cors");
const stripe = require("stripe")
("sk_test_51O8PY1SIJZ1GmJjde4oDvB0cnkxUYhishdnscxyCUIgnlgZjA6S3Geb8VFflVLURb1FI09KhIVxBnK7Raaq25xre00jwyILj7x");


//API
//APP CONFIG
const app = express();

//MIDDLEWARES
app.use(cors({origin: true}));
app.use(express.json());

//API ROUTES
app.get('/',( request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
  
    console.log('Payment Request Received BOOM!!! for this amount >>>', total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: 'inr',
      metadata: { integration_check: 'accept_a_payment' },
    });
  
    const clientSecret = paymentIntent.client_secret;
  
    response.status(201).send({
      clientSecret,
    });
  });
  

//-LISTEN COMMAND

exports.api = functions.https.onRequest(app);

//http://127.0.0.1:5001/clone-94a08/us-central1/api