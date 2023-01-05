function digitalClock(){
    let date=new Date()
    let hours= date.getHours();
    let minutes= date.getMinutes();
    let second= date.getSeconds();
    let timeFormat='AM';

    if (hours===0) {
       hours=12
    }
    if(hours>12){
        hours=hours-12
        timeFormat='PM'
    }
    if(hours<10){
        hours='0'+hours
    }
    if(minutes<10){
        minutes='0'+minutes
    }
    if(second<10){
        second='0'+second
    }
    let finalTime=`${hours}:${minutes}:${second}`
     document.getElementById('time').innerText=finalTime
     document.querySelector('small').innerHTML=timeFormat
     setInterval(digitalClock,1000)
}
digitalClock()
