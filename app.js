let newData = [];
let itemPrice = 0;

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
  newData.push(data);
  itemPrice++;
}

function drop2(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  console.log("Data/id: " + data);

  // Send data to array
  newData.push(data);

  //add a number to itemPrice varaible
  itemPrice = itemPrice + 5;

}

//function addPrice() {
  //console.log("Added ")
//}

//Should produce NaN
console.log(newData);

//Converts data into integer
function cal1() {
  //addPrice();
  console.log(newData);
  console.log("Item Price: " + itemPrice);
  var parsed = parseInt(newData);
  console.log(parsed);
}
