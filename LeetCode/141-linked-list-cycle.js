// https://leetcode.com/problems/linked-list-cycle/

function hasCycle(head) {
  if (head === null) return false;
  let p1 = head;
  let p2 = head.next;

  while (p1 !== p2) {
    if (p2 === null || p2.next === null) return false;
    p1 = p1.next;
    p2 = p2.next.next;
  }
  return true;
};
// If p2 ever lands on a ListNode where the "this.next.next" equals null or "this.next.next.next" equals null, then return false.
// There can't be a loop if the node doesn't link to anything.
// The while-loop ends if the node of p2 explicitly matches the node of p1.
// (As in: they're both symbolically linked to the same ListNode in memory).
// This means that there is a cycle; return true.