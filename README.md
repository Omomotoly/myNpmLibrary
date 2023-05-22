# Polygon Angle Sum

A simple npm library for calculating the sum of angles in a polygon.

## Installation

To use this library in your project, you need to have Node.js and npm installed. Run the following command to install the package:

```shell
npm install polygon-angle-sum


## Usage

const polygonAngleSum = require('polygon-angle-sum');

// Example usage
const angles = polygonAngleSum(5);
console.log(`The sum of angles in a pentagon is ${angles}`);

const polygonAngleSum = require('polygon-angle-calculator');

// Valid polygon
console.log(polygonAngleSum(4)); // Output: 360

// Invalid number of sides
console.log(polygonAngleSum(2)); // Output: "Number of sides must be an integer greater than or equal to 3"

// Non-integer number of sides
console.log(polygonAngleSum(6.5)); // Output: "Number of sides must be an integer greater than or equal to 3"

// Invalid input type
console.log(polygonAngleSum('6')); // Throws a TypeError

// Invalid input format
console.log(polygonAngleSum('xyz')); // Throws a TypeError

## Contributing
 If you want to contribute to the Polygon Angle Sum Calculator, please open an issue or submit a pull request on the GitHub repository.


