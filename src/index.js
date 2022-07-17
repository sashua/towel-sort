// You should implement your task here.

module.exports = function towelSort(matrix) {
    matrix = matrix || [];
    return matrix.flatMap((row, i) => {
        return i % 2 ? row.reverse() : row;
    });
};
