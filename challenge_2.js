exports.sumOfEvenFibonacciNumbers = function(n){
  var sum = 0;
  // do your work here
  var baseArray = [0, 1, 1];
  //var baseLength = baseArray.length;
  //console.log("sum before: "+sum);

  for (var i = 0; i < n; i++) {
    var sumOfTwoNumbers = baseArray[baseArray.length - 1] + baseArray[baseArray.length - 2];
    //console.log("i "+i);
    //console.log("sum: "+sumOfTwoNumbers);
    if (i == sumOfTwoNumbers) {
        //console.log("i: "+i);
        baseArray.push(i);
        if (i%2 == 0){

        sum += i;
    }
        //console.log("sum after: "+sum);
    }

  }
  console.log(sum);
  return sum;
};