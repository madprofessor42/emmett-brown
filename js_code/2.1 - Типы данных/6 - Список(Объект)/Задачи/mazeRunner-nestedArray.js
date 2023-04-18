// https://www.codewars.com/kata/58663693b359c4a6560001d6/train/javascript

const findCurPosition = (maze) => {
    let position;
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[i].length; j++) {
            if (maze[i][j] === 2) {
                position = [i, j];
                break;  // exit the loop if element is found
            }
        }
    }
    return position ? position : -1
}


const mazeRunner = (maze, directions) => {
    let localMaze = JSON.parse(JSON.stringify(maze))

    let position = findCurPosition(localMaze)
    if (position === -1) return "Starting position is undefined"

    let cur_y = position[0]
    let cur_x = position[1]

    for (let i=0; i<directions.length; i++) {
        if (directions[i] === "N") cur_y--
        if (directions[i] === "S") cur_y++
        if (directions[i] === "W") cur_x--
        if (directions[i] === "E") cur_x++


        if (localMaze[cur_y] === undefined || localMaze[cur_y][cur_x] === undefined || localMaze[cur_y][cur_x] === 1) return  "Dead"
        if (localMaze[cur_y][cur_x] === 3) return "Finish"

    }

    // Если мы застряли в лабиринте
    return "Lost"

}


const maze = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 3],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 2, 1, 0, 1, 0, 1]
]

console.log(mazeRunner(maze, ["N","N","N","N","N","E","E","S","S","S","S","S","S"]))
