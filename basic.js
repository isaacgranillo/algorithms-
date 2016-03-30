//some basic algorithms written in JavaScript


// for a given number prints all numbers from 0 up to and including the given number
function printAll(num){
	for(var i = 0; i <= num; i++){
		console.log(i);
	}
};

// prints the integers up to a given number and the sum up to that given number so far
function printSum(num){
	var sum = 0;
	for(var i = 0; i <= num; i++ ){
		sum += i;
		console.log(i, sum)
	};
};

//finds the largest number in an array
function findMax(arr){
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		};
	};
	console.log(max);
};

//creates an array with all the odd numbers up to a given number
function oddArray(num){
	var arr = [];
	for(var i = 0; i <= num; i++){
		if(i % 2 != 0){
			arr.push(i)
		};
	};
	console.log(arr);
};

//counts the number of array elements with a value less than a given number
function lessThan(arr, L){
	var count = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] < L){
			count++
		};
	};
	console.log(count);
};

//prints the maximum, minimum and average values of a given array
function maxMinAvg(arr){
	var max = arr[0];
	var min = arr[0];
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		};
		if(arr[i] < min){
			min = arr[i];
		};
		sum += arr[i];
	};
	var avg = sum/arr.length
	var newArr = [max, min, avg]
	console.log(newArr);
};

//replaces any number in an array less than a given number to a given string 
function numberToString(arr, L, str){
	for(var i = 0; i < arr.length; i++){
		if(arr[i] < L ){
			arr[i] = str;
		};
	};
	console.log(arr)
};

//prints all even numbers up to and including the given number
function printEven(num){
	for(var i = 0; i <= num; i++){
		if(i % 2 == 0){
			console.log(i);
		};
	};
};

//iterates and prints all values in a given array
function arrayVals(arr){
	for(var i = 0; i < arr.length; i++){
		console.log(arr[i]);
	};
};

//gets the average of all the numbers in an array excluding any data type that is not a number
function getAvg(arr){
	var sum = 0;
	var count = 0;
	for(var i = 0; i < arr.length; i++){
		if(typeof arr[i] === 'number'){
			sum += arr[i];
			count++;
		};
	};
	var avg = sum/count;
	console.log(avg);
};

//squares the values in array and prints the array with each of the squared values
function squares(arr){
	for(var i = 0; i < arr.length; i++){
		arr[i] = arr[i]*arr[i];
	};
	console.log(arr);
};

//sets any value in an array that is negative or is not a number to 0
function onlyPositive(arr){
	for(var i = 0; i < arr.length; i++){
		if(arr[i] < 0 || typeof arr[i] != 'number'){
			arr[i] = 0;
		};
	};
	console.log(arr);
};


//shifts all values of a given array forward dropping the first value and leaving an extra 0 at the end
function shiftForward(arr){
	for(var i = 0; i < arr.length; i++){
		arr[i] = arr[i + 1];
	};
	arr[arr.length - 1] = 0;
	console.log(arr);
};






