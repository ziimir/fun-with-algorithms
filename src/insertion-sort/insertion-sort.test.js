const { expect } = require('chai');
const insertionSort = require('./insertion-sort');

describe('Insertion sort', () => {
    it('should sort array from smallest to greater', () => {
        let unsortedArray = [9, 2, 5, 10, 1, 6, 7, 3, 8, 4, 9, 0];
        let sortedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10];

        let result = insertionSort(unsortedArray, unsortedArray.length);

        expect(result).to.eql(sortedArray);
    });
});
