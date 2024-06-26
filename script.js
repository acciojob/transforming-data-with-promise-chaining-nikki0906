//your JS code here. If required.
          function getInputNumber() {
            return new Promise((resolve, reject) => {
                const inputValue = document.getElementById('ip').value;
                const number = parseFloat(inputValue);
                if (isNaN(number)) {
                    reject('Please enter a valid number');
                } else {
                    setTimeout(() => {
                        document.getElementById('output').innerText = `Result: ${number}`;
                        resolve(number);
                    }, 2000);
                }
            });
        }

        // Function to multiply the number by 2 and resolve after 1 second
        function multiplyByTwo(number) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = number * 2;
                    document.getElementById('output').innerText = `Result: ${result}`;
                    resolve(result);
                }, 1000);
            });
        }

        // Function to subtract 3 from the number and resolve after 1 second
        function subtractThree(number) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = number - 3;
                    document.getElementById('output').innerText = `Result: ${result}`;
                    resolve(result);
                }, 1000);
            });
        }

        // Function to divide the number by 2 and resolve after 1 second
        function divideByTwo(number) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = number / 2;
                    document.getElementById('output').innerText = `Result: ${result}`;
                    resolve(result);
                }, 1000);
            });
        }

        // Function to add 10 to the number and resolve after 1 second
        function addTen(number) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = number + 10;
                    document.getElementById('output').innerText = `Result: ${result}`;
                    resolve(result);
                }, 1000);
            });
        }

        // Adding the onClick event listener to the button
        document.getElementById('btn').addEventListener('click', () => {
            getInputNumber()
                .then(number => multiplyByTwo(number))
                .then(number => subtractThree(number))
                .then(number => divideByTwo(number))
                .then(number => addTen(number))
                .then(finalResult => {
                    document.getElementById('output').innerText = `Final Result: ${finalResult}`;
                })
                .catch(error => {
                    document.getElementById('output').innerText = `Error: ${error}`;
                });
        });