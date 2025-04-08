//question 1
function reverseStrings(arr) {
    const reversed = arr.map(str => str.split('').reverse().join(''));
    const ascending = reversed.sort();
    const descending = ascending.slice(-2).reverse();
    return ascending.slice(0, -2).concat(descending);
}

const words = ["banana", "apple", "cherry"];
console.log(reverseStrings(words)); 












//question 2
function checkNumbers(arr) {
    return arr.map(num => {
        if (num > 0) return "positive";
        else if (num < 0) return "negative";
        else return "zero";
    });
}
const numbers = [3, -1, 0, 5, -2];
const checkResult = checkNumbers(numbers);
console.log(checkResult);










//question 3
function sortEmployeesBySalary(employees) {
    return employees.sort((a, b) => a.salary - b.salary);
}
const employees = [
    { id: 1, name: "Alice", salary: 50000 },
    { id: 2, name: "Bob", salary: 30000 },
    { id: 3, name: "Charlie", salary: 40000 }
];
const sortedEmployees = sortEmployeesBySalary(employees);
console.log(sortedEmployees);











//question 4
function multiplyByTwo(arr) {
    arr.forEach(num => {
        console.log(num * 2);
    });
}
const nums = [1, 2, 3, 4];
multiplyByTwo(nums);











//question 5
function modifyArray(arr) {
    const modifiedArray = [...arr]; 
    for (let i = 0; i < 4 && i < modifiedArray.length; i++) {
        modifiedArray[i] *= 8;
    }
    for (let i = modifiedArray.length - 2; i < modifiedArray.length; i++) {
        modifiedArray[i] += 5;
    }
    console.log(modifiedArray);
}
const numArray = [1, 2, 3, 4, 5, 6];
modifyArray(numArray);
