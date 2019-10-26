const express = require("express");
// const routes = require("./src/routes");
const path = require("path");

const app = express();

// Render React Application
app.use(express.static(path.join(__dirname, "/client/build/")));

app.listen(3000, () => {
    console.log("listening on 3000");
});

// Bring forth Google cloud Vision API
async function quickstart() {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');
    // Creates a client
    const client = new vision.ImageAnnotatorClient();  
    // Performs label detection on the image file
    const [result] = await client.labelDetection('./resources/wakeupcat.jpg');
    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
}