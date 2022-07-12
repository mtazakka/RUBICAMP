
        if (arr.length === 0) {
            return;
        }
        if (arr.length === 1) {
            result = result.concat(arr[0]);
            return; 
        }
        for (let i = 0; i < arr.length; i++) {
            result.push(arr[0][i]);
        }
        arr.shift();
        for (let i = 0; i < arr.length - 1; i++) {
            result.push(arr[i][arr[i].length - 1]);
            arr[i].pop()
            if (arr[i].length === 0) {
                arr.splice(i, 1);
                i--;
            }
        }
        for (let i = arr[arr.length - 1].length - 1; i >= 0; i--) {
            result.push(arr[arr.length - 1][i]);
        }
        arr.pop();
        for (let i = arr.length - 1; i >= 0; i--) {
            result.push(arr[i][0]);
            arr[i].shift();
            if (arr[i].length === 0) {
                arr.splice(i, 1);
            }
        }
        readLayer(arr);
    