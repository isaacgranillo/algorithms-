function add(num){
	if(num < 1){
		return 0;
	};
	return num + add(num - 1)
};


function fib(num){
	if(num < 1){
		return false
	}
	if(num === 1){
		return 0;
	};
	if(num === 2){
		return 1;
	};
	return fib(num - 1) + fib(num - 2);
};


console.log(fib(0))

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34