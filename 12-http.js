/*
AKA HTTP module

*/

const http = require('http');

const server = http.createServer((req,res)=>{       // both parameters are objects
if (req.url=='/') {
    res.end("Welcome to the homepage")
}
if (req.url=='/about') {
    res.end("This is our short history")
}
    // res.write('welcome to our home page')
res.end(`
<h1>Ooops!</h1>
<p> we can not seem to find the page you are looking for</p>
<a href= "/">back home</a>
`)
})     

server.listen(5000)