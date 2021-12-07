const fs = require("fs");

fs.readFile("./input", (error, data) => {
  if (error) {
    throw error;
  }

  const input = data.toString().split("\n");

  const wordLength = 12;

  let gammaRate = "";
  let epsilonRate = "";
  let zero = 0;
  let one = 0;

  for (let j = 0; j < wordLength; j++) {
    for (let i = 0; i < input.length; i++) {
      if (input[i][j] === "0") {
        zero += 1;
      }

      if (input[i][j] === "1") {
        one += 1;
      }
    }

    gammaRate += one > zero ? "1" : "0";
    epsilonRate += one > zero ? "0" : "1";

    zero = 0;
    one = 0;
  }

  let powerConsumption = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);

  console.log("Power consumption:", powerConsumption);
});
