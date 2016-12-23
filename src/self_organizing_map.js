var plot = require("./plot.js");

class Self_Organizing_Map {

    constructor(number_of_neurons, learning_rate, epochs, learning_exp_decay, radius_exp_decay) {
 
        // neurons
        this.number_of_neurons = number_of_neurons;
        this.neurons = [];
        for(var i = 0; i < number_of_neurons; i++) {
            this.neurons.push([Math.random(), Math.random()]);
        }

        // learning rate
        this.learning_rate = learning_rate;
        this.learning_exp_decay = learning_exp_decay;
        this.current_learning_rate = this.learning_rate;

        // epochs
        this.epochs = epochs;
        this.current_epoch = 1;

        // radius
        this.radius_exp_decay = radius_exp_decay;
        this.radius = Math.ceil(number_of_neurons/10);
        this.current_radius = this.radius;

        // path cost
        this.path_cost = 0;

    }

    train_neurons(input) {
        var plotter = new plot.Plot(this.neurons, input);
        for(var epoch = 0; epoch < this.epochs; epoch++) {
            for(var element_pos = 0; element_pos < input.length; element_pos++) {
                var output_signals = this.integrate_and_fire(input[element_pos]);
                var winning_neuron_pos = this.find_winner_pos(output_signals);
                this.update_neurons(winning_neuron_pos, input[element_pos]);
            }
            this.adjust_radius();
            this.adjust_learning_rate();
            this.calculate_path_cost(input);
            console.log("Epoch: "+this.current_epoch);
            if(epoch % 50 == 0) {
                plotter.update(this.neurons, input, this.current_epoch);
            }
            this.current_epoch += 1;
        }
    }

    find_winner_pos(output_signals) {
        var index = 0;
        for(i = 0; i < output_signals.length; i++) {
            if (output_signals[i] < output_signals[index]) {
                index = i;
            }
        }
        return index;
    }

    integrate_and_fire(input_element) {
        var output = [];
        for(i = 0; i < this.number_of_neurons; i++) {
            output.push(this.dist(input_element, this.neurons[i]));
        }
        return output;
    }

    dist(input_element, neuron) {
        return Math.abs(
            Math.sqrt(
                Math.pow((input_element[0]-neuron[0]), 2) + Math.pow((input_element[1]-neuron[1]), 2)
            )
        );
    }

    update_neurons(winning_neuron_pos, input_element) {
        var neurons_pos = [];
        for(var i=winning_neuron_pos-this.current_radius; i < winning_neuron_pos+this.current_radius+1; i++) {
            var mod_i = (i+this.number_of_neurons)%this.number_of_neurons
            neurons_pos.push(mod_i);
        }
        for(var pos=0; pos < neurons_pos.length; pos++) {
            this.train_neuron(neurons_pos[pos], input_element, 1.0);
        }
    }

    train_neuron(pos, input_element, learning_factor) {
        // regulate learning by learning formula: Wij = Wij + f*(Pj-Wij)
        const n_x = this.neurons[pos][0];
        const n_y = this.neurons[pos][1];
        var trained_x = n_x + this.current_learning_rate * learning_factor * (input_element[0] - n_x);
        var trained_y = n_y + this.current_learning_rate * learning_factor * (input_element[1] - n_y);
        this.neurons[pos][0] = trained_x;
        this.neurons[pos][1] = trained_y;
    }

    adjust_radius() {
        if (this.radius_exp_decay) {
            this.current_radius = parseInt(Math.round(this.radius * Math.pow(0.95, this.current_epoch)));
        }
    }

    adjust_learning_rate() {
        if (this.learning_exp_decay) {
            this.current_learning_rate = this.learning_rate * Math.pow(0.95, this.current_epoch);
        }
    }

    // ===== Path Cost =========

    estimate_current_path(input) {
        var weights = this.neurons.slice();
        var cities_to_neurons_mapping = this.map_cities_to_neurons(input, weights);
        var city_path = this.construct_city_path(cities_to_neurons_mapping, weights);
        this.calculate_city_path_cost(city_path, input);
    }

    map_cities_to_neurons(input, weights) {
        var city_neuron_mapping = {};
        for(var i = 0; i < input.length; i++) {
            var neuron_index = Math.min.apply(this.dist, input[i], weights);
            if (neuron_index in city_neuron_mapping) {
                city_neuron_mapping[neuron_index].push(i);
            } else{
                city_neuron_mapping[neuron_index] = [i];
            }
        }
            
        return city_neuron_mapping
    }

    construct_city_path(cities_to_neurons_mapping, weights_list) {

    }

    calculate_city_path_cost(city_path, input_cases) {

    }
}

module.exports = { Self_Organizing_Map: Self_Organizing_Map }
