// index.js

/**
 * Required External Modules
 */
 const express = require("express")
 const path = require("path")

/**
 * App Variables
 */

 // Creating an instance of an Express Application
 const app = express()
 // Define which port the server will use when listen for requests. 
 // If available || default
 const port = process.env.port || "8000"

/**
 * App Configuration
 */

 // used to tell Express what directory it should use as the source of view template files. 
 app.set("views", path.join(__dirname,"views"))
 // used to tell Express what template engine to use, in this case pug
 app.set("view engine", "pug")
 //app.use is used to mount express.static() function. Any css or image files can now be stored in public directory for use.
 app.use(express.static(path.join(__dirname,"public")))

/**
 * Routes Definitions
 */

 // A simple route handler for the HTTP GET request that replies with a string
 /*app.get("/", (req, res) => {
    res.status(200).send("WHATABYTE: Food for Devs")
 })*/

 //reply by rendering index.pug. Does not need .pug after index because pug is the default engine. 
 app.get("/", (req, res) => {
    res.render("index", {title: "Home"})
 })

 //Using the second parameter of res.render() to pass data from the controller to the user template. In this case it is a mock user's information
 app.get("/user", (req, res) => {
     res.render("user", {title: "Profile", userProfile: {nickname: "Auth0"}})
 })

/**
 * Server Activation
 */
 
 // A server listener for incoming requests on port and to display a confirmation message
 app.listen(port, () => {
     console.log(`Listening to requests on http://localhost:${port}`)
 })