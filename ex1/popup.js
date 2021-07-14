
let app=angular.module("amazonextension", ['ui.router']);
app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: '/login.html',
      controller: 'logger'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: '/signup.html',
      controller: 'logger'
    })

  $urlRouterProvider.otherwise('login');
}]);
var ID;
var Password;
var userdata={
	ID,
	Password
}

app.controller('logger', ['$scope', '$state', function($scope, $state) {
    $scope.username = 'harsh';
    $scope.password = 'password';

    $scope.makedata = function(usernam,passwor) {
        $scope.username = usernam;
        userdata.ID=usernam;
        userdata.Password=passwor;
        console.log(userdata);
    };

    $scope.changestate=function(){
      $state.go('signup');
    };

}]);

    // chrome.tabs.query({currentWindow: true, active: true},
    //   function (tabs){
    //     chrome.tabs.sendMessage(tabs[0].id,'hi')  
    //   })
// app.controller('DoubleController', ['$scope', function($scope) {
//   $scope.double = function(value) { return value * 2; };
// }]);

// document.addEventListener('DOMContentLoaded',function () {
// 	document.querySelector('button').addEventListener('click',onclick)
// 	function onclick () {
// 		chrome.tabs.query({currentWindow: true, active: true},
// 			function (tabs){
// 				chrome.tabs.sendMessage(tabs[0].id,'hi',counter)	
// 			})
// 		function counter(ress){
// 			const div = document.createElement('div')
// 			div.textContent=`${ress.count} times g`
// 			document.body.appendChild(div)
// 		}
// 	}
// })