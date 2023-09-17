// task3
//----------------------------

//task1
  
// my solution
// function addnumber(num, n){
//     var sum = num + n;
//     return sum;
// }


// addnumber(10,20);
// addnumber(20,40);
// addnumber(4,20);

// console.log(addnumber(10,20));
// console.log(addnumber(20,40));
// console.log(addnumber(4,20));


// function addnum(n)
// {
// return function (x){
//     return x + n;
// }

// }

// const add10 = addnum(14);

// addnum(10);
// console.log(add10(10));
//-------------------------------

// task2

// function removeLeadingTrailingZeros(n) {
//     const result = parseFloat(n);
//     return result.toString();
//   }
  
  
//   const numberString = "0034500.000";
//   const trimmedNumber = removeLeadingTrailingZeros(numberString);
//   console.log(trimmedNumber); 
  
//task3

// function secondLargestNumber(arr1) {
 
  
//     var largest = arr1[0];
//     var secondLargest = arr1[1];
  
//     if (secondLargest > largest) {
//       [largest, secondLargest] = [secondLargest, largest];
//     }
  
//     for (let i = 2; i < arr1.length; i++) {
//       if (arr1[i] > largest) {
//         secondLargest = largest;
//         largest = arr1[i];
//       } else if (arr1[i] > secondLargest && arr1[i] !== largest) {
//         secondLargest = arr1[i];
//       }
//     }
  
//     return secondLargest;
//   }
  
//   var arr1 = [10, 20, 50, 30];
//   var result = secondLargestNumber(arr1);
  
//   console.log(result);

  // task 4

  // function isRepdigit(num) {
  //   const numStr = num.toString();
  
  //   for (let i = 1; i < numStr.length; i++) {
  //     if (numStr[i] !== numStr[0]) {
  //       return false;
  //     }
  //   }
  
  //   return true;
  // }
  
  // // Test cases
  // console.log(isRepdigit(111));    
  // console.log(isRepdigit(1221));   
  // console.log(isRepdigit(0));     
  // console.log(isRepdigit(99999));  
  // console.log(isRepdigit(12345));  
  

  //task 5

  // function reverseWords(inputStr) {
  //   const words = inputStr.split(" ");
    
    
  //   const reversedWords = words.reverse();
    
    
  //   const reversedStr = reversedWords.join(" ");
    
  //   return reversedStr;
  // }
  
  
  // const inputString = "Hello World";
  // const reversedString = reverseWords(inputString);
  // console.log(reversedString); 
  

  //task 6

  // function findSeven(arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i].toString().includes('7')) {
  //       return "Boom!";
  //     }
  //   }
  //   return "There is no 7 in the array";
  // }
  
  // const numbers = [123, 456, 777, 890];
  // const result = findSeven(numbers);
  // console.log(result); 
  
  // task 7

  // function insertWhiteSpace(str) {

  //   const modifiedStr = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  //   return modifiedStr;
  // }
  
  // const inputString = "HelloWorldExample";
  // const result = insertWhiteSpace(inputString);
  // console.log(result); 
  

 //taskl 8
   
//  function countTrueValues(arr) {
//   const trueValues = arr.filter(value => value === true);

//   return trueValues.length;
// }
// const booleanArray = [true, false, true, true, false, true];
// const trueCount = countTrueValues(booleanArray);
// console.log(`Number of true values: ${trueCount}`); 


// task 9

// function moveCapitalLettersToFront(word) {
//   let capitalLetters = '';
//   let lowercaseLetters = '';

//   for (let i = 0; i < word.length; i++) {
//     const char = word[i];
//     if (char >= 'A' && char <= 'Z') {
//       capitalLetters += char;
//     } else {
//       lowercaseLetters += char;
//     }
//   }

//   const result = capitalLetters + lowercaseLetters;

//   return result;
// }

// const inputWord = "MoveCapitalLetters";
// const rearrangedWord = moveCapitalLettersToFront(inputWord);
// console.log(rearrangedWord);


// task 10

// function lastItemMatchesConcatenation(arr) {
//   if (arr.length < 2) {
//     return false;
//   }

//   const lastItem = arr[arr.length - 1];

//   const concatenatedItems = arr.slice(0, arr.length - 1).join('');

//   return lastItem === concatenatedItems;
// }

// const itemsArray = ["Hello", "World", "HelloWorld"];
// const result = lastItemMatchesConcatenation(itemsArray);
// console.log(result); 

// task 11

// function findNaNIndex(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (isNaN(arr[i])) {
//       return i; 
//     }
//   }
//   return -1; 
// }


// const numbersArray = [1, 2, NaN, 4, 5];
// const nanIndex = findNaNIndex(numbersArray);
// console.log(nanIndex); 

// task12

// function removeDuplicates(arr) {
//   const result = [];
  
//   for (let i = 0; i < arr.length; i++) {
//     if (result.indexOf(arr[i]) === -1) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// const itemsArray = [1, 2, 3, 2, 4, 5, 1];
// const uniqueArray = removeDuplicates(itemsArray);
// console.log(uniqueArray); 


// task 13


// function convertToMilitaryTime(time12hr) {
//   const [time, period] = time12hr.split(' ');
//   const [hours, minutes] = time.split(':');
//   let militaryHours = parseInt(hours);

//   if (period === 'PM' && militaryHours !== 12) {
//     militaryHours += 12;
//   } else if (period === 'AM' && militaryHours === 12) {
//     militaryHours = 0;
//   }

//   const militaryTime = `${militaryHours.toString().padStart(2, '0')}:${minutes}`;
//   return militaryTime;
// }

// const time12hr = '02:30 PM';
// const militaryTime = convertToMilitaryTime(time12hr);
// console.log(militaryTime); 


// task 14

// function removeLastVowel(sentence) {
//   const words = sentence.split(' ');

//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     const vowels = 'aeiouAEIOU';

//     for (let j = word.length - 1; j >= 0; j--) {
//       if (vowels.includes(word[j])) {
//         words[i] = word.slice(0, j) + word.slice(j + 1);
//         break;
//       }
//     }
//   }

//   return words.join(' ');
// }

// const inputSentence = "This is a sample sentence";
// const modifiedSentence = removeLastVowel(inputSentence);
// console.log(modifiedSentence); 


// task 15

// function sumOfCubes(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     const cube = arr[i] ** 3; 
//     sum += cube;
//   }

//   return sum;
// }

// const numbersArray = [1, 2, 3, 4, 5];
// const result = sumOfCubes(numbersArray);
// console.log(result); 
