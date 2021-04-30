let a1 = [20, 44, 11, 27];
let a2 = [20, 20, 20, 20, 20];


//   function arrayPlusArray(arr1, arr2) {
//     let sumOfarr1 = 0;
//     for(i=0; i<arr1.length; i++){
//         sumOfarr1 += arr1[i];
//     }
//     let sumOfarr2 = 0;
//     for(i=0; i<arr2.length; i++) {
//         sumOfarr2 = sumOfarr2 + arr2[i];
//     }

//     return sumOfarr2 + sumOfarr1;

//   }

//   console.log(arrayPlusArray(a1, a2));

    sumOfa1 = a1.reduce((a,b) => a + b);
    sumOfa2 = a2.reduce((a,b) => a + b);

    console.log(sumOfa1+sumOfa2);