//task2
//------------------

// task1

function daysBetweenDates(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in one day

  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

  const timeDifference = Math.abs(firstDate - secondDate);

  const daysDifference = Math.floor(timeDifference / oneDay);

  return daysDifference;
}

// task2

 //my solution

// function getstring(arr1) {
//   var arr2 = [];
//   for (let i = 0; i < arr1[i].length; i++) {
//     if (i === Number) {
//       arr2 = arr1[i];
//       return arr2;
//     } else {
//       var arr3 = [];
//       return arr3;
//     }
//   }
// }

// var arr1 = ["ahm5ad", "al5o", "ali"];
// getstring(arr1);

// console.log(getstring(arr1));


// chatgpt sol

// function getstring(arr1){
//    var arr2 = [];
   
//     for(let i = 0;i<arr1.length;i++)
//     {

//         if (/\d/.test(arr1[i]))
//         {
//             arr2.push(arr1[i]);
//         }
//         else{
//             return arr2;
//         }
//     }
//     return arr2;
// }

// var arr1 = ["ahmad", "khaled", "ali"];

// getstring(arr1);
// console.log(getstring(arr1));


// task3

// function reversestr(word) {
//     if (word.length % 2 !== 0) { 
//       return word.split('').reverse().join('');
//     }
//     return word;
//   }
  
//   console.log(reversestr("alii"));


//task4

function isPandigital(num) {
    
    const numStr = num.toString();
  
    
    if (numStr.length !== 10) {
      return false;
    }

    const uniqueDigits = new Set();
  

    for (const digitChar of numStr) {
      const digit = parseInt(digitChar);
  
      
      if (digit >= 0 && digit <= 9) {
        uniqueDigits.add(digit);
      } else {
        return false; 
      }
    }
  
    
    return uniqueDigits.size === 10;
  }
  
  
  const num1 = 1023456789; 
  const num2 = 9876543210; 
    const num3 = 12345;      
  
  console.log(isPandigital(num1));
  console.log(isPandigital(num2));
  console.log(isPandigital(num3)); 
  