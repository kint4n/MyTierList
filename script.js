// Add Entry Button
const addEntryButton = document.getElementById("add-entry-button");
const addEntryDetails = document.querySelector(".add-entry-details-container")
const cancelEntry = document.getElementById("cancel-entry-button");
const confirmEntry = document.getElementById("confirm-entry-button");
const tableBody = document.getElementById("main-table");

//TODO
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
    const entryTitle = document.getElementById('entry-title').value;
    const entryRating = document.getElementById('entry-rating').value;
    if(!entryTitle || !entryRating) {
        alert('Please fill in Title or Rating!');
    }
    else {
        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        today = `${dd}/${mm}/${yyyy}`;

        tableBody.innerHTML += `
            <tr>
                <td data-cell="#"> </td>
                <td data-cell="Date">${today}</td>
                <td data-cell="Title">${entryTitle}</td>
                <td data-cell="Rating">${entryRating}</td>
                <td data-cell="Rank #"> </td>
            </tr>
        `;

        // Clear input fields after confirming
        document.getElementById('entry-title').value = '';
        document.getElementById('entry-rating').value = '';
    }
}










function init() {
    addEntryButton.addEventListener('click', onAddEntryClick);
    cancelEntry.addEventListener('click', onCancelClick);
    confirmEntry.addEventListener('click', onConfirmClick);
}

init();