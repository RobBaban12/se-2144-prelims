document.addEventListener('DOMContentLoaded', () => {
  // Function to toggle the calculator on and off
  const toggleCalculator = () => {
    const calculator = document.getElementById('calculator');
    const display = document.getElementById('display');

    if (calculator.classList.contains('off')) {
      calculator.classList.remove('off');      
      setTimeout(() => {
        display.value = '';
      }, 1500); 
    } else {
      calculator.classList.add('off');
      display.value = 'Goodbye 👋';
      setTimeout(() => {
        display.value = '';
      }, 1500); 
    }
  }

  // Function to show a random greeting message
  const showRandomHello = () => {
    const display = document.getElementById('display');
    const greetings = ['Hello 🌎', 'Hola 🌎', 'Kamusta 🌎', 'Bonjour 🌎', 'Hallo 🌎'];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    display.value = randomGreeting;
    setTimeout(() => {
      display.value = '';
    }, 1500); 
  }

  // Function to append a value to the display
  const appendToDisplay = (value) => {
    const display = document.getElementById('display');
    if (!document.getElementById('calculator')?.classList.contains('off')) {
      display.value += value;
    } else {
      display.value = 'Calculator is off';
    }
  }

  // Function to clear the display
  const clearDisplay = () => {
    const display = document.getElementById('display');
    display.value = '';
  }

  // Function to evaluate the expression in the display
  const calculate = () => {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  }

  // Function to remove the last character from the display
  const backspace = () => {
    const display = document.getElementById('display');
    if (!document.getElementById('calculator')?.classList.contains('off')) {
      display.value = display.value.slice(0, -1);
    } else {
      alert('Calculator is off');
    }
  }

  // Event listeners for the Hello and Bye buttons
  document.getElementById('hello').addEventListener('click', showRandomHello);
  document.getElementById('bye').addEventListener('click', toggleCalculator);

  //  functions to the global scope for button onclick attributes
  window.appendToDisplay = appendToDisplay;
  window.clearDisplay = clearDisplay;
  window.calculate = calculate;
  window.backspace = backspace;
});

