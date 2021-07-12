const express=require('express');
const server=express();
server.use(express.static('public'));
server.listen(3000,function(){
	console.log('Started a server on port 3000');
});
server.use(express.json({limit: '1mb'}));
server.use(express.urlencoded({extended:false}))
 var cors = require('cors');
 server.use(cors());

server.get("/", (request,response)=>
{
  response.send("This is a 'Get' response from app.js")
});

server.post('/products', (request,response) => {
	console.log(request.body);
	response.json("ok got it here");
	response.end();
});