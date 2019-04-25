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
  console.log(data);
  newData.push(data);

//How to convert data into integer
//console.log(parseInt(data, 10) + 20);

}

function printnewData() {
  var pushData = newData.slice(0);
  console.log(pushData);
}
