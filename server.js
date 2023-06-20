////////////////////////
// Setup - Import deps and create app object
////////////////////////
require("dotenv").config()
const express = reuire("express")
const PORT = process.env.PORT
const pokemon = require("pokemon.js")

//////////////////////
// Declare Middleware
//////////////////////


///////////////////////
// Declare Routes and Routers 
///////////////////////
// INDUCES - Index, New, Delete, Update, Create, Edit, Show

///////////////////////////
// Server Listener
///////////////////////////
app.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`)
})