
# Test

This repository contains JavaScript functions and corresponding tests written using the Jest library. The tests follow the AAA (Arrange-Act-Assert) pattern and aim to ensure the correctness of the implemented functions.

## Table of Contents

- [Function Descriptions](#function-descriptions)
- [Getting Started](#getting-started)
- [Running the Tests](#running-the-tests)

## Function Descriptions

### stringLength(string)

This function takes a string as an argument and returns the number of characters in the string. It also checks if the string is at least 1 character long and not longer than 10 characters. If these conditions are not met, the function throws errors.

### reverseString(string)

The `reverseString` function takes a string as an argument and returns the reversed version of the string.

### Calculator Class

The `Calculator` class provides basic arithmetic operations: `add`, `subtract`, `multiply`, and `divide`. Each method takes two numbers as arguments and performs the corresponding operation. The `divide` method checks for division by zero and throws an error if encountered.

### capitalize(string)

The `capitalize` function takes a string as an argument and returns the same string with the first character capitalized. It throws an error if the input is not a string.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository: `https://github.com/fatmahussein/testing-practice.git`
2. Install the dependencies: `npm install` or `yarn install` (replace with your preferred package manager)

## Running the Tests

You can run the tests by executing the following command:

```bash
npx jest
```

This command will run all the test suites and display the results. Make sure you have installed the dependencies before running the tests.

Feel free to explore the test files in the repository to see the specific test cases and assertions for each function.

## Contributing

Contributions to this project are welcome. If you find any issues or would like to add new tests or functions, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).