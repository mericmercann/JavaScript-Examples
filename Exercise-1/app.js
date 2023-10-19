var hak, can ;
var tahmin , sayac=0;
var sayi = Math.floor((Math.random()*10))+1;
can = Number(prompt( "Kaç Kerede Bileceksiniz ? " ));
hak = can ;

console.log(sayi);

while( hak>0 ){
    hak--;
    sayac++;
    tahmin = Number(prompt("Bir Sayı Giriniz : "));

    if( sayi==tahmin ){
        console.log( `Tebrikler ! ${sayac} defada bildiniz !` );
        console.log( `Puanınız : ${100-(100/can)*(sayac-1)}`);
        break;
    }else if( sayi>tahmin ){
        console.log( "Yukarı!" );
    }else{
        console.log( "Aşağı!" );
    }

    if( hak==0 ){
        console.log( "Hakkınız Bitti !!" );
    }
}