
// need to get all the paths the knight can take to get to the square


const chessBoard = [
    [0,1,2,3,4,5,6,7], // a
    [0,1,2,3,4,5,6,7], // b
    [0,1,2,3,4,5,6,7], // c
    [0,1,2,3,4,5,6,7], // d
    [0,1,2,3,4,5,6,7], // e
    [0,1,2,3,4,5,6,7], // f
    [0,1,2,3,4,5,6,7], // g
    [0,1,2,3,4,5,6,7], // h
    [0,1,2,3,4,5,6,7], // i
];

const moves = [
    [2, 1],[2, -1],[-2, 1],[-2, -1],
    [1, 2],[1, -2],[-1, 2],[-1, -2]
];

function knightMoves(start, target) {
    const queue = [[start, [start]]];
    const visited = new Set();

    let count = 0;
    while (queue.length > 0) {
        const [currentPosition, path] = queue.shift();

        if (currentPosition[0] === target[0] && currentPosition[1] === target[1]) {
            return `==> You made it in ${path.length} tries!\n\n==> ${path.join(" > ")}`
        }

        for (let [dx, dy] of moves) {
            const nextPosition = [currentPosition[0] + dx, currentPosition[1] + dy];

            if (nextPosition[0] >= 0 && nextPosition[0] < 8 && nextPosition[1] >= 0 && nextPosition[1]) {
                visited.add(nextPosition.toString());
                queue.push([nextPosition, [...path, nextPosition]]);
            }
        }
    }
    return [];
};




console.log(knightMoves([1,3], [1,4]))

