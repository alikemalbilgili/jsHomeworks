let name = 
 document.querySelector("#myName").innerHTML = prompt("Please enter your name:"); 
 const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function showTime(){
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " " + weekday[today.getDay()];
document.getElementById("myClock").innerHTML= time;
let t = setTimeout(function(){ showTime() }, 1000);
 }
 showTime()