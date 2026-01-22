let currentDisplay = '0';
        let firstNumber = null;
        let operation = null;
        let shouldResetDisplay = false;
        
        function updateDisplay() {
            document.getElementById('display').textContent = currentDisplay;
        }
        
        function appendNumber(num) {
            if (shouldResetDisplay) {
                currentDisplay = num;
                shouldResetDisplay = false;
            } else {
                if (currentDisplay === '0' && num !== '.') {
                    currentDisplay = num;
                } else {
                    currentDisplay += num;
                }
            }   
            updateDisplay();
        }
        
        function clearDisplay() {
            currentDisplay = '0';
            firstNumber = null;
            operation = null;
            shouldResetDisplay = false;
            updateDisplay();
        }
        
        function deleteLast() {
            if (currentDisplay.length > 1) {
                currentDisplay = currentDisplay.slice(0, -1);
            } else {
                currentDisplay = '0';
            }
            updateDisplay();
        }
        
        function setOperation(op) {
            if (firstNumber !== null && operation !== null && !shouldResetDisplay) {
                calculate();
            }
            firstNumber = parseFloat(currentDisplay);
            operation = op;
            shouldResetDisplay = true;
        }
        
        function add(a, b) {
            return a + b;
        }
        
        function subtract(a, b) {
            return a - b;
        }
        
        function multiply(a, b) {
            return a * b;
        }
        
        function divide(a, b) {
            if (b === 0) {
                return 'Error';
            }
            return a / b;
        }
        
        function calculate() {
            if (firstNumber === null || operation === null) {
                return;
            }
            
            let secondNumber = parseFloat(currentDisplay);
            let result;
            
            if (operation === 'add') {
                result = add(firstNumber, secondNumber);
            } else if (operation === 'subtract') {
                result = subtract(firstNumber, secondNumber);
            } else if (operation === 'multiply') {
                result = multiply(firstNumber, secondNumber);
            } else if (operation === 'divide') {
                result = divide(firstNumber, secondNumber);
            }
            
            if (result === 'Error') {
                currentDisplay = 'Error';
            } else {
                currentDisplay = result.toString();
            }
            
            firstNumber = null;
            operation = null;
            shouldResetDisplay = true;
            updateDisplay();
        }