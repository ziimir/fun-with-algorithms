// Пузырьковая сортировка
function bubbleSort(arr, n) {
    arr = arr.slice();

    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }

    return arr;
}

module.exports = bubbleSort;
