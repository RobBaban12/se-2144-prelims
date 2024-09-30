const toggleCalculator = () => {
  const calculator = document.getElementById('calculator') ;
  const display = document.getElementById('display') ;
  

  if (calculator.classList.contains('off')) {
    calculator.classList.remove('off');
    display.value = 'Hello 🌎';
    setTimeout(() => {
      display.value = '';
    }, 1000); // Clear display after 1 second
  } else {
    calculator.classList.add('off');
    display.value = 'Goodbye 👋';
    setTimeout(() => {
      display.value = '';
    }, 1000); 
  }
}

const appendToDisplay = (value) => {
  const display = document.getElementById('display') ;
  if (!document.getElementById('calculator')?.classList.contains('off')) {
    display.value += value;
  } else {
    alert('Calculator is off');
  }
}

const clearDisplay = () => {
  const display = document.getElementById('display') 
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
