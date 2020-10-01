const _ = require("lodash");

const matrix = [
  [0, 20, 45, 25, 52],
  [20, 0, 76, 42, 57],
  [45, 75, 0, 87, 41],
  [25, 42, 87, 0, 73],
  [52, 57, 41, 73, 0],
];

const getPaths = (cities, path = [0], result = []) => {
  if (cities.length === path.length) {
    return result.push(path);
  }

  const yetToBeVisited = _.difference(cities, path);

  yetToBeVisited.forEach((city) => {
    getPaths(cities, [...path, city], result);
  });

  return result;
};

const tsp = () => {
  const cities = _.range(matrix.length);
  const paths = getPaths(cities);
  console.log(paths);
};

const solveTsp = () => {
  const startTime = new Date();
  const tspSolution = tsp();
  const endTime = new Date();
  console.log(`Total Run Time: ${endTime - startTime}`);
};

solveTsp();
