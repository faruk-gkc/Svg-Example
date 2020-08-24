
function getRandInt(min,max){
    
    return Math.floor(Math.random()*(max-min+1)+min);
    // Belirlediğimiz başlangıç ve bitiş değeri arasında bir tamsayı döndüren Fonksiyon..
}

function play(){
    var changeTo; // Değişecek olan yükseklik değerini tutan değişken
    var i=1; // Bar id lerini çekmek için kullandığımız değişken
    var condition = getRandInt(1,5);

    /* İlk rastgele sayıyı atıyoruz. Buna göre bu sayı 1 gelirse hiçbir koşul olmadan yükseklik 100 ve 300 
    değerleri arasında bir sayı alacak.
    */


    while(i<=8){ // 8 Rect elementi olduğundan bunları while içerisinde göstereceğiz. 
        if(condition == 1){
            changeTo = getRandInt(100,300);
        }
        // İlk rastgele sayı 1 geldiğinde 100-300 arası rastgele sayıyı getir.
        else{
            if(i == 1 || i == 8 ){
                changeTo = getRandInt(30,80);
            }
            else if(i == 2 || i == 7 ){
                changeTo = getRandInt(60,100);
            }
            else if(i == 3 || i == 6 ){
                changeTo = getRandInt(100,250);
            }
            else if(i == 4 || i == 5 ){
                changeTo = getRandInt(150,300);
            }
        }
    

            document.getElementById("bar"+i).height.baseVal.value = changeTo; 
            //baseVal.value ile Svg height değerini changeTo içerisine attık.
            //baseVal --> SVG öğesi olup olmadığını algılar. 

            document.getElementById("bar"+i).y.baseVal.value = (150 - changeTo/2);
            //Elementiin y değişkenini her zaman ortada olacak şekilde konumlandırdık.
            i++;
    }
}
// play() fonksiyonu ,asıl animasyonu yöneten fonksiyonumuz olacak, bu fonksiyonu her çağırdığımzda,
// svg rect elementleri farklı boyutlar alacak.

window.onload = function(){
setInterval(play,300);

// setInterval ile play metodu sayfa yüklemesi tamamlandığında 300ms de bir çağırıyoruz.
}