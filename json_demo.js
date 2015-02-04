/*	
	A demonstration of using JSON to define js objects
	Preferably use this notation when working on web-related applications
*/

var TestClass =new function() {
	this.testVariable = "Basic String";
	this.testFn = function() {
		console.log("Displaying irrelevant stuff");
	};
};

console.log(TestClass.testVariable);
TestClass.testFn();
