    const display = document.getElementById('Ans');
    const buttons = Array.from(document.querySelectorAll('#numbs button'));

    let currentInput = '';
    let previousInput = '';
    let operator = '';

    function updateDisplay(value) {
        display.textContent = value;
    }

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.textContent;

            if (value === 'C') {
                currentInput = '';
                previousInput = '';
                operator = '';
                updateDisplay('');
            } else if (value === '=') {
                if (currentInput && previousInput && operator) {
                    const expression = `${previousInput} ${operator} ${currentInput}`.replace('÷', '/').replace('x', '*');
                    const result = eval(expression); // Simple evaluation
                    updateDisplay(result);
                    currentInput = result;
                    previousInput = '';
                    operator = '';
                }
            } else if (['+', '-', '÷', 'x'].includes(value)) {
                if (currentInput) {
                    if (previousInput && operator) {
                        const expression = `${previousInput} ${operator} ${currentInput}`.replace('÷', '/').replace('x', '*');
                        previousInput = eval(expression);
                    } else {
                        previousInput = currentInput;
                    }
                    currentInput = '';
                    operator = value === '÷' ? '/' : value === 'x' ? '*' : value;
                    updateDisplay(previousInput + ' ' + operator);
                }
            } else {
                currentInput += value;
                updateDisplay(previousInput + ' ' + operator + ' ' + currentInput);
            }
        });
    });
