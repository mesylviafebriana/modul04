var heightmesyl = 165;
var heightuki = 170;
var heightkris = 150;
var agemesyl = 37;
var ageuki = 24;
var agekris = 18;

function hitungskor(tinggi,umur)
{
    var menang = tinggi + 5 * umur;
    return menang;
}

var nilmesyl= hitungskor(heightmesyl,agemesyl);
var niluki = hitungskor(heightuki,ageuki);
var nilkris = hitungskor(heightkris,agekris);

console.log(nilmesyl);
console.log(niluki);
console.log(nilkris);

if(niluki > nilmesyl && niluki > nilkris)
console.log('Uki menang dengan skor'+niluki);

else if(nilkris > niluki && nilkris > nilmesyl)
console.log('Kris Menang dengan skor' +nilkris);

else
    {
        console.log('Mesyl Menang dengan skor' +nilmesyl);
    }


