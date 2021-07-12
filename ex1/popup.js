document.addEventListener('DOMContentLoaded',function () {
	document.querySelector('button').addEventListener('click',onclick)
	function onclick () {
		chrome.tabs.query({currentWindow: true, active: true},
			function (tabs){
				chrome.tabs.sendMessage(tabs[0].id,'hi',counter)	
			})
		function counter(ress){
			const div = document.createElement('div')
			div.textContent=`${ress.count} times g`
			document.body.appendChild(div)
		}
	}
})