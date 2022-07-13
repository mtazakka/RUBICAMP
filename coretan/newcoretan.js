function spiral(param1) {
    let matrix = []
    let array = []
    let counter = 0
    let result =[]

    for (var i = 0; i < param1; i++) {
        for (var j = 0; j < param1; j++) {
            array.push(counter);
            counter++
        }
        matrix.push(array)
        array = []

    } if (array.length === 0) {
        return;
    }
    if (array.length === 1) {
        result = result.concat(array[0]);
        return;
    }
    for (let i = 0; i < array.length; i++) {
        result.push(array[0][i]);
    }
    array.shift();
    for (let i = 0; i < array.length - 1; i++) {
        result.push(array[i][array[i].length - 1]);
        array[i].pop()
        if (array[i].length === 0) {
            array.splice(i, 1);
            i--;
        }
    }
    for (let i = array[array.length - 1].length - 1; i >= 0; i--) {
        result.push(array[array.length - 1][i]);
    }
    array.pop();
    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i][0]);
        array[i].shift();
        if (array[i].length === 0) {
            array.splice(i, 1);
        }
    }
    return result
}

console.log(spiral(5))