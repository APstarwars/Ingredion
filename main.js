const express = require("express");
// const routes = require("./src/routes");
const path = require("path");

const app = express();

// Render React Application
app.use(express.static(path.join(__dirname, "/client/build/")));

app.listen(3000, () => {
    console.log("listening on 3000");
});

// Imports the Google Cloud client libraries
const vision = require('@google-cloud/vision');
const fs = require('fs');

// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */

// const fileName = `/./`;
const request = {
  image: {content: fs.readFileSync(fileName)},
};

const [result] = await client.objectLocalization(request);
const objects = result.localizedObjectAnnotations;
objects.forEach(object => {
  console.log(`Name: ${object.name}`);
  console.log(`Confidence: ${object.score}`);
  const vertices = object.boundingPoly.normalizedVertices;
  vertices.forEach(v => console.log(`x: ${v.x}, y:${v.y}`));
});