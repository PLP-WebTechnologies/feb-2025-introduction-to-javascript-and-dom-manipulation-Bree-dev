// Change text content dynamically
function changeText() {
    const dynamicText = document.getElementById('dynamicText');
    dynamicText.textContent = 'The text has been changed dynamically!';
}

// Modify CSS styles via JavaScript
function modifyStyle() {
    const dynamicText = document.getElementById('dynamicText');
    dynamicText.style.color = 'red';
    dynamicText.style.fontSize = '24px';
}

// Add a new element
function addElement() {
    const container = document.getElementById('container');
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a newly added element!';
    newElement.className = 'dynamic-text';
    container.appendChild(newElement);
}

// Remove the last element
function removeElement() {
    const container = document.getElementById('container');
    const lastElement = container.querySelector('p:last-child');
    if (lastElement) {
        container.removeChild(lastElement);
    } else {
        alert('No element to remove!');
    }
}
