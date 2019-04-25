var mfa = "Multi-Factor Authentication";


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

//Wanted to check what is data
console.log(data.length);

//if (data ) {
//console.log("You got IPS!");
//} else {
//console.log("You got something else...");
//}

//This should print the name under column 3
//document.getElementById('ips').innerHTML=data;

}
