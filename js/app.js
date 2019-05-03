//Allow for element to be dragged
function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

//Allot for element to drop.
function allowDrop(event) {
  event.preventDefault();
}

//When element is dropped do this:
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  console.log("Data/id: " + data);
}
