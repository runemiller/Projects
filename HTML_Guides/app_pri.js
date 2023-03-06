// Select the form, input, and list elements from the HTML
const form = document.querySelector('form');
const input = document.querySelector('#new-item');
const priorityInput = document.querySelector('#priority');
const itemsList = document.querySelector('#items');
const sortBtn = document.querySelector('#sort-btn');

// Load items from local storage, or create an empty array
// if there are none
const items = JSON.parse(localStorage.getItem('items')) || [];

// Display the items in the list
function displayItems() {
    const itemsHTML = items.map((item, index) => {
        // Create a list item with a checkbox for the "done" field
        return `
      <li>
        <input type="checkbox" class="item-done" 
          data-index="${index}" ${item.done ? 'checked' : ''}>
        <span class="item-text ${item.done ? 'done' : ''}">${item.text}</span>
        <span class="item-priority">${item.priority}</span>
        <button class="delete-btn" data-index="${index}">Delete</button>
      </li>
    `;
    });
    itemsList.innerHTML = itemsHTML.join('');
}


// Add a new item to the list
function addItem(e) {
    e.preventDefault();
    const text = input.value.trim();
    const priority = priorityInput.value.trim();
    // Initialize the "done" field to false
    const done = false;
    if (text.length && priority.length && priority >= 1 && priority <= 5) {
        // Modify the items array to add the text, priority,
        // and done values as a single object
        items.push({ text, priority, done });
        localStorage.setItem('items', JSON.stringify(items));
        input.value = '';
        priorityInput.value = '';
        displayItems();
    }
}


// Delete an item from the list
function deleteItem(e) {
    if (e.target.matches('.delete-btn')) {
        const index = e.target.dataset.index;
        items.splice(index, 1);
        localStorage.setItem('items', JSON.stringify(items));
        displayItems();
    }
}


function sortItems() {
    // Sort the items array by priority, using a custom sort function
    items.sort((a, b) => {
        const priorityA = a.split(':')[1];
        const priorityB = b.split(':')[1];
        return priorityA - priorityB;
    });
    // Update the display with the sorted items
    displayItems();
}

function toggleDone(e) {
    if (e.target.matches('.item-done')) {
        const index = e.target.dataset.index;
        // Update the "done" field of the task in the items array
        items[index].done = e.target.checked;
        localStorage.setItem('items', JSON.stringify(items));
        displayItems();
    }
}


// Add event listeners to the form and list elements
form.addEventListener('submit', addItem);
itemsList.addEventListener('click', deleteItem);
sortBtn.addEventListener('click', sortItems);

// Call the displayItems function to initially display the items
// in the list
displayItems();
