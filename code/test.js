/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
	if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
		return 0;
	}

	const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
	const m = matrix.length, n = matrix[0].length;

	const outdegrees = new Array(m).fill(0).map(() => new Array(n).fill(0));

	for (let row = 0; row < m; row++) {
		for (let col = 0; col < n; col++) {
			for (const dir of dirs) {
				const x = row + dir[0], y = col + dir[1];
				if (x >= 0 && x < m && y >= 0 && y < n && matrix[x][y] > matrix[row][col]) {
					++outdegrees[row][col];
				}
			}
		}
	}

	const queue = [];
	for (let row = 0; row < m; row++) {
		for (let col = 0; col < n; col++) {
			if (outdegrees[row][col] === 0) {
				queue.push([row, col]);
			}
		}
	}

	let ans = 0;

	while (queue.length){
		ans++;
		let size = queue.length;
		for (let i = 0; i < size; i++) {
			const [row, col] = queue.shift();
			for (const dir of dirs) {
				const x = row + dir[0], y = col + dir[1];
				if (x >= 0 && x < m && y >= 0 && y < n && matrix[x][y] < matrix[row][col]) {
					--outdegrees[x][y];
					if (outdegrees[x][y] === 0) {
						queue.push([x, y]);
					}
				}
			}
		}
	}

	return ans;
};

let matrix = [[9,9,4],[6,6,8],[2,1,1]];
console.log(longestIncreasingPath(matrix));