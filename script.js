// Add Entry Button
const addEntryButton = document.getElementById("add-entry-button");
const addEntryDetails = document.querySelector(".add-entry-details-container")
const cancelEntry = document.getElementById("cancel-entry-button");
const confirmEntry = document.getElementById("confirm-entry-button");
const tableBody = document.getElementById("main-table");

// Input fields
const entryTitle = document.getElementById('entry-title');
const entryRating = document.getElementById('entry-rating');

function displayTable() {
    const itemsFromStorage = getItemsFromStorage();

    itemsFromStorage.forEach(item => tableBody.innerHTML += item);

}

function addItemToStorage(item){
    let itemsFromStorage = getItemsFromStorage(item);

    if(localStorage.getItem('items') === null) {
        itemsFromStorage = [];
    }
    else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    itemsFromStorage.push(item);

    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage() {
    let itemsFromStorage;

    if(localStorage.getItem('items') === null) {
        itemsFromStorage = [];
    }
    else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    return itemsFromStorage;
}


function onAddEntryHover(e) {
    console.log('Hover');
}

// Opens menu to enter details of entry
function onAddEntryClick(e){
    addEntryDetails.style.display = "flex";
}

// Cancel/Close entry details menu
function onCancelClick(e) {
    addEntryDetails.style.display = "none";
}

// confirm entry and input into the table
function onConfirmClick(e) {
    e.preventDefault();
    // Try put global scope for clear input field

    if(!entryTitle.value || !entryRating.value) {
        alert('Please fill in Title or Rating!');
    }
    else if(entryRating.value <= 0 || entryRating.value >= 10) {
        alert('Please enter a rating between 0-10');
        entryRating.value = '';
    }
    else {
        const count = tableBody.rows.length;
        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        today = `${dd}/${mm}/${yyyy}`;

        const item = `
            <tr>
                <td data-cell="#">${count}</td>
                <td data-cell="Date">${today}</td>
                <td data-cell="Title">${entryTitle.value}</td>
                <td data-cell="Rating">${entryRating.value}</td>
                <td width="6%"> <button class="deleteButton"> Delete </button></td>
            </tr>
        `;

        tableBody.innerHTML += item;

        addItemToStorage(item);

        // Clear input fields after confirming
        entryTitle.value = '';
        entryRating.value = '';
    }
}

function onDeleteRow(e) {
    if(!e.target.classList.contains('deleteButton')) {
        return
    }

    const deleteButton = e.target;
    deleteButton.closest("tr").remove();
}

function init() {
    addEntryButton.addEventListener('click', onAddEntryClick);
    cancelEntry.addEventListener('click', onCancelClick);
    confirmEntry.addEventListener('click', onConfirmClick);
    tableBody.addEventListener('click', onDeleteRow);

    displayTable();
}

init();