function countKeysEqual(arr, n, m) {
    let equal = new Array(m);
    equal.fill(0);

    for (let i = 0; i < n; i++) {
        let key = arr[i];
        equal[key] = equal[key] + 1;
    }

    return equal;
}

function countKeysLess(equal, m) {
    let less = new Array(m);
    less[0] = 0;

    for (let i = 1; i <= m; i++) {
        less[i] = less[i - 1] + equal[i - 1];
    }

    return less;
}

function rearrange(arr, less, n, m) {
    let sortedArr = new Array(n);

    for (let i = 0; i < n; i++) {
        let key = arr[i];
        let index = less[key];
        sortedArr[index] = arr[i];

        less[key] = less[key] + 1;
    }

    return sortedArr;
}

function countingSort(arr, n, m) {
    let equal = countKeysEqual(arr, n, m);
    let less = countKeysLess(equal, m);
    let sortedArr = rearrange(arr, less, n, m);

    return sortedArr;
}

module.exports = countingSort;
