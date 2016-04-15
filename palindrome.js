//checks whether a given string is a palindrome

function palindrome(str){
	if(typeof str != "string" || !str || str.length < 2){
		return false
	}
	for(var i = str.length - 1; i >= str.length/2; i--){
		if(str[i] != str[str.length - i - 1])
			return false
	}
	return true
}

console.log(palindrome('eeggee'))