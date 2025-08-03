function ListNode(val,next = null)
{
    this.val = val;
    this.next = next;
}


function addTwoNumbers(l1,l2)
{
    let dummyHead =  new ListNode(0);
    let current = dummyHead;

    let carry = 0;
    while(l1 || l2 || carry !== 0)
    {
        let val1 =  (l1)?l1.val:0;
        let val2 =  (l2)?l2.val:0;

        let sum = val1 + val2 + carry;

        carry  = Math.floor(sum/10);
        let digit  = sum % 10;

        current.next =  new ListNode(digit);
        current = current.next;

        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
        
        
    }
    return dummyHead.next;
}

function arrayToList(arr)
{
   let  dummy  = new ListNode(0);
   let current = dummy;
   for(let num of arr)
   {
      current.next = new ListNode(num);
      current = current.next;
   }
   return dummy.next;
}

function listToArray(node)
{
    let result = [];
    while(node)
    {
        result.push(node.val);
        node = node.next;
    }
    return result;
}

let  l1 = arrayToList([3,4,7]); 
let  l2 = arrayToList([5,6,3]); 

let l3 =  addTwoNumbers(l1,l2);

console.log(listToArray(l3));
