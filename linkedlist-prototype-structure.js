function LinkedList(args) {
  this.head = null;
  this.tail = null;

  if (args === undefined) return 0;
  if (Array.isArray(args) ===  true) {
    this.generateList(args);
  } else {
    this.addToHead(args);
  }
};

function ListNode(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
};

LinkedList.prototype.addToHead = function(value) {
  const newListNode = new ListNode(value, this.head, null);

  if (this.head) {
    this.head.prev = newListNode;
  } else {
    this.tail = newListNode;
  }
  this.head = newListNode
};

LinkedList.prototype.addToTail = function(value) {
  const newNode = new Node(value, null, this.tail);
  if (this.tail) {
    this.tail.next = newNode;
  } else {
    this.head = newNode;
  }
  this.tail = newNode;
};

LinkedList.prototype.generateList = function(arr) {
  let i = 0;
  if (!this.head) {
    this.addToHead(arr[0])
    i++;
  }
  let currentNode = this.head;

  while (i < arr.length) {
    currentNode.next = new ListNode(arr[i]);
    currentNode = currentNode.next;  
    i++;
  }
  currentNode.next = this.head; // Make it a cycle.
  return this.head;
};

LinkedList.prototype.hasCycle = function() {
  if (this.head === null) return false;
  let p1 = this.head;
  let p2 = this.head.next;

  while (p1 !== p2) {
    if (p2 === undefined || p2.next === undefined) return false;
    p1 = p1.next;
    p2 = p2.next.next;
  }
  return true;
};

let list = new LinkedList([3, 6, 12, 8, 9, 4, 2, 23]);