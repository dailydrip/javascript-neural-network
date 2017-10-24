var synaptic = require("synaptic");
var Neuron = synaptic.Neuron,
  Layer = synaptic.Layer,
  Network = synaptic.Network,
  Trainer = synaptic.Trainer,
  Architect = synaptic.Architect;

const trillion = Math.pow(10, 12);
const billion = Math.pow(10, 9);
const million = Math.pow(10, 6);

const billionToTrillion = Math.pow(10, -3);
const millionToTrillion = Math.pow(10, -6);

const bangladesh = [216.3 * billionToTrillion, 156, 143998 * Math.pow(10, -6)];
const chile = [242.3 * billionToTrillion, 17.7, 756102 * Math.pow(10, -6)];

const continents = ["North America", "South America", "Asia"];

function guessCountry() {
  var myNetwork = new Architect.Perceptron(3, 2, 3);
  var trainer = new Trainer(myNetwork);
  // GNP(trillion), Population(million), Area(million)
  var trainingSet = [
    //USA
    {
      input: [19.45, 322, 9.631],
      output: [1, 0, 0]
    },
    //CANADA
    {
      input: [1.584, 35.3, 9.985],
      output: [1, 0, 0]
    },
    //BRAZIL
    {
      input: [1.836, 202, 8.515],
      output: [0, 1, 0]
    },
    //ARGENTINA
    {
      input: [524 * billionToTrillion, 41.8, 2.767],
      output: [0, 1, 0]
    },
    //THAILAND
    {
      input: [388.3 * billionToTrillion, 70.6, 513120 * Math.pow(10, -6)],
      output: [0, 0, 1]
    },
    //INDIA
    {
      input: [2.2, 1.29 * Math.pow(10, 3), 3.287],
      output: [0, 0, 1]
    },
    //PHILIPINES
    {
      input: [370 * billionToTrillion, 99.8, 300000 * Math.pow(10, -6)],
      output: [0, 0, 1]
    }
  ];
  console.log("trainingSet", trainingSet);
  console.log("start training");
  trainer.train(trainingSet, {
    rate: 0.001,
    iterations: 65000,
    error: 0.05,
    shuffle: true,
    log: 1000,
    cost: Trainer.cost.CROSS_ENTROPY
  });
  var result = myNetwork.activate(chile);
  console.log("The result was", result);
  console.log("------");
  console.log("North America", Math.floor(result[0] * 100), "%");
  console.log("South America", Math.floor(result[1] * 100), "%");
  console.log("Asia", Math.floor(result[2] * 100), "%");
}

guessCountry();
