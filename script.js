//your JS code here. If required.
// Get references to the select element and the button
const colorSelect = document.getElementById('colorSelect');
const removeButton = document.getElementById('removeButton');

// Add an event listener to the button
removeButton.addEventListener('click', function() {
    // Get the selected option
    const selectedOption = colorSelect.options[colorSelect.selectedIndex];
    
    // Check if an option is selected
    if (selectedOption) {
        // Remove the selected option from the dropdown
        colorSelect.removeChild(selectedOption);
    } else {
        alert("No option selected!"); // Optional: Alert if no option is selected
    }
});