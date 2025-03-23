// Change text content dynamically
const textContent = document.getElementById('text-content');
const changeTextButton = document.getElementById('change-text');

changeTextButton.addEventListener('click', () => {
    textContent.textContent = 'You just changed me dynamically!';
    textContent.style.color = 'green'; // Modifying CSS dynamically
});

// Add or remove an element dynamically
const toggleButton = document.getElementById('toggle-element');
const dynamicContainer = document.getElementById('dynamic-container');

toggleButton.addEventListener('click', () => {
    const existingElement = document.getElementById('dynamic-element');

    if (existingElement) {
        existingElement.remove();
    } else {
        const newElement = document.createElement('p');
        newElement.id = 'dynamic-element';
        newElement.textContent = 'This element was added dynamically!';
        dynamicContainer.appendChild(newElement);
    }
});
