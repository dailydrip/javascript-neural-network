var synaptic = require("synaptic");
var Neuron = synaptic.Neuron,
  Layer = synaptic.Layer,
  Network = synaptic.Network,
  Trainer = synaptic.Trainer,
  Architect = synaptic.Architect;

function myNeuralNetwork() {
  var myNetwork = new Architect.Perceptron(2, 2, 1);
  var trainer = new Trainer(myNetwork);

  var trainingSet = [
    {
      input: [0, 0],
      output: [0]
    },
    {
      input: [0, 1],
      output: [1]
    },
    {
      input: [1, 0],
      output: [1]
    },
    {
      input: [1, 1],
      output: [0]
    }
  ];

  trainer.train(trainingSet);
  var result = myNetwork.activate([0, 1]);
  console.log("The result was", result);
}

myNeuralNetwork();
