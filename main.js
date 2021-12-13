window.onload = function(){
    const sec = document.getElementById('sec');
    const ten = document.getElementById('tens');
    const start = document.getElementById('button-start');
    const stop = document.getElementById('button-stop');
    const reset = document.getElementById('button-reset');
    let seconds = 00, tens = 00, Interval;

    start.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10); 
        console.log('[StartOnClick]: click');
    }
    stop.onclick = function(){
        clearInterval(Interval);
        console.log('[StopOnClick]: click');
    }
    reset.onclick = function(){
        clearInterval(Interval);
        seconds = '00';
        tens = '00';
        sec.innerHTML = seconds;
        ten.innerHTML = tens;
        console.log('[ResetOnClick]: click');
    }
    function startTimer(){
        tens++;
        if(tens <= 9){
            ten.innerHTML = '0' + tens;
        }
        if(tens > 9){
            ten.innerHTML = tens;
        }
        if(tens > 99){
            console.log('[StartTimer]: seconds');
            tens = 00;
            seconds++;
            ten.innerHTML = '0' + tens;
            sec.innerHTML = '0' + seconds;
        }
        if (seconds > 9){
            sec.innerHTML = seconds;
        }
    }

    console.log('[onLoad]: On')
}