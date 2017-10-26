var regression = require("regression");

const result = regression.linear([[10, 1], [11, 15], [12, 38]]);

var predicted = result.predict(13);

console.log(predicted);
