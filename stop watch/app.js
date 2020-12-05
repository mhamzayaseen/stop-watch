var hour = 0
var min = 0
var sec = 0
var msec = 0

var hourHeading = document.getElementById('hour')
var minHeading = document.getElementById('min')
var secHeading = document.getElementById('sec')
var msecHeading = document.getElementById('msec')
var interval;

function timer(){
msec++
msecHeading.innerHTML=msec
if(msec>=100){
    sec++
    secHeading.innerHTML=sec
    msec=0}

else if(sec>=60){
    min++
    sec=0
    minHeading.innerHTML=min
    
}
else if(min>=60){
    hour++
    hourHeading.innerHTML=hour
}
}
function start(){
interval=setInterval( timer , 10)  
    
}
function stop(){
    clearInterval(interval);
}
function reset(){
msec=0
sec=0
    min=0
hour=0
msecHeading.innerHTML=msec
secHeading.innerHTML=sec
minHeading.innerHTML=min
hourHeading.innerHTML=hour
stop()
}


