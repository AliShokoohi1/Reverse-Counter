let count = 120;

var start = function(){
   interval = setInterval(function(){
   count-=1
   let seconds = count;
   let min = 60;
   let minute = Math.floor(seconds/min);
   let sec = seconds % min ;
   let time = minute+":"+sec;
   
   document.getElementById('time').innerHTML = time;
   document.getElementById('description').innerHTML = 'clock is ticking⏲️';

   document.getElementById('start').disabled = true
   document.getElementById('pause').disabled = false
   document.getElementById('reset').disabled = false
   
  },1000)

}
var pause = function(){
    clearInterval(interval);
    document.getElementById('description').innerHTML = 'timer paused!😕';
    document.getElementById('start').innerHTML = 'continue';
    document.getElementById('start').disabled = false
    document.getElementById('pause').disabled = true
}

var reset = function(){
    clearInterval(interval);
    count = 120;
    document.getElementById('description').innerHTML = 'i can do this forever!👻';
    document.getElementById('start').innerHTML = 'start';
    document.getElementById('time').innerHTML = '2:00'
    document.getElementById('reset').disabled = true 
}
    
var load = function() {
    document.getElementById('description').innerHTML = "let's Go 🙂";
}