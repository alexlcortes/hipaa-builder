var total = 0;

function drag_handler(ev) {
 console.log("Drag");
}

function dragstart_handler(ev) {
 console.log("dragStart");
 ev.dataTransfer.setData("text", ev.target.id);
}

function drop_handler(ev) {
 console.log("Drop");
 total+5;
 ev.currentTarget.style.background = "lightyellow";
totalVal()
 ev.preventDefault();
 var data = ev.dataTransfer.getData("text");
 ev.target.appendChild(document.getElementById(data));
}

function totalVal() {
  if (total >= 0) {
    document.getElementById("totals").innerHTML=total;
  }
}

function dragover_handler(ev) {
 console.log("dragOver");
 ev.preventDefault();
}
