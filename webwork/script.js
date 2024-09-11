
    const prankBtn = document.getElementById('prankBtn');

    let moveRight = true;

    prankBtn.addEventListener('mouseover', () => {
        if (moveRight) {
            prankBtn.style.transform = `translateX(190px)`; // Move to the right
        } else {
            prankBtn.style.transform = `translateX(0)`; // Move back to the left
        }
        moveRight = !moveRight; // Toggle direction
    });
