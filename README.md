# KTMB Schedule Library

A simple utility library to access KTM Berhad (Malaysia Train) schedule information. 
This package is available on npm and provides a few utility functions to retrieve and manipulate train schedules.

> **Note**: This library is created as a utility for creating and testing OpenAI function calling.

## Features

- Fetch KTM Berhad (KTMB) train schedules
- Utility functions to search for available trains between stations
- Filter schedules by departure and arrival times
- Lightweight and easy to use

## Installation

You can install this package via npm:

```bash
npm install ktmb-schedule
```

## Usage
Below is an example of how to use the ktmb library:

```bash
const ktmb = require('ktmb-schedule');

// Example: Get all train schedules
const schedules = ktmb.getTrainSchedules();
console.log(schedules);

// Example: Find trains between two stations
const availableTrains = ktmb.searchTrains('Kuala Lumpur', 'Ipoh', '08:00', '12:00');
console.log(availableTrains);
```

### Available Functions

Coming soon .....


## OpenAI Function Calling Utility

This library is specifically designed to help developers test and build OpenAI function calling mechanisms. The `ktmb` functions provide structured data that can be used to simulate and validate API calls.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a Pull Request

## License

This project is licensed under the MIT License. See the LICENSE file for details.
