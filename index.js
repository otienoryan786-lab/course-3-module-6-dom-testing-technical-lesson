// Your code here!
function addItem() {
  // Select the <ul> element by its ID
  const list = document.getElementById("item-list");

  // Create a new <li> element
  const newItem = document.createElement("li");

  // Set the text content of the new <li>
  newItem.textContent = "New Item";

  // Append the new <li> to the <ul>
  list.appendChild(newItem);
}

// Add a click event listener to the button with the ID 'add-item' after DOMContentLoaded
// When clicked, it will call the addItem function
document.addEventListener("DOMContentLoaded", () => {
 document.getElementById("add-item").addEventListener("click", addItem);
})