import { createOrderData, updateDragging } from "./data.js";
import { createOrderHtml, html, updateDraggingHtml } from "./view.js";

//This function handles a click event on the "help" button, toggling the visibility of a help overlay element.
//If the "cancel" button within the overlay is clicked, the overlay is closed.
const handleHelpToggle = (event) => {
  const overlay = html.help.overlay;
  overlay.show();
  if (event.target === html.help.cancel) {
    overlay.close();
  }
};

//This function handles a click event on the "add" button, toggling the visibility of an "add" overlay element. 
//If the "cancel" button within the overlay is clicked, the overlay is closed and a form within it is reset.
const handleAddToggle = (popup) => {
  html.other.add.focus();
  const overlay = html.add.overlay;
  overlay.show();
  if (popup.target === html.add.cancel) {
    overlay.close();
    html.add.form.reset();
  }
};

//This function handles a form submit event within the "add" overlay element. It retrieves the data from the form, creates 
//new data and HTML elements, resets the form, closes the overlay, and appends the new HTML element to the "ordered" data area
const handleAddSubmit = (popup) => {
  popup.preventDefault();
  const overlay = html.add.overlay;
  const formData = new FormData(popup.target);
  const data = Object.fromEntries(formData);
  const newData = createOrderData(data);
  const htmlData = createOrderHtml(newData);
  const append = document.querySelector('[data-area="ordered"]');
  popup.target.reset();
  overlay.close();
  append.appendChild(htmlData);
};

/*This function handles a click event on the "edit" button, toggling the visibility of an "edit" overlay element. 
It also pre-fills the form fieldswith existing data from the element that was clicked, if available. 
If the "cancel" button within the overlay is clicked, the overlay is closed.*/
const handleEditToggle = (popup) => {
  const overlay = html.edit.overlay;
  const cancelBtn = html.edit.cancel;
  const input = html.edit.title;
  const select = html.edit.table;
  const option = html.edit.column;
  popup.target.dataset.id ? overlay.show() : undefined;
  const id = popup.target.dataset.id ? popup.target.dataset.id : undefined;
  input.value = popup.target.dataset.id
    ? popup.target.querySelector(".order__title").textContent
    : undefined;
  select.value = popup.target.dataset.id
    ? popup.target.querySelector(".order__value").textContent
    : undefined;
  let section = document.querySelector(`[data-id="${id}"]`);
  option.value = section ? section.closest("section").dataset.area : "";
  if (popup.target === cancelBtn) {
    overlay.close();
  }
  html.edit.delete.id = id;
};
/*
This code retrieves an element with the class overlay within an element with the class edit and stores it in overlay. 
It then creates a new FormData object from the target of the event (which is likely a form element) and converts it to an object using Object.fromEntries(). 
It then passes this data to a createOrderData function which likely returns a processed version of the data. 
It then passes this processed data to a createOrderHtml function which returns an HTML element representing the data. 
It then finds the first element with a data-area attribute that matches the column property of newData and appends htmlData to it. 
Finally, it resets the form and closes the overlay.
*/
const handleEditSubmit = (popup) => {
    popup.preventDefault();
  const idRemove = html.edit.delete.id;
  const orderDelete = document.querySelector(`[data-id="${idRemove}"]`);
  orderDelete.remove();
  const overlay = html.edit.overlay;
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  const newData = createOrderData(data);
  const htmlData = createOrderHtml(newData);
  const appended = document.querySelector(`[data-area="${newData.column}"]`);
  appended.appendChild(htmlData);
  e.target.reset();
  overlay.close();
};

/*
This creates a function called handleDelete that takes a single parameter popup. It retrieves the id property of an element
with the class delete within an element with the class edit and stores it in idToBeDeleted. It then finds the first element
with a data-id attribute that matches the value of idToBeDeleted and removes it from the DOM. Finally, it closes the overlay.
*/
const handleDelete = () => {
  const idToBeDeleted = html.edit.delete.id;
  const orderToBeDeleted = document.querySelector(
    `[data-id="${idToBeDeleted}"]`
  );
  const overlay = html.edit.overlay;
  orderToBeDeleted.remove();
  overlay.close();
};

/*
These lines add event listeners to various elements on the page that call different functions when certain events are triggered.
 For example, clicking an element with the class cancel within an element with the class add calls the handleAddToggle function. 
 Clicking an element with the class delete within an element with the class edit calls the handleDelete function. 
*/
html.add.cancel.addEventListener("click", handleAddToggle);
html.other.add.addEventListener("click", handleAddToggle); 
html.add.form.addEventListener("submit", handleAddSubmit); 
html.other.grid.addEventListener("click", handleEditToggle); 
html.edit.cancel.addEventListener("click", handleEditToggle); 
html.edit.form.addEventListener("submit", handleEditSubmit); 
html.edit.delete.addEventListener("click", handleDelete); 
html.help.cancel.addEventListener("click", handleHelpToggle); 
html.other.help.addEventListener("click", handleHelpToggle); 

//Dragging events
/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */

/*
This function is called when an element is being dragged over a drop target. It prevents the default 
behavior of the browser and finds the drop target by looking for an element with a data-area attribute 
in the path of the event object. If a drop target is found, it updates some state related to dragging.
*/
const handleDragOver = (event) => {
  event.preventDefault();
  const path = event.path || event.composedPath();
  let column = null;
  for (const element of path) {
    const { area } = element.dataset;
    if (area) {
      column = area;
      break;
    }
  }
  if (!column) return;
  updateDragging({ over: column });
  updateDraggingHtml({ over: column });
};

//This function is called when an element starts to be dragged. It saves a reference to the element being dragged.
let dragged;
const handleDragStart = (e) => {
  dragged = e.target;
};

//This function is called when an element is dropped on a drop target. It appends the dragged element to the drop target.
const handleDragDrop = (e) => {
  e.target.append(dragged);
};

/*This function is called when a drag operation ends. It finds the parent section 
element of the drop target and sets its background color to an empty string.*/
const handleDragEnd = (e) => {
  const background = e.target.closest("section");
  background.style.backgroundColor = "";
};

/**This code sets up event listeners on all elements with a data-area attribute, which are the drop targets. The dragover, 
 * dragstart, drop, and dragend events are handled by the functions defined earlier. 
 * */
for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener("dragover", handleDragOver);
  htmlArea.addEventListener("dragstart", handleDragStart);
  htmlArea.addEventListener("drop", handleDragDrop);
  htmlArea.addEventListener("dragend", handleDragEnd);
}
