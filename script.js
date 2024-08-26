function promptUser(message) {
    return prompt(message);
}

function arrayOperations() {
    let array = [];
    let arraySize = parseInt(promptUser("Enter the size of the array:"));
    
    for (let i = 0; i < arraySize; i++) {
        let element = parseInt(promptUser(`Enter element ${i + 1}:`));
        array.push(element);
    }
    
    console.log("Initial Array:", array);

    let continueOperations = true;

    while (continueOperations) {
        let operation = promptUser("Choose operation: add, delete, pop, push, finish:");

        switch (operation.toLowerCase()) {
            case 'add':
                let addElement = parseInt(promptUser("Enter element to add:"));
                array.push(addElement);
                console.log("Array after add:", array);
                break;

            case 'delete':
                let deleteIndex = parseInt(promptUser("Enter index of element to delete:"));
                if (deleteIndex >= 0 && deleteIndex < array.length) {
                    array.splice(deleteIndex, 1);
                    console.log("Array after delete:", array);
                } else {
                    console.log("Invalid index");
                }
                break;

            case 'pop':
                array.pop();
                console.log("Array after pop:", array);
                break;

            case 'push':
                let pushElement = parseInt(promptUser("Enter element to push:"));
                array.push(pushElement);
                console.log("Array after push:", array);
                break;

            case 'finish':
                continueOperations = false;
                break;

            default:
                console.log("Invalid operation");
                break;
        }
    }
}

function binarySearch(array, searchElement) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (array[mid] === searchElement) {
            return mid; // Element found
        }
        if (array[mid] < searchElement) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Element not found
}

function searchOperations() {
    let array = [];
    let arraySize = parseInt(promptUser("Enter the size of the array:"));

    for (let i = 0; i < arraySize; i++) {
        let element = parseInt(promptUser(`Enter element ${i + 1}:`));
        array.push(element);
    }

    // Sort the array before searching
    array.sort((a, b) => a - b);
    console.log('Sorted array: ', array);

    let searchElement = parseInt(promptUser("Enter element to search for:"));
    let foundIndex = binarySearch(array, searchElement);

    if (foundIndex !== -1) {
        console.log(`Element found at index ${foundIndex}`);
    } else {
        console.log("Element not found");
    }
}


function bubbleSort() {
    let array = [];
    let arraySize = parseInt(promptUser("Enter the size of the array:"));

    for (let i = 0; i < arraySize; i++) {
        let element = parseInt(promptUser(`Enter element ${i + 1}:`));
        array.push(element);
    }

    console.log("Unsorted Array:", array);

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }

    console.log("Sorted Array:", array);
}

function stackOperations() {
    let stack = [];
    let continueOperations = true;

    while (continueOperations) {
        let operation = promptUser("Choose operation: push, pop, peek, is empty, finish:");

        switch (operation.toLowerCase()) {
            case 'push':
                let pushElement = parseInt(promptUser("Enter element to push:"));
                stack.push(pushElement);
                console.log("Stack after push:", stack);
                break;

            case 'pop':
                if (stack.length > 0) {
                    let poppedElement = stack.pop();
                    console.log(`Popped element: ${poppedElement}`);
                    console.log("Stack after pop:", stack);
                } else {
                    console.log("Stack is empty, cannot pop.");
                }
                break;

            case 'peek':
                if (stack.length > 0) {
                    console.log(`Top element: ${stack[stack.length - 1]}`);
                } else {
                    console.log("Stack is empty.");
                }
                break;

            case 'is empty':
                console.log(stack.length === 0 ? "Stack is empty." : "Stack is not empty.");
                break;

            case 'finish':
                continueOperations = false;
                break;

            default:
                console.log("Invalid operation");
                break;
        }
    }
}

// Queue Operations
function queueOperations() {
    let queue = [];
    let continueOperations = true;

    while (continueOperations) {
        let operation = promptUser("Choose operation: enqueue, dequeue, front, is empty, finish:");

        switch (operation.toLowerCase()) {
            case 'enqueue':
                let enqueueElement = parseInt(promptUser("Enter element to enqueue:"));
                queue.push(enqueueElement);
                console.log("Queue after enqueue:", queue);
                break;

            case 'dequeue':
                if (queue.length > 0) {
                    let dequeuedElement = queue.shift();
                    console.log(`Dequeued element: ${dequeuedElement}`);
                    console.log("Queue after dequeue:", queue);
                } else {
                    console.log("Queue is empty, cannot dequeue.");
                }
                break;

            case 'front':
                if (queue.length > 0) {
                    console.log(`Front element: ${queue[0]}`);
                } else {
                    console.log("Queue is empty.");
                }
                break;

            case 'is empty':
                console.log(queue.length === 0 ? "Queue is empty." : "Queue is not empty.");
                break;

            case 'finish':
                continueOperations = false;
                break;

            default:
                console.log("Invalid operation");
                break;
        }
    }
}


// Graph Operations
class Graph {
    constructor() {
        this.nodes = new Map();
    }

    addNode(node) {
        if (!this.nodes.has(node)) {
            this.nodes.set(node, []);
        } else {
            console.log(`Node ${node} already exists.`);
        }
    }

    addEdge(node1, node2) {
        if (this.nodes.has(node1) && this.nodes.has(node2)) {
            this.nodes.get(node1).push(node2);
            this.nodes.get(node2).push(node1); // For undirected graph
        } else {
            console.log(`One or both nodes do not exist.`);
        }
    }

    deleteNode(node) {
        if (this.nodes.has(node)) {
            this.nodes.delete(node);
            for (let [key, edges] of this.nodes.entries()) {
                let index = edges.indexOf(node);
                if (index !== -1) {
                    edges.splice(index, 1);
                }
            }
            console.log(`Node ${node} deleted.`);
        } else {
            console.log(`Node ${node} does not exist.`);
        }
    }

    deleteEdge(node1, node2) {
        if (this.nodes.has(node1) && this.nodes.has(node2)) {
            this._removeEdge(node1, node2);
            this._removeEdge(node2, node1);
            console.log(`Edge between ${node1} and ${node2} deleted.`);
        } else {
            console.log(`One or both nodes do not exist.`);
        }
    }

    _removeEdge(node1, node2) {
        let edges = this.nodes.get(node1);
        let index = edges.indexOf(node2);
        if (index !== -1) {
            edges.splice(index, 1);
        }
    }

    printGraph() {
        console.log("Graph Adjacency List:");
        for (let [node, edges] of this.nodes.entries()) {
            console.log(`${node} -> ${edges.join(", ")}`);
        }
    }
}

function graphOperations() {
    let graph = new Graph();
    let continueOperations = true;

    while (continueOperations) {
        let operation = promptUser("Choose operation: add node, add edge, delete node, delete edge, print graph, finish:");

        switch (operation.toLowerCase()) {
            case 'add node':
                let node = promptUser("Enter node to add:");
                graph.addNode(node);
                break;

            case 'add edge':
                let node1 = promptUser("Enter the first node:");
                let node2 = promptUser("Enter the second node:");
                graph.addEdge(node1, node2);
                break;

            case 'delete node':
                let delNode = promptUser("Enter node to delete:");
                graph.deleteNode(delNode);
                break;

            case 'delete edge':
                let delNode1 = promptUser("Enter the first node of the edge:");
                let delNode2 = promptUser("Enter the second node of the edge:");
                graph.deleteEdge(delNode1, delNode2);
                break;

            case 'print graph':
                graph.printGraph();
                break;

            case 'finish':
                continueOperations = false;
                break;

            default:
                console.log("Invalid operation");
                break;
        }
    }
}

function main() {
    let continueMainOperations = true;

    while (continueMainOperations) {
        let choice = promptUser("Choose data structure: array, search, sort, stack, queue, graph, finish:");

        switch (choice.toLowerCase()) {
            case 'array':
                arrayOperations();
                break;

            case 'search':
                searchOperations();
                break;

            case 'sort':
                bubbleSort();
                break;

            case 'stack':
                stackOperations();
                break;

            case 'queue':
                queueOperations();
                break;

            case 'graph':
                graphOperations();
                break;

            case 'finish':
                continueMainOperations = false;
                break;

            default:
                console.log("Invalid choice");
                break;
        }
    }

    console.log("Thank you for using the Data Structures App!");
}

main();