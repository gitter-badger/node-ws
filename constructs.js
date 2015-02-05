/*
	The following code will demonstrate common constructs that are used by JavaScript.
	These usually correspond with C/C++/Java code, making learning the basics of JS quite easy
*/

// Variables - JS is loosely typed
var integ = 1;
var strin = "Hello";
var flop = 1.23232

/*
	JS does implicit data conversion. It has the following priority:
	String > Floating Point > Integer > Boolean
	Any lower data gets converted into the corresponding value of a higher type
*/
//String concatenation
console.log(integ+strin+flop);

//Addition of a float and an int
console.log(integ+flop);

//Boolean conversion to integer ( false -> 0 , true -> 1)
console.log(true+integ+true+false);

/*
	Functions are simiar in behavior to languages such as C++/Java etc.
	They differ in the fact that a JS function can return any type of data
	A javascript function does not distinguish between different types of data.
	It can accept any kind of data in the function call, hence you cannot overload functions in JS
*/
function f()
{
	console.log("Function called!");
}
//Function with parameters
function g(i)
{
	if (typeof i == 'number' && i%1 == 0)
		console.log("You've passed an integer "+i);
	else if (typeof i == 'number')
		console.log("You've passed a floating point number "+i);
	else
		console.log("You've passed a string "+i);
}


//While loop
var i = 0;
while (i < 2)
{
	//For loop ; Note that most of the constructs are identical to the ones in C
	for (var j = 0 ; j < 3 ; j++)
	{
		//Calling functions
		f();
		g("gas")
		g(1);
		g(1.5);
	}
	i++;
}

//Switch case ; again loosely typed
var ch = 1;
switch(ch) {
	case 1: 
		console.log("Case 1");
		break;
	default: 
		console.log("Default trigger");
}
