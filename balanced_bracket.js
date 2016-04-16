//uses a stack

// var left_brackets = ["(", "[", "{"];
// var right_brackets = [")", "]", "}"]


function balancedBracket(str){
	var right_to_left = {
		")" : "(",
		"]" : "[",
		"}" : "{"
	}

	var stack = [];

	//iterate through string and push left brackets
	for(var i = 0; i < str.length; i++){
		if(str[i] === "(" || str[i] === "[" || str[i] === "{"){
			stack.push(str[i])
		}
		//compare left to right and pop 
		else if(str[i] === ")" || str[i] === "]" || str[i] === "}"){
			if(!stack || stack.pop() != right_to_left[str[i]]){
				return false
			}
		}

	}
	
	//if any remaining characters left return false
	if(stack.length > 0){
			return false
		}

	//all characters have a correct match and stack is now empty
	return true
}

console.log(balancedBracket("{}[()]((){})[][{}]"))


