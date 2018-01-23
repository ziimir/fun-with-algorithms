// Сортировка слиянием
// Производит слияние 2 отсортированных массивов от меньшего к большему
function merge(left, right) {
    let arr = [];
    let leftLength = left.length;
    let rightLength = right.length;

    let l = 0;
    let r = 0;

    left.push(Infinity);
    right.push(Infinity);

    while (l < leftLength || r < rightLength) {
        if (left[l] <= right[r]) {
            arr.push(left[l]);
            l = l + 1;
        } else if (left[l] > right[r]) {
            arr.push(right[r]);
            r = r + 1;
        }
    }

    return arr;
};

// Собственно, сортирует весь массив
function mergeSort(arr) {
    let length = arr.length;
    if (length > 1) {
        let arrayMiddle = Math.ceil(length / 2);

        let left = mergeSort(arr.slice(0, arrayMiddle));
        let right = mergeSort(arr.slice(arrayMiddle, length));

        return merge(left, right);
    }

    return arr;
}

module.exports = mergeSort;
