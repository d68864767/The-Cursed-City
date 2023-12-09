# Cursed City

Cursed City is a Node.js application that simulates a scenario in the fictional city of Nodeberg. The city is connected by a network of bi-directional roads, but a curse causes some roads to disappear at night. The application determines whether all buildings in Nodeberg remain connected after the disappearance of these cursed roads.

## Problem Statement

Given a number of buildings and a list of roads connecting them, along with a list of roads that disappear at night (cursed roads), the application checks if there is still a path that connects all the buildings in Nodeberg after sundown.

## Installation

To set up the project, you need to have Node.js installed on your system. If you don't have Node.js installed, you can download it from [Node.js official website](https://nodejs.org/).

Once Node.js is installed, clone the repository to your local machine and install the dependencies:

```bash
git clone <repository-url>
cd cursed-city
npm install
```

## Usage

The main functionality of the application is exposed through the `isCityConnected` function, which can be imported from the `index.js` file.

Here's an example of how to use the function:

```javascript
const { isCityConnected } = require('./index');

const n = 5; // Number of buildings
const roads = [[1, 2], [2, 3], [3, 4], [4, 5]]; // Roads connecting the buildings
const cursedRoads = [[2, 3]]; // Roads that disappear at night

const connected = isCityConnected(n, roads, cursedRoads);
console.log(connected); // Output: false
```

## Testing

The application comes with a suite of tests for the graph, DFS, and utility functions. To run the tests, execute the following command:

```bash
npm test
```

## Project Structure

The project is structured as follows:

- `package.json` - Contains metadata and dependencies for the project.
- `index.js` - The entry point of the application that exports the `isCityConnected` function.
- `graph.js` - Defines the `Graph` class used to represent the city's road network.
- `dfs.js` - Contains the `depthFirstSearch` function to traverse the graph.
- `utils.js` - Provides utility functions to support the main algorithm.
- `config.js` - Holds configuration settings for the project.
- `test/` - Contains test files for the graph, DFS, and utility functions.
- `.gitignore` - Specifies files to be ignored by Git.
- `README.md` - The file you are currently reading.

## License

This project is licensed under the ISC License. See the `LICENSE` file for details.

## Author

Your Name

---

**Note:** This project is for educational purposes and simulates a fictional scenario. The city of Nodeberg and the curse are purely imaginary.
