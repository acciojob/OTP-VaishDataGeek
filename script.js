const inputs = document.querySelectorAll('.code');

// Automatically focus on first input
inputs[0].focus();

inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value.match(/[0-9]/)) {
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    } else {
      e.target.value = '';
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (input.value === '' && index > 0) {
        inputs[index - 1].focus();
        inputs[index - 1].value = '';
      }
    }
  });
});
