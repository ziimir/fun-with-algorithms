// Сортировка вставкой
function insertionSort(arr, n) {
    arr = arr.slice();

    for (i = 1; i < n; i++) {
        let value = arr[i];
        let j = i - 1;

        while (j >= 0 && value < arr[j]) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        arr[j + 1] = value;
    }

    return arr;
}

module.exports = insertionSort;
