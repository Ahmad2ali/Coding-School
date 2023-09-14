// // Task 1

// function ConvertToMin(munits) {
//     let ConvertedMunits = munits * 60;
//     console.log(ConvertedMunits);
//  }

//  ConvertToMin(10);

//  //---------------------------------

//  // task2

//  function incrementNum(incnum){
//     let NumInc= incnum + 1;
//     return NumInc;
//  }

// console.log(incrementNum(10));

// //-------------------

// // task3

// // my solution

// //  var arr1 = [arr1[0], arr1[1], arr1[2]];
// // function FindFirstNum(){
// //     for(var i = 0; i<arr1.length; i++)
// //     {
// //         if(i == arr1[0])
// //         console.log(arr1[0]);
// //         break;
// //     }

// //     return arr1[0];
// // }
// // FindFirstNum()
// // console.log(FindFirstNum ,arr1([10,14,47]));

// function FindFirstNum(arr1) {
//     for (var i = 0; i < arr1.length; i++) {
//         if (i === 0) {
//             console.log(arr1[i]);
//             break;
//         }
//     }
//     return arr1[0];
// }

// var arr1 = [10, 14, 47];
// // console.log(FindFirstNum(arr1));

// FindFirstNum(arr1);

// // task4

// function AreaOfRectangle( base,  height){
//     area = base * height;
//     return area;
// }

// AreaOfRectangle(10,5)

// console.log(AreaOfRectangle(10,5))

// ---------------------------------------------

// task5

// function evenNumberEvenIndex(arr1) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (i % 2 == 0 && arr1[i] % 2 == 0) {
//       var arr2 = arr1[i];
//     }
//   }
//   return arr2; // the error I put the return inside the for loop

// }

// var arr1 = [11,44,23,32,66];
// evenNumberEvenIndex(arr1);

// console.log(evenNumberEvenIndex(arr1))

// --------------------------------------a

// task 6

// function evenIndexOddLength(arr1){
//     for(let  i = 0 ; i<arr1.length; i++){
//         if(i %2== 0 && arr1[i].length %2 != 0){
//             var arr2 = arr1[i];
//         }
//     }
//     return arr2;

// }

// var arr1 = ["ahmad", "ali","ata", "mohammad", "khaled" ];
// evenIndexOddLength(arr1);
// console.log(evenIndexOddLength(arr1));

// ---------------------------------------------------

// task7

// my solution

// function powerElementIndex(arr1) {
//   for (var i = 0; i < arr1.length; i++) {
//     var arr2 =[];
//     arr1[i] = (arr1[i] * i);
//     var arr2 = arr1[i];
//   }

//   return arr2;
// }
// var arr1 = [1, 44, 10, 8, 6];
// var result = powerElementIndex(arr1);
// console.log(powerElementIndex(result));

// //chatgpt solution

// function powerElementIndex(arr1) {
//     var arr2 = [];

//     for (var i = 0; i < arr1.length; i++) {
//       arr2.push(arr1[i] * i);
//     }

//     return arr2;
//   }

//   var arr1 = [1, 44, 10, 8, 6];
//   var result = powerElementIndex(arr1);
//   console.log(result);

// --------------------------------

// task8

// function multiplication2(num1, num2) {
//   var mmul = num1 * num2;

//   return mmul;
// }

// console.log(multiplication2(7, 6));

// ---------------------------------------------------

//task9

// my solution

// function muti2(num1, num2){
    
//     for(var i = num1; i<=num2; i++)
//     {
//         var result= result * num2;
//     }
//         return result;
// }

// muti2(2,5)
// console.log(muti2(2,5))

function muti2(num1, num2) {
    var result = 1; 

    for (var i = num1; i <= num2; i++) {
        result = result * i; 
    }

    return result;
}

var resultValue = muti2(2, 5); 
console.log(resultValue); 
