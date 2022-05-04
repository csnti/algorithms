function Heap(type = 'min') {
    this.storage = [];
    this.type = type === 'min' ? 'min' : 'max';
};
// Time Complexity: O(1). uxiliary Space Complexity: O(1)
Heap.prototype.compare = function(parent, child) {
  if (this.type === 'min') {
    return this.storage[parent] <= this.storage[child];
  }
  return this.storage[parent] > this.storage[child];
};
// Time Complexity: O(log(N)). Auxiliary Space Complexity: O(1)
Heap.prototype.insert = function(value) {
  this.storage.push(value);
  this.bubbleUp();
};
// Time Complexity: O(1). Auxiliary Space Complexity: O(1)
Heap.prototype.peek = function() {
  return this.storage[0];
};
// Time Complexity: O(log(N)). Auxiliary Space Complexity: O(1)
Heap.prototype.remove = function() {
  this.swap(0, this.storage.length - 1);
  const result = this.storage.pop();
  this.bubbleDown();
  return result;
};
// Helper methods
Heap.prototype.swap = function(a, b) {
  [ this.storage[a], this.storage[b]] = [this.storage[b], this.storage[a] ];
};

Heap.prototype.getParent = function(child) {
  return Math.floor((child - 1) / 2);
};

Heap.prototype.getChild = function(parent) {
  let left = parent * 2 + 1;
  if (left >= this.storage.length - 1 || this.compare(left, left + 1)) {
    return left;
  }
  return left + 1;
};

Heap.prototype.bubbleUp = function() {
  let child = this.storage.length - 1;
  let parent;
  parent = this.getParent(child);
  
  while (child > 0 && !this.compare(parent, child)) {
    this.swap(parent, child);
    child = parent;
    parent = this.getParent(child);
  }
};

Heap.prototype.bubbleDown = function() {
  let parent = 0;
  let child = this.getChild(parent);
  
  while (child < this.storage.length - 1 && !this.compare(parent, child)) {
    this.swap(parent, child);
    parent = child;
    child = this.getChild(parent);
  }
};

let heap = new Heap()
heap.insert(1)
heap.insert(2)
heap.insert(3)
heap.insert(11)
heap.insert(6)
heap.insert(5)
heap.insert(9)
heap.insert(3)
heap.insert(2)
heap.insert(1)
heap.insert(4)
console.log(heap)