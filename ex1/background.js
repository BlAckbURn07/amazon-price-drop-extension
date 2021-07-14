console.log('hey');
let value=1000;
let name="football";
const data={
 	value,
	name
};
const options={
	method: 'POST',
    headers: {
      'Content-Type': 'application/json'
  		},
	body: JSON.stringify(data)
};

// chrome.runtime.onMessage.addListener(function(request, sender){
// 		console.log("yes");
// });

fetch('http://localhost:3000/products', options).then(res=>{
	return res.json();
}).then((res1)=>{
	console.log(res1);
});

