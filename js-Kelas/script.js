alert("Belajar Javascript");
console.log("Javascript");
console.log(2+3);

let a = 2;
let b = 3;
let c = a + b;
console.log(c);

//3+2*4/2/2*3*3+2-5

let x =2;
let y = 3;
let z = 4;
let d = 5;
let plus = y +(x*z/x/x*y*y)+x-d;
console.log(plus);

let xi = 6;
let yi = 5;
if(xi>yi){
    console.log("Ini Benar");
}

else{
    console.log("Salah");
}

let nilai =60;
let kkm = 80;
if (nilai>=kkm){
    console.log("Lulus");
}
else{
    console.log("Tidak Lulus");
}

//zodiac

let bulan =12;
let tanggal = 12;
let zodiak = "Tidak isi";
if(bulan==1){
    if(tanggal>0 && tanggal<20){
        zodiak = "aquarius";
    }
    else if(tanggal>21 && tanggal<32){
        zodiak ="Taurus";
    }
}

if(bulan==2){
    if (tanggal>0 && tanggal<16) {
        zodiak ="Pisces";
    }
    else if (tanggal>=16 && tanggal<29) {
        zodiak="Leo";
    }
}

if (bulan==3) {
    if (tanggal>0 && tanggal<22) {
        zodiak ="Cancer";
    }
    else if(tanggal>=22 && tanggal<32){
        zodiak = "Gemini";
    }
}

if (bulan==4) {
    if (tanggal>0 && tanggal<10) {
        zodiak = "Virgo";
    }
    else if(tanggal >=10 && tanggal <31){
        zodiak = "Aries";
    }
}
if(bulan==5){
    if (tanggal>0 && tanggal<21){
        zodiak = "Leo";
    }
    else if (tanggal >=21 && tanggal <32){
        zodiak = "Kliwon";
    }
}
if(bulan==6){
    if (tanggal>0 && tanggal<23){
        zodiak = "Legi";
    }
    else if (tanggal >=23 && tanggal <32){
        zodiak = "Scorpio";
    }
}

if(bulan==7){
    if (tanggal>0 && tanggal<17){
        zodiak = "Pon";
    }
    else if (tanggal >=17 && tanggal <32){
        zodiak = "Pahing";
    }
}

if(bulan==8){
    if (tanggal>0 && tanggal<21){
        zodiak = "Wageh";
    }
    else if (tanggal >=21 && tanggal <32){
        zodiak = "Kliwon;"
    }
}

if (bulan==9) {
    if (tanggal >0 && tanggal <=25) {
        zodiak = "Pon";
    }
    else if (tanggal > 25 && tanggal <32) {
        zodiak="Libra";
    }
}

if(bulan == 10){
    if(tanggal >0 && tanggal <27){
          zodiak="Kayu";
    }
    else if(tanggal >=27 && tanggal<32){
        zodiak ="Api";
    }
}

if(bulan == 11){
    if (tanggal > 0 && tanggal <=17) {
        zodiak ="Babi";
    }
    else if (tanggal >17 && tanggal <32){
        zodiak ="Ayam";
    }
}

if(bulan == 12){
    if (tanggal >0 && tanggal <=23){
        zodiak = "Zeus";
    }

    else if(tanggal >23 && tanggal <32){
        zodiak = "Odin";
    }
}

console.log(zodiak);