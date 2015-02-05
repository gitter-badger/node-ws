/*
	Asynchronous functionality can be leveraged by using the setTimeout function
	async(fn,callback) will demonstrate how a thread will be created so that the async process will work 
	
	To give a brief synopsis of what happens:
	1. An asynchronous function call will start a new thread for the method to be called.
	2. It then continues executing the next procedure in sequence while the async function runs parallel to the main thread
	3. The callback function will be executed only when the first function is executed
	4. Once the procedure is completed, the corresponding thread is deleted
*/


function async(fn,callback)
{
	setTimeout(function(){
		fn();
		callback();
	},0);
}

function test()
{
	console.log("Method called");
}

// Synchronous callback

console.log("\nBefore calling synchronous function");
test();
console.log("After calling synchronous function\n");

console.log("Before calling asynchronous function");
async(test,function() {
	console.log("Async's callback");
});
console.log("After calling asynchronous function");
