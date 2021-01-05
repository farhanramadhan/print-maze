const wall = "@";
const road = " ";

function createMaze(size) {
  left = false;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i == 0 || j == 0 || i == size-1 || j == size-1 || (i % 2 == 0)) {
        if ((i % 2 == 0) && left && j == 1) {
          process.stdout.write(road);
        } else if ((i % 2 == 0) && !left && j == size-2) {
          process.stdout.write(road);
        } else {
          process.stdout.write(wall);
        }
        if (i % 2 == 0) {
          left = !left;
        }
      } else {
        process.stdout.write(road); 
      }
    }
    console.log();
  }
}

function input(input) {
  return 4*input - 1;
}

n = 8;
createMaze(input(n));