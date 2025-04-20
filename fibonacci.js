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
    return arr;
}

function fibsRec(n) {
    if (n === 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    }

    const arr = fibsRec(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
}

console.log(fibsRec(8));
console.log(fibs(8));