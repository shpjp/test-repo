//creating an https server
//by express
//is it node default lib => no
// fs in bundled directly with node
// so we need to bring it locally to our machine by npm install express

const express = require("express");

const app = express();

function sum(n){
    let ans = 0 ;
    for(let i = 1; i <= n; i++){
        ans += i;
    }
    return ans;
}

app.get("/", function(req, res) {
    const n = req.query.n;
    const ans = sum(n);
    res.send("Sum of first " + n + " natural numbers is " + ans);
    //by express
  res.send("Hello World");
});


app.listen(3001);
