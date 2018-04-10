function partition(arr, start, end) {
    if (end - start < 1) {
        return;
    }

    let pivotBorder = end;
    let lessBorder = start - 1;
    let greaterBorder = start - 1;

    for (let i = start; i < end; i++) {
        if (arr[i] <= arr[pivotBorder]) {
            lessBorder++;
            greaterBorder++;

            let tmp = arr[lessBorder];
            arr[lessBorder] = arr[greaterBorder];
            arr[greaterBorder] = tmp;
        } else {
            greaterBorder++;
        }
    }

    let newPivotIndex = lessBorder + 1;

    let tmp = arr[newPivotIndex];
    arr[newPivotIndex] = arr[pivotBorder];
    arr[pivotBorder] = tmp;

    partition(arr, start, newPivotIndex - 1);
    partition(arr, newPivotIndex + 1, end);
}

function quickSort(arr, n) {
    partition(arr, 0, n - 1);

    return arr;
}

module.exports = quickSort;
