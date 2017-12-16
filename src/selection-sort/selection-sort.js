// Сортировка выбором
function selectionSort(arr, n) {
    arr = arr.slice();

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[i]) {
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }

    return arr;
}

module.exports = selectionSort;
