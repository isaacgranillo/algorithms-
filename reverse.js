// reverse a string 

function revString (str){
	if(typeof str != 'string'){
		console.log("Must enter a string")
	}
	else{
		var r = " ";
		for(var i = str.length -1; i >= 0; i--){
			r += str[i];

		}
		console.log(r);
	}
}


// reverse an array

function revArray (arr){
	for(var i = arr.length -1; i >= arr.length/2; i--){
		var temp = arr[i];
		arr[i] = arr[arr.length - i - 1];
		arr[arr.length - i - 1] = temp
	}
	console.log(arr);
}


// reverse an array by creating a new array

function revArray2 (arr){
	var newArr = [];
	for (var i = arr.length -1; i >= 0; i--){
		newArr.push(arr[i]);
	}
	console.log(newArr);
}







