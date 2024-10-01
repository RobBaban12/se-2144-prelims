document.addEventListener('DOMContentLoaded', () => {
  const toggleCalculator = () => {
    const calculator = document.getElementById('calculator');
    const display = document.getElementById('display');

    if (calculator.classList.contains('off')) {
      calculator.classList.remove('off');
      display.value = 'Hello 🌎';
      setTimeout(() => {
        display.value = '';
      }, 1500); // Clear display after 1.5 seconds
    } else {
      calculator.classList.add('off');
      display.value = 'Goodbye 👋';
      setTimeout(() => {
        display.value = '';
      }, 1500); // Clear display after 1.5 seconds
    }
  }

  const showRandomHello = () => {
    const display = document.getElementById('display');
    const greetings = ['Hello 🌎', 'Hola 🌎', 'Kamusta 🌎', 'Bonjour 🌎', 'Hallo 🌎'];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    display.value = randomGreeting;
    setTimeout(() => {
      display.value = '';
    }, 1500); // Clear display after 1.5 seconds
  }

  const appendToDisplay = (value) => {
    const display = document.getElementById('display');
    if (!document.getElementById('calculator')?.classList.contains('off')) {
      display.value += value;
    } else {
      alert('Calculator is off');
    }
  }

  const clearDisplay = () => {
    const display = document.getElementById('display');
    display.value = '';
  }

  const calculate = () => {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  }

  const backspace = () => {
    const display = document.getElementById('display');
    if (!document.getElementById('calculator')?.classList.contains('off')) {
      display.value = display.value.slice(0, -1);
    } else {
      alert('Calculator is off');
    }
  }

  document.getElementById('hello').addEventListener('click', showRandomHello);
  document.getElementById('bye').addEventListener('click', toggleCalculator);

  window.appendToDisplay = appendToDisplay;
  window.clearDisplay = clearDisplay;
  window.calculate = calculate;
  window.backspace = backspace;
});
