const BinarySearchTree = require('./BinarySearch');







function numberInsert() {

    const BST = new BinarySearchTree();
    const dataArr = [3, 1, 4, 6, 9, 2, 5, 7]

    dataArr.forEach(value => BST.insert(value, value))

    return BST;


}

function charInsert() {

    const BST = new BinarySearchTree();
    const dataArr = 'E A S Y Q U E S T I O N'.split(' ')


    dataArr.forEach(value => BST.insert(value, value))

    return BST;


}

console.log(numberInsert());
console.log(charInsert());

