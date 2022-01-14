/**
 * This will run through a provided array recursively
 * It will split it apart and apart until array with less than 2 indexes
 * is left. Then it will merge all numbers provided in every array
 * while comparing the split arrays one by one.
 * Left hand side to the right and if a number is lower, it will be inputted
 * into the final array
 * @param numbers the array to merge sort
 * @returns
 */
function mergeSort(numbers) {
    const inputLength = numbers.length;
    // if index is less than 2 for the array.
    if (inputLength < 2) {
        return;
    }
    // mid index is basically whre the array is cut in half.
    const midIndex = Math.floor(inputLength / 2);
    const leftHalf = []; // midindex
    const rightHalf = []; // input - mid
    // fill the arrays
    for (let i = 0; i < midIndex; i++) {
        leftHalf[i] = numbers[i];
    }
    for (let i = midIndex; i < inputLength; i++) {
        rightHalf[i - midIndex] = numbers[i];
    }
    // recursively do it for all.
    // until we run out of nuymbers in arrays and arrays.
    mergeSort(leftHalf);
    mergeSort(rightHalf);
    // finally merge them and sort.
    merge(numbers, leftHalf, rightHalf);
}
function merge(numbers, leftHalf, rightHalf) {
    const leftSize = leftHalf.length;
    const rightSize = rightHalf.length;
    // register indexes
    let i = 0;
    let j = 0;
    let k = 0;
    // while i and j are lower than the length of the arrays
    while (i < leftSize && j < rightSize) {
        if (leftHalf[i] <= rightHalf[j]) {
            // if the left half number is lower than right side, apply left to the k.
            numbers[k] = leftHalf[i];
            // and increase the index
            i++;
        }
        else {
            numbers[k] = rightHalf[j];
            j++;
        }
        // always increase k index at the end of the loop.
        k++;
    }
    // if any stragglers are left in any array.
    while (i < leftSize) {
        numbers[k] = leftHalf[i];
        i++;
        k++;
    }
    while (j < rightSize) {
        numbers[k] = rightHalf[j];
        j++;
        k++;
    }
}
(() => {
    const amount = 10000;
    const numbers = [];
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = Math.floor(Math.random() * amount);
    }
    console.log('starting');
    mergeSort(numbers);
    console.log('finished');
})();
//# sourceMappingURL=app.js.map