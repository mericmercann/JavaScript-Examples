var hesapA ={
    ad : 'Meriç Mercan',
    hesapNo : '43213433',
    bakiye : 3000 ,
    ekBakiye : 5000
}
var hesapB={
    ad : 'Ahmet Fatih',
    hesapNo: '21355667',
    bakiye: 1500,
    ekBakiye : 4000,
}
var hesapC = {
    ad: 'Fatih Mehmet',
    hesapNo: '14532053',
    bakiye: 14000,
    ekBakiye: 15000
}

function paraCek ( hesap,miktar ) {
    console.log(`Merhaba ${hesap.ad}`);

    if( hesap.bakiye>=miktar ){
        hesap.bakiye -= miktar;
        console.log( "Paranızı Alabilirsiniz!" );
    }else{
        var toplam = hesap.bakiye+hesap.ekBakiye;

        if( toplam>=miktar ){
            if(confirm("Ek hesabınızı kullanmak istermisiniz ? ")){
                console.log( "Ek Hesabınızda Paranızı Alabilirsiniz !" );
                
                var bakiye = hesap.bakiye ;
                var ekBakiye = miktar-bakiye ;
                hesap.bakiye = 0 ;
                hesap.ekBakiye -= hesap.ekBakiye ;
            }else{
                console.log( `${hesap.hesapNo} nolu hesabınızda ${miktar} ₺ bulunmamaktadır !` );
            }
        }else{
            console.log( "Üzgünüz Bakiyeniz Yetersiz !!!" );
        }
    }
}

paraCek(hesapC,14000);
paraCek(hesapC,8000);