const fs = require("fs");

fs.readFile("./input.txt", (error, data) => {
  if (error) {
    throw error;
  }

  const input = data.toString().split("\n");
  const initialValue = 0;

  const reducer = (accumulator, item, index) =>
    parseInt(input[index - 3]) +
      parseInt(input[index - 2]) +
      parseInt(input[index - 1]) <
    parseInt(input[index - 2]) + parseInt(input[index - 1]) + parseInt(item)
      ? accumulator + 1
      : accumulator;

  const increased = input.reduce(reducer, initialValue);

  console.log("Total increased:", increased);
});
