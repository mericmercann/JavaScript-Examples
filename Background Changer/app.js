const body = document.querySelector( "body" );
const button = document.querySelector( "button" );
const colors = [ "black", "white", "yellow", "blue", "purple", "green", "red", "orange", "pink" ];

button.addEventListener( "click",changeBackground );

let order = 0;
function changeBackground() {

    //a random color
    //const randomNumber = Math.floor(Math.random()*colors.length);
    //const chosenColor = colors[randomNumber];
    //console.log( randomNumber,chosenColor );
    //body.style.backgroundColor = chosenColor;


    //choose background color in order
    if ( order==7 ) order = 0;
    const chosenColor = colors[order];
    order++;
    body.style.backgroundColor = chosenColor;
}