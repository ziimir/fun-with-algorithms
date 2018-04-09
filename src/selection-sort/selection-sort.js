// Сортировка выбором
function selectionSort(arr, n) {
    arr = arr.slice();

    for (let i = 0; i < n - 1; i++) {
        let smallest = i;

        for (let j = i + 1; j <= n; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }

        let tmp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = tmp;
    }

    return arr;
}

module.exports = selectionSort;
