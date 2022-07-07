
var squaredNum = 1;                 //define squareNum variable

function square(num) {
  
  for(i = num; i > 0; i--){         // loop the same number of times as the number entered
    squaredNum = squaredNum * num   // everytime we loop add number to itself
     
  } 
  console.log(squaredNum);          // spit out squared number 
}

square(5);                          // call function and give argument

