//

function weekTemps(){ 
	this.dataStore = []; 
	this.add = add; 
	this.average = average;
}

function add(temp) { 
	this.dataStore.push(temp);
}
function average() {
var total = 0;
for (var i = 0; i < this.dataStore.length; ++i) {
	total += this.dataStore[i]; 
}
return total / this.dataStore.length; 

}


//Create a grades object that stores a set of student grades in an object. Provide a function for adding a grade and a function for displaying the student’s grade average.

function grades(){
	this.data = [];
	this.add = add;
	this.average = average;
}

	function add(grade){
		this.data.push(grade);
	}

	function average(){
		total = 0;
		for (var i=0; i < this.data.length; i++){
			total += this.data[i];
		}

		return total / this.data.length
	}


//Store a set of words in an array and display the contents both forward and backward.

	var words = ["hello", "world", "!"]

	console.log(words)
	words.reverse()
	console.log(words)

//Create an object that stores individual letters in an array and has a function for displaying the letters as a single word.

function letters(){
	this.array = [];
	this.addLetter = addLetter;
	this.word = word;
}

function addLetter(l){
	this.array.push(l)
}

function word(){
	return this.array.join("")
}

newWord = new letters;
newWord.addLetter("a");
newWord.addLetter("p");
newWord.addLetter("p");
newWord.addLetter("l");
newWord.addLetter("e");

console.log(newWord.array)

console.log(newWord.word())

