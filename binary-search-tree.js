class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // Validate tree's current status. Empty? Insert at root.
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    // Else, find correct node spot
    let current = this.root;
    while (true) {
      // as long as val < current.val
      if (val < current.val) {
        // if our left node is null
        if (current.left === null) {
          // make left a new node with the passed in val
          current.left = new Node(val);
          return this;
        } else {
          // otherwise it is just another node to the left.
          current = current.left;
        }
      } else if (val > current.val) {
        // Same thing but on the right.
        if (current.right === null) {
          current.right = new Node(val);
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    // If root is null the new node becomes our root.
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    // Same as above but using recursion.
    if (val < current.val) {
      if (current.left === null) {
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.left);
    } else {
      if (current.right === null) {
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    // Start at root
    let currentNode = this.root;
    // We'll switch found to 'true', ending our while loop as soon as we find our val.
    let found = false;
    // If the val we've passed in is equal to our current node we return that node.
    if (val === currentNode.val) return currentNode;
    // While currentNode is true and found is still false:
    while (currentNode && !found) {
      // If val is less than the currentNode value, switch currentnode to the left
      if (val < currentNode.val) {
        currentNode = currentNode.left;
        // If greater than, switch currentnode to the right.
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
        // Otherwise we've found our value. Make found=true, ending our loop.
      } else {
        found = true;
      }
    }
    // If we didn't find our value, return undefined. Else return currentNode, the val we found above.
    if (!found) return undefined;
    return currentNode;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    // Same as above but recursive.
    if (this.root === null) return undefined;

    if (val < current.val) {
      if (current.left === null) return undefined;
      return this.findRecursively(val, current.left);
    } else if (val > current.val) {
      if (current.right === null) return undefined;
      return this.findRecursively(val, current.right);
    }
    return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    // Initiate an empty array.
    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.val); // visit
      node.left && traverse(node.left); // go left if there's a left
      node.right && traverse(node.right); // go right if there's a right
    }

    traverse(current);
    return data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      node.left && traverse(node.left); // go left if there's a left
      data.push(node.val); // visit
      node.right && traverse(node.right); // go right if there's a right
    }

    traverse(current);
    return data;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      node.left && traverse(node.left); // go left if there's a left
      node.right && traverse(node.right); // go right if there's a right
      data.push(node.val); // visit
    }

    traverse(current);
    return data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let data = [];
    // Push root to queue
    queue.push(node);

    while (queue.length) {
      // Node is first element of array removed
      node = queue.shift();
      // Push the value of first val shifted from the queue
      data.push(node.val);
      // if there is a left node, append the left node to the queue
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }
}

module.exports = BinarySearchTree;
