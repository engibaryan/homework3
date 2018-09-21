//A function that takes at least three arguments and returns the result of some set of operations using those arguments - 5 points
const a = function (b, c, d) {
	return(b + d *c);
};
console.log(a(5, 69, 12));


//A function that takes no arguments and returns something - 5 points
const b = function () {

	return ("Something");
};
console.log(b());

//A function that takes arguments, does something but does not return anything - 6 points
const c = function (t, r ,c) {

    if(t > r+c) {
    	t = 350;  
    }
  else {
     t = 400;
  }
};

c(1, 10, 3);

//A function that takes three strings and returns the string that is the longest.  - 6 points
const d = function (v, k, n)  {
         if(v.length>k.length && v.length>n.length) {
         	return v;
        }
         else if(k.length>v.length && k.length> n.length) {
         	return k;
        } 
          else {
         	return n;
        }

};
console.log(d("Ben", "Thomas", "Azdrbek"));

//A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger - 6 points
const e = function (p, q) {

	if(p===q) {
		return 0;
	}
	else if(p>q){
		return 1;
	}
	else if (p<q) {
		return -1;
	}
};
console.log(e(20, 5));

//Create a multiply function (that multiplies the two given arguments together and returns the result) - 2 points
const f =  function (j , z) {
  
	return j*z;
};
console.log (f(5,12));

//Create a divide function (that divides the first argument by the second and returns the result) - 2 points
const g = function (r , b) {

	return r/b;

};

//Create a triangleArea function that takes base and height as input and returns the area of a triangle without using * or / (HINT: Use the multiply and divide functions you already wrote) - 6 points
const triangleArea = function(base, height) {
  return g(f(base, height), 2);
};
console.log("Erankyan makeres  " + triangleArea(prompt("Base of Triangle"), prompt("Height of Triangle")));

//Create a function called numLength that takes a number and returns the number of characters in the number (example: numLength(8940); should return 4).  Hint: strings have .length, numbers don't - so make a string and then get the length - 6 points
const h = function(a) {
      
      a = a + " ";
      return(a.length - 1); 
}
console.log(h(prompt("Number which length is needed.")));

//Create a function that takes two strings and a number.  If the length of the two strings concatenated together is greater than the given number, return 1, else return -1.
const i = function(a, b, c) {

	if ((a+b).length > c) {
       return  1;
	}
	else if((a+b).length === c){
		return 0;
	}
	else {
		return -1;
	}
}
console.log(i("Capki", "Pachevnik", 16));

//Create a function runStuff that takes two numbers and a string.  If the string is 'rectangle', return the area of a rectangle using the two numbers as base and height.  If the string is 'triangle', return the area of a triangle (you can use the triangleArea function here).  If the string does not match 'rectangle' or 'triangle', return -1.   - 10 points
const runStuff = function(a, b, c) {
	if(a === "rectangle") {
		return b*c;
	}
	else if (a === "triangle") {
		return triangleArea( b, c);
	}
	else {
		return -1;
	}
}

 console.log(runStuff("triangle", 2, 4))
