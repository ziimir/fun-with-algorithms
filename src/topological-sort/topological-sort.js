/**
 * G[i][j] === 1 -> ребро из i в j
 *
 *  let graph = [
 *      [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // +-------------------------- j
 *      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // |
 *      [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], // |
 *      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], // |
 *      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], // |
 *      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0], // |
 *      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], // |
 *      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], // |
 *      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], // |
 *      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], // |
 *      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], // |
 *      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], // |
 *      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], // |
 *      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  // | i
 *  ];
 */

function getAdjacencyList(graph) {
    let matrixSize = graph.length;
    let adjacencyList = [];

    for (let i = 0; i <= matrixSize; i++) {
        adjacencyList[i] = [];
    }

    for (let i = 0; i < matrixSize; i++) {
        for (let j = 0; j < matrixSize; j++) {
            if (graph[i][j] > 0) {
                adjacencyList[i].push(j);
            }
        }
    }

    return adjacencyList;
};

function topologicalSort(graph) {
    let result = [];
    let matrixSize = graph.length;
    let inDegree = new Array(matrixSize);
    inDegree.fill(0);

    // Нужно подсчитать входящие степени вершин
    for (let i = 0; i < matrixSize; i++) {
        for (let j = 0; j < matrixSize; j++) {
            if (graph[i][j] > 0) {
                inDegree[j] += 1;
            }
        }
    }

    // Определяем списки смежности (какие вершины в какие входят)
    let adjacencyList = getAdjacencyList(graph);

    // Массив вершин с нолевой входящей степенью
    let next = [];
    for (let i = 0; i < matrixSize; i++) {
        if (inDegree[i] === 0) {
            next.push(i);
        }
    }

    while (next.length > 0) {
        let zeroEntersVertex = next.pop();
        result.push(zeroEntersVertex);

        let adjacencyVertexListFor = adjacencyList[zeroEntersVertex];

        for (let i = 0; i < adjacencyVertexListFor.length; i++) {
            let vertex = adjacencyVertexListFor[i];
            inDegree[vertex] -= 1;

            if (inDegree[vertex] === 0) {
                next.push(vertex);
            }
        }
    }

    return result;
}

module.exports = topologicalSort;
