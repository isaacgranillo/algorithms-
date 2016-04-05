//some practice with linked lists

function linkedList(){
	this.head = null;

	this.length = function(){
		var count = 0;
		var runner = this.head;
		while(runner){
			count++;
			runner = runner.next
		}
		return count;
	}
}

function listNode(value){
	this.val = value;
	this.next = null;
}

var node1 = new listNode("one");

console.log(node1);
