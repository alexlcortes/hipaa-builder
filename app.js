var newData = [];

function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  console.log("Data: " + data);
  newData.push(data);
  printnewData();

//How to convert data into integer
//console.log(parseInt(data, 10) + 20);

}

function printnewData() {
  console.log("Array newData: " + newData[0]);
}
