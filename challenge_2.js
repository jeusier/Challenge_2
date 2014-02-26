exports.sumOfEvenFibonacciNumbers = function(n){
  var sum = 0;
  // do your work here
  var baseArray = [0, 1, 1];

  //loop through all numbers
  for (var i = 0; i < n; i++) {
    //add the last two numbers of the array
    var sumOfTwoNumbers = baseArray[baseArray.length - 1] + baseArray[baseArray.length - 2];
    //check if i is a Fibonacci Number then push to array
    if (i == sumOfTwoNumbers) {
        baseArray.push(i);
        //check if i is an even Fibonacci Number, then add to sum
        if (i%2 == 0){
        sum += i;
        console.log("pre-sum: "+sum);
        } //end of if (i%2 == 0)

    } //end of if (i == sumOfTwoNumbers)

  } //end of for loop

  console.log("array: "+baseArray);
  console.log("sum: "+sum);
  return sum;

}; //end of sumOfEvenFibonacciNumbers