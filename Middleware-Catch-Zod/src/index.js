const express = require('express');
const app = express();

const common = require('./routes/common')
const returnToken = require('./routes/returnToken')

app.use(express.json()); // body parser

app.get("/", (req, res) => {
    res.send("Server Running");
});

app.use("/api/v1", common);
app.use("/api/v2", returnToken);


// Multiple apps can be run on single server using different ports.
app.listen(3000, ()=>{
    console.log(`server started at PORT: ${3000}`);
});

