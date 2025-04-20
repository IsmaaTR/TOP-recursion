function fibs(n) {
    let num1 = 0;
    let num2 = 1;
    let arr = new Array();
    for(let i = 0; i < n; i++) {
        if (i === 0) {
            arr[i] = 0;
        } else if (i === 1) {
            arr[i] = 1;
        } else {
            arr[i] = num1 + num2;
            num1 = arr[i - 1];
            num2 = arr[i];
        }
    }
    console.log(arr);
    return arr;
}

fibs(8);