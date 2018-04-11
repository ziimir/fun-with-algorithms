const { expect } = require('chai');
const topologicalSort = require('./topological-sort');

describe('Topological sort', () => {
    it('should sort graph without multiple children', () => {
        let graph = [
            [0 , 1, 0],
            [0 , 0, 1],
            [0 , 0, 0]
        ];

        let result = topologicalSort(graph);

        expect(result).to.eql([0, 1, 2]);
    });

    it('should sort graph with multiple children', () => {
        let graph = [
            [0 , 0, 0, 1],
            [0 , 0, 0, 0],
            [0 , 1, 0, 0],
            [0 , 1, 1, 0]
        ];

        let result = topologicalSort(graph);

        expect(result).to.eql([0, 3, 2, 1]);
    });

    it('should sort complex graph', () => {
        let graph = [
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];

        let result = topologicalSort(graph);

        expect(result).to.eql([8, 9, 1, 0, 2, 4, 3, 5, 10, 11, 6, 7, 12, 13]);
    })
});
