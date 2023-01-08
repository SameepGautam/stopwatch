
let hr=0;
let min=0;
let sec=0;
let count=0

let timer=false;

function start(){
timer=true;   //when somebody clicks on here the time should start and stopwatch should run
stopwatch();
}


function stop(){
timer=false;
}


function reset(){
    timer=false;
    hr=0;
    min=0;
    sec=0;
    count=0;
    
document.getElementById("sec").innerHTML=sec;
document.getElementById("min").innerHTML=min;
document.getElementById("hr").innerHTML=hr;
document.getElementById("count").innerHTML=count;
}




function stopwatch(){
if (timer==true){

count=count+1;
if (count==100){
    sec=sec+1;
    count=0;
}
if(sec==60){
    min=min+1;
    sec=0;
}
if(min==60){
    hr=hr+1;
    min=0;
    sec=0;
    count=0;
}
document.getElementById("count").innerHTML=count;
document.getElementById("sec").innerHTML=sec;
document.getElementById("min").innerHTML=min;
document.getElementById("hr").innerHTML=hr;
    setTimeout("stopwatch()" ,10)
}
}