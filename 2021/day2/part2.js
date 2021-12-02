const fs = require("fs");

fs.readFile("./input", (error, data) => {
  if (error) {
    throw error;
  }

  const input = data.toString().split("\n");
  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  input.forEach((step) => {
    const [direction, quantity] = step.split(" ");

    switch (direction) {
      case "forward": {
        horizontal += parseInt(quantity);
        depth += aim * parseInt(quantity);
        break;
      }
      case "down":
        aim += parseInt(quantity);
        break;
      case "up":
        aim -= parseInt(quantity);
        break;
    }
  });

  console.log("Multiply horizontal * depth:", horizontal * depth);
});
