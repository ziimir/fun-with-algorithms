function quickSort(array, start, end) {
    let leftBorder = start - 1;
    let rightBorder = start - 1;
    let pivotBorder = end;

    let pivot = array[pivotBorder];

    for (let i = start; i <= end - 1; i++) {
        let current = array[i];

        if (array[i] <= pivot) {
            rightBorder++;
            leftBorder++;

            let tmp = array[rightBorder];
            array[rightBorder] = array[leftBorder];
            array[leftBorder] = tmp;
        } else {
            rightBorder++;
        }
    }

    array[pivotBorder] = array[leftBorder + 1];
    array[leftBorder + 1] = pivot;

    pivotBorder = leftBorder + 1;

    if ((pivotBorder - 1) - start > 0) {
        quickSort(array, start, pivotBorder - 1);
    }

    if (end - (pivotBorder + 1) > 0) {
        quickSort(array, pivotBorder + 1, end);
    }

    return array;
}

module.exports = quickSort;
