document.addEventListener('DOMContentLoaded', () => {
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

  const showRandomHello = () => {
    const display = document.getElementById('display');
    const greetings = ['Hello 🌎', 'Hola 🌎', 'Kamusta 🌎', 'Bonjour 🌎', 'Hallo 🌎'];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    display.value = randomGreeting;
    setTimeout(() => {
      display.value = '';
    }, 1500); 
  }

  const appendToDisplay = (value) => {
    const display = document.getElementById('display');
    if (!document.getElementById('calculator')?.classList.contains('off')) {
      display.value += value;
    } else {
      display.value = 'Calculator is off';
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
