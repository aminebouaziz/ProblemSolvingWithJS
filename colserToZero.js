table = [2, -5, -6, -2, -50, -1, 2, 3, 5, 8, 7];

let temp = n => {
  let tempArrPaus = [];
  let temArrNega = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i] >= 0) {
      tempArrPaus.push(n[i]);
      // console.log(n[i])
    } else {
      temArrNega.push(n[i]);
    }
  }

  tempArrPaus.sort(function(a, b) {
    return a > b;
  });

  temArrNega.sort(function(a, b) {
    return a < b;
  });

  // console.log(tempArrPaus)
  //         console.log(temArrNega)

  if (tempArrPaus[0] == Math.abs(temArrNega[0])) {
    return tempArrPaus[0];
  } else {
    return tempArrPaus[0];
  }
};

temp(table);

// var array = [8, 9, 1, 2, 3, 4];
// // console.log(JSON.stringify(array));
// array.sort(function (a,b) {
//     // console.log(a , b, JSON.stringify(array));
//     console.log("a",a)
//     // console.log("b",b)
//     return a >b;
// });

// console.log(array)
