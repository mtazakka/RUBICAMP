function spiralOrder (matrix) {

  var result = [];

  var readLayer = (arr) => {

    if (arr.length === 0) {
      return;
    }

    if (arr.length === 1) {
      result = result.concat(arr[0]);
      return;
    }

    
    // step 1.) read and remove topmost row
    for (var i = 0; i < arr[0].length; i++) {
      result.push(arr[0][i]);
    }
    arr.shift();

    
    // step 2.) log and remove last value from each row (downward)
    for (var i = 0; i < arr.length - 1; i++) {
      result.push(arr[i][arr[i].length - 1]);
      arr[i].pop()
      if (arr[i].length === 0) {
        arr.splice(i, 1);
        i--;
      }
    }

    
    // step 3.) read and remove lowest row (in reverse)
    for (var i = arr[arr.length - 1].length - 1; i >= 0; i--) {
      result.push(arr[arr.length - 1][i]);
    }
    arr.pop();

    
    // step 4.) log and remove first value from each row (upward)
    for (var i = arr.length - 1; i >= 0; i--) {
      result.push(arr[i][0]);
      arr[i].shift();
      if (arr[i].length === 0) {
        arr.splice(i, 1);
      }
    }
    
    // repeat with truncated matrix
    readLayer(arr);
  }
  
  readLayer(matrix)
  return result;
};

console.log(spiralOrder(5))