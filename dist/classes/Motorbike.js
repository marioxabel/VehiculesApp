// Importing Vehicle and Wheel classes
import colors from 'colors';
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
    // TODO: Create a constructor that accepts the properties of the Motorbike class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Motorbike class
    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
    constructor(vin, color, make, model, year, weight, topSpeed, wheels) {
        super();
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        if (wheels.length !== 2) {
            this.wheels = [new Wheel(), new Wheel()];
        }
        else {
            this.wheels = wheels;
        }
    }
    // TODO: Implement the wheelie method
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
    wheelie() {
        console.log(colors.green(`Motorbike ${this.make} ${this.model} is doing a wheelie!`));
    }
    // TODO: Override the printDetails method from the Vehicle class
    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the Motorbike
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
    printDetails() {
        let wheelsInfo = '';
        this.wheels.forEach((wheel, index) => {
            wheelsInfo += `- Wheel ${index + 1}: ${wheel.getDiameter} inch with a ${wheel.getTireBrand} tire \n`;
        });
        console.log(`
Motorbike details 
- VIN: ${this.vin} 
- make: ${this.make} 
- model: ${this.model} 
- year: ${this.year} 
- weight: ${this.weight} 
- top speed: ${this.topSpeed} 
- color: ${this.color} 
${wheelsInfo}
    `);
    }
}
// Export the Motorbike class as the default export
export default Motorbike;
