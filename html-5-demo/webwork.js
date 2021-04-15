var i;

addEventListener("message", receiveNumber, false);

function timedCount()
{
  i=i+1;
  postMessage(i);
  setTimeout("timedCount()",500);
}

function receiveNumber(event) {
    i = Number(event.data);
    timedCount(); 
}