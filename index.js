const express = require('express');
const app = express();
const port = 5000;


// const handler=(req,res)=>{
//     res.send("Hello from node");
// }



app.get('/', (req, res) => {
    res.send('woww  !! Hello my World!!n')
  })


  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

// -----------------------------------------------------------------------------