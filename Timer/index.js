/* creating array*/ 
let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById("displayTime");
/**creating function for creating timer's logic */
function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }
}
/*Now to execute the abov function every second 
we need to add the js function time interval */ 

function watchStart(){
    
}