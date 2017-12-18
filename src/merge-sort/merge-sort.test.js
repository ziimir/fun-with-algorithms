const { expect } = require('chai');
const { merge, mergeSort } = require('./merge-sort');

describe('Merge sort', () => {
    describe('Merge two sorted arrays from smallest to greater', () => {
        it('Left array are bigger then right', () => {
            let sortedSliceLeft = [1, 4, 6, 8];
            let sortedSliceRight = [3, 4, 5];

            let sortedArray = [1, 3, 4, 4, 5, 6, 8];

            let result = merge(sortedSliceLeft, sortedSliceRight);

            expect(result).to.eql(sortedArray);
        });

        it('Right array are bigger then left', () => {
            let sortedSliceLeft = [3, 4, 5];
            let sortedSliceRight = [1, 4, 6, 8];

            let sortedArray = [1, 3, 4, 4, 5, 6, 8];

            let result = merge(sortedSliceLeft, sortedSliceRight);

            expect(result).to.eql(sortedArray);
        });

        it('Left and right arrays have same length', () => {
            let sortedSliceLeft = [3, 4, 5, 9];
            let sortedSliceRight = [1, 4, 6, 8];

            let sortedArray = [1, 3, 4, 4, 5, 6, 8, 9];

            let result = merge(sortedSliceLeft, sortedSliceRight);

            expect(result).to.eql(sortedArray);
        });
    });

    describe('Sort', () => {
        it('should sort array from smallest to greater', () => {
            let unsortedArray = [9, 2, 5, 10, 1, 6, 7, 3, 8, 4, 9, 0];
            let sortedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10];

            let result = mergeSort(unsortedArray);

            expect(result).to.eql(sortedArray);
        });
    });
});
