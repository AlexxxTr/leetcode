/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    if (!head) return head;
    let next: ListNode | null = null;
    let isNext: boolean = true;
    while (isNext) {
        if (head.next === null) isNext = false;
        let helper: ListNode = head.next;
        head.next = next;
        next = head;
        if (isNext) head = helper;
    }
    return head;
};

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
