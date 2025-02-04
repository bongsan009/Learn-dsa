
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

const nodeOne = new Node("10");
const nodeTwo = new Node("20");
const nodeThree = new Node("30");
const nodeFour = new Node("40");
const nodeFive = new Node("50");

//Link each node together.
nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;
nodeThree.next = nodeFour;
nodeFour.next = nodeFive;


function traversalForward(root){
    if(root == null) return;

    console.log(root.data);

    traversalForward(root.next)

}

traversalForward(nodeOne)
