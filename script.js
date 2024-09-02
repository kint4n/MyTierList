// Add Entry Button
const addEntryButton = document.getElementById("add-entry-button");
const addEntryDetails = document.querySelector(".add-entry-details-container")
const cancelEntry = document.getElementById("cancel-entry-button");

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









function init() {
    addEntryButton.addEventListener('click', onAddEntryClick);
    cancelEntry.addEventListener('click', onCancelClick);
}

init();