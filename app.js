const express = require( "express");
const { v4: uuidv4 } = require('uuid');
const app = express( );

const port = 2000;

app.get("/guids",( request,response) => {
    // response.send("hello world from express");
    const guid_unique_id = uuidv4();
     response.json({ guid_unique_id});

})

app.listen( port , ( ) => console.log(`The server is listening at port ${port}`));
