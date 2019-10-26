const request = require("express");
const routes = require("./src/routes");

// All Api routes
app.use(
    "/api",
    routes.attendees,
);

// Render React Application
app.use(express.static(path.join(__dirname, "/client/build/")));