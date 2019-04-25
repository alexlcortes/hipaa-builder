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
  console.log("The ID is " + data);


  //console.log(mfa);
  //document.getElementById("mf").innerHTML = "Multi-Factor has been added";

//This should print the name under column 3
  document.getElementById('mult').innerHTML=data;


//Trying to select info by checking id of dropped item
//  if (data = "ips"){
//    console.log("ips");
//  } else {
//    console.log(data);
//  }
}
