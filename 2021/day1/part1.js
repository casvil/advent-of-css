const fs = require("fs");

fs.readFile("./input", (error, data) => {
  if (error) {
    throw error;
  }

  const input = data.toString().split("\n");
  const initialValue = 0;

  const reducer = (accumulator, item, index, array) =>
    index + 1 < array.length && parseInt(item) < parseInt(array[index + 1])
      ? accumulator + 1
      : accumulator;

  const increased = input.reduce(reducer, initialValue);

  console.log("Total increased:", increased);
});
