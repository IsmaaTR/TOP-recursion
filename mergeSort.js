/**
 * Function which sorts the passed array using the merge sort algorithm
 * @param {} arr The array to be sorted
 * @returns The sorted array
 */
function mergeSort(arr) {
    //Corner cases
    if (arr.length === 2) {
        return arr[0] <= arr[1] ? [arr[0], arr[1]] : [arr[1], arr[0]];
    } else if (arr.length === 1) {
        return arr;
    }

    const half = Math.ceil(arr.length / 2);
    const arr1 = mergeSort(arr.slice(0, half));
    const arr2 = mergeSort(arr.slice(half));

    //Merge the divided arrays
    let result = [];
    let counter = 0;
    //Iterate through first array (always bigger or equal)
    for(let i = 0; i < half; i++) {
        //Add shorter values from the second array
        while(arr2.length > counter && arr2[counter] < arr1[i]) {
            result.push(arr2[counter]);
            counter++;
        }
        result.push(arr1[i]);
    }

    //Add remaining values from the second array
    for (let i = counter; i < arr2.length; i++) {
        result.push(arr2[i]);
    }
    return result;
}

console.log(mergeSort([105, 79, 100, 110]));