
const express=require('express');
const mongoose = require('mongoose');
const server=express();
const dbname ='mongodb+srv://harsh_jaiswal:hjjfootball@cluster0.d20nv.mongodb.net/mydatabase?retryWrites=true&w=majority';

mongoose.connect(dbname, {useNewUrlParser: true, useUnifiedTopology: true }).then((res) => {
		console.log("Database is connected");
});
server.use(express.static('public'));
server.listen(3000,function(){
	console.log('Started a server on port 3000');
});
server.use(express.json({limit: '1mb'}));
server.use(express.urlencoded({extended:false}))



server.post('/products', (request,response) => {
	console.log(request.body);
	response.json("ok got it here");
	response.end();
});


