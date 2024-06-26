// Answer to the question no-1:

function calculateSum(a, b) {
    return a + b;
}


// Answer to the question no-2:

function isEven(number) {
    var remainder = number % 2;
    
    
    if (remainder === 0) {
        return true; 
    } else {
        return false;
    }
}


// Answer to the question no-3:

function findMax(numbers) {
    var maxNumber = numbers[0];
    
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }
    
    return maxNumber;
}


// Answer to the question no-4:

function reverseString(str) {
    var reversedStr = '';
    
    for (var i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    
    return reversedStr;
}


// Answer to the question no-5:

function filterOddNumbers(numbers) {
    var oddNumbers = [];
    
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            oddNumbers.push(numbers[i]);
        }
    }
    
    return oddNumbers;
}


// Answer to the question no-6:

function sumArray(numbers) {
    var sum = 0;
    
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    
    return sum;
}


// Answer to the question no-7:

function sortArray(numbers) {
    var sortedNumbers = numbers.slice();
    
    sortedNumbers.sort(function(a, b) {
        return a - b;
    });
    
    return sortedNumbers;
}


// Answer to the question no-8:

function capitalizeFirstLetter(str) {
    if (str.length === 0) {
        return str;
    }
    
    var firstLetter = str.charAt(0).toUpperCase();
    
    var restOfString = str.slice(1);
    
    var capitalizedString = firstLetter + restOfString;
    
    return capitalizedString;
}