//code below makes a server that calculates the sum from 1 to n, where n is given as a query parameter in the URL
//different ports can be taken by java, js like 3000, 8000, 5000, 8080 etc
//express is a framework that makes it easy to create web servers in node.js
 
const express = require("express");

function calculationSum(n) {
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        ans += i;
    }
  return ans;
}

const app = express();


app.get('/sum', function(req, res) {
    const n = req.query.n;
    const result = calculationSum(n);
    res.send(result.toString());
    // res.send(result);
}); 

app.listen(3000); //like a doctor who listens to the patient on port 3000



// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const PORT = process.env.PORT || 3000;

// // middleware to parse JSON
// app.use(bodyParser.json());

// // middleware to parse form-data (if needed)
// // app.use(express.urlencoded({ extended: true }));

// app.post("/test", (req, res) => {
//   console.log(req.body); // should NOT be undefined
//   res.send('{ received: req.body }');
// });



// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// // const express = require('express')
// // const app = express()
// // const port = 3000

// // app.get('/conversation', (req, res) => {
// //     console.log(req.headers['authorization'])
// //     res.send('<b>This was fast!</b>')
// // })

// // app.listen(port, () => {
// //     console.log(`Example app listening on port ${port}`)
// // })

