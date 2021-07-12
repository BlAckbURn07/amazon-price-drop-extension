//alert('Grrr.')
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	const re = new RegExp('g','gi')
	const matches = document.documentElement.innerHTML.match(re)
	sendResponse({count: matches.length})
})
// const re = new RegExp('sex','gi')
// 	const matches = document.documentElement.innerHTML.match(re)
// 	chrome.runtime.sendMessage 
