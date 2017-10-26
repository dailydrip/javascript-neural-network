var synaptic = require("synaptic");
var Neuron = synaptic.Neuron,
  Trainer = synaptic.Trainer,
  Architect = synaptic.Architect;

function myNeuralNetwork() {
  var myNetwork = new Architect.Perceptron(2, 2, 1);
  var trainer = new Trainer(myNetwork);

  var hopfield = new Architect.Hopfield(3);

  hopfield.learn([[0, 1, 0], [1, 1, 1]]);

  console.log(hopfield.feed([0, 0, 0]));
  console.log(hopfield.feed([1, 1, 0]));
}

myNeuralNetwork();
