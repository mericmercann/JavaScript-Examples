let adınız = prompt( "Adınızı Giriniz :" );
document.getElementById( "myName" ).innerHTML = adınız ;

const weekday = [ "Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi" ];

function showTime() {
const today = new Date();
let Day = weekday[today.getDay()];
let Hours = today.getHours();
let Minute = today.getMinutes();
let Second = today.getSeconds();
Minute = checkTime( Minute );
Second = checkTime( Second );
document.getElementById( 'myClock' ).innerHTML =  Hours + ":" + Minute + ":" + Second + " - " + Day;
setTimeout( showTime,1000 );
}

function checkTime( i ) {
if ( i<10 ) {
    i = "0"+i
}
return i;
}
showTime()