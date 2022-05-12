// https://leetcode.com/problems/add-two-numbers/

function addTwoNumbers(l1, l2) {
  let s1 = BigInt(listToArray(l1).reverse().join(''));
  let s2 = BigInt(listToArray(l2).reverse().join(''));
  let result = s1 + s2;
  
  if (result === 0) return new ListNode(0);
  return stringToList(result.toString());
};

function listToArray(list) {
  let arr = [];
  
  while(list !== null) {
    console.log(list)
    arr.push(list.val);
    list = list.next
  }
  return arr;
};

function stringToList(str) {
  let cur = new ListNode();
  let dummy = cur;
  
  for (let i = str.length - 1; i >= 0; i--) {
    cur.next = new ListNode(str[i]);
    cur = cur.next;
  }
  return dummy.next;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
};

function generateList(arr) {
  let i = 0;
  let cur = new ListNode(arr[0]);
  let dummy = cur;
  i++;

  while (i < arr.length) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;  
    i++;
  }
  return dummy;
};

let a = generateList([9,9,9,9]);
let b = generateList([9,9,9,9,9,9,9]);
let c = generateList([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
let d = generateList([5,6,4]);
let e = generateList([2,4,9]);
let f = generateList([5,6,4,9]);

addTwoNumbers(a, b);
addTwoNumbers(c, d);
addTwoNumbers(e, f);