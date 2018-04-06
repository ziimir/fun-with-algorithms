function partition(array, start, end) {
    let leftBorder = start - 1;
    let rightBorder = start - 1;
    let pivotBorder = end;
    let unknownBorder = start;

    let pivot = array[pivotBorder];

    for (; unknownBorder <= end - 1; unknownBorder++) {
        let current = array[unknownBorder];

        if (current <= pivot) {
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
        partition(array, start, pivotBorder - 1);
    }

    if (end - (pivotBorder + 1) > 0) {
        partition(array, pivotBorder + 1, end);
    }
}

function quickSort(array, length) {
    partition(array, 0, length - 1);

    return array;
}

module.exports = quickSort;
