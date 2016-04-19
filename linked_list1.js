/*
some practice with linked lists
*/

//list node constructor 
function listNode(value){
	this.val = value;
	this.next = null;
}

function linkedList(){
	this.head = null;

	//length of list
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

//reverses a linked list
function reverseLL(head){
	var next, curr = head, prev = null;
	while(curr){
		next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	return prev;
}

function recRevLL(head){
	if (!head.next){
		return head;
	}
	else{
		var new_head = recRevLL(head.next);
	}
	head.next.next = head;
	head.next = null;
	return new_head;
}

// checks if a linked list has a loop 
function listHasLoop(head){
	var runner = head;
	var walker = head;

	while(runner){
		runner = runner.next
		if(!runner){
			return false;
		}
		runner = runner.next;

		walker = walker.next
		if(runner === walker){
			return true
		}
	}
	return false
}

// checks the length of a loop in a linked list
function listLoopLength(head){
	var runner = head;
	var walker = head;
	var count = 0;
	var inc_count = false;


	while(runner){
		runner = runner.next;
		if(!runner){
			return false;
		}
		runner = runner.next

		walker = walker.next;
		if(runner === walker){
			if(count === 0){
				inc_count = true;
			}
			else{
				return count;
			}
		}
		if(inc_count){
			count++;
		}
	}
	return false
}

//

var node1 = new listNode("one");

console.log(node1);