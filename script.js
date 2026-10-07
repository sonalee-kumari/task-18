   const header = document.getElementById('greetingHeader');
    const nameInput = document.getElementById('nameInput');
    const greetBtn = document.getElementById('greetBtn');

    function updateGreeting() {
      const name = nameInput.value.trim();
      if (name) {
        header.textContent = `Hello, ${name}`;
      } else {
        header.textContent = 'Hello';
      }
    }

    greetBtn.addEventListener('click', updateGreeting);

    nameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        updateGreeting();
      }
    });

    const boxes = document.querySelectorAll('.box');

    boxes.forEach((box) => {
      box.addEventListener('click', () => {
        const color = box.getAttribute('data-color');
        box.style.backgroundColor = color;
        
    
        if (color === 'yellow') {
          box.style.color = '#111';
        } else {
          box.style.color = '#fff';
        }
      });
    });
  