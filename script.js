//your JS code here. If required.
// Function to get the number from the input and resolve after 2 seconds

document.getElementById('btn').addEventListener('click', () => {
            const inputNumber = parseInt(document.getElementById('ip').value, 10);
            const outputDiv = document.getElementById('output');
            outputDiv.textContent = 'Processing...';

            new Promise((resolve) => {
                setTimeout(() => {
                    outputDiv.textContent = `Result: ${inputNumber}`;
                    resolve(inputNumber);
                }, 2000);
            })
            .then((number) => new Promise((resolve) => {
                setTimeout(() => {
                    const result = number * 2;
                    outputDiv.textContent = `Result: ${result}`;
                    resolve(result);
                }, 1000);
            }))
            .then((number) => new Promise((resolve) => {
                setTimeout(() => {
                    const result = number - 3;
                    outputDiv.textContent = `Result: ${result}`;
                    resolve(result);
                }, 1000);
            }))
            .then((number) => new Promise((resolve) => {
                setTimeout(() => {
                    const result = number / 2;
                    outputDiv.textContent = `Result: ${result}`;
                    resolve(result);
                }, 1000);
            }))
            .then((number) => new Promise((resolve) => {
                setTimeout(() => {
                    const result = number + 10;
                    outputDiv.textContent = `Result: ${result}`;
                    resolve(result);
                }, 1000);
            }))
            .then((finalResult) => {
                outputDiv.textContent = `Final Result: ${finalResult}`;
            })
            .catch((error) => {
                outputDiv.textContent = `Error: ${error.message}`;
            });
        });