function Halo() {
    alert("Halo");
}

function Waktu() {
    document.getElementById('time').innerHTML = Date();
}
let btnZodiak = document.getElementById('klik');
btnZodiak.addEventListener("mouseover", Zodiac); //perubahan
function Zodiac() {
    let tanggal = parseInt(document.getElementById('tanggal').value);
    let bulan = parseInt(document.getElementById('bulan').value);
    let zodiak = "";

    if (bulan === 1) {
        if (tanggal >= 1 && tanggal <= 17) {
            zodiak = "Virgo";
        } else if (tanggal >= 17 && tanggal <= 31) {
            zodiak = "Aries";
        }
    } else if (bulan === 2) {
        if (tanggal > 0 && tanggal <= 12) {
            zodiak = "Cancer";
        } else if (tanggal >= 12 && tanggal <= 31){
            zodiak = "Gemini";
        }
    } else if (bulan === 3) {
        if (tanggal > 0 && tanggal <= 16) {
            zodiak = "Pisces";
        } else if (tanggal >= 16 && tanggal <31) {
            zodiak = "Taurus";
        }
    } else if (bulan === 4) {
        if (tanggal > 0 && tanggal <= 17) {
            zodiak = "Libra";
        } else if (tanggal >= 17 && tanggal <= 31) {
            zodiak = "Taurus";
        }
    } else if (bulan === 5) {
        if (tanggal > 0 && tanggal <= 26) {
            zodiak = "Leo";
        } else if (tanggal >= 26 && tanggal <31) {
            zodiak = "Capricorn";
        }
    } else if (bulan === 6) {
        if (tanggal > 0 && tanggal <= 18) {
            zodiak = "Saggtarius";
        } else if (tanggal >= 18 && tanggal <31) {
            zodiak = "Scorpio";
        }
    } else if (bulan === 7) {
        if (tanggal > 0 && tanggal <= 21) {
            zodiak = "Leo";
        } else if (tanggal >= 21 && tanggal <=31) {
            zodiak = "Aries";
        }
    } else if (bulan === 8) {
        if (tanggal > 0 && tanggal <= 17) {
            zodiak = "Zeus";
        } else if (tanggal >= 17 && tanggal <31) {
            zodiak = "Pisces";
        }
    } else if (bulan === 9) {
        if (tanggal > 0 && tanggal <= 24) {
            zodiak = "Libra";
        } else if (tanggal >= 24 && tanggal <31) {
            zodiak = "Capricorn";
        }
    } else if (bulan === 10) {
        if (tanggal > 0 && tanggal <= 26) {
            zodiak = "Leo";
        } else if (tanggal >= 26 && tanggal <31) {
            zodiak = "Hierapolis";
        }
    } else if (bulan === 11) {
        if (tanggal > 0 && tanggal <= 19) {
            zodiak = "Scorpio";
        } else if (tanggal >= 19 && tanggal <31) {
            zodiak = "Gemini";
        }
    } else if (bulan === 12) {
        if (tanggal > 0 && tanggal <= 21) {
            zodiak = "Aquarius";
        } else if (tanggal >= 21 && tanggal <31) {
            zodiak = "Gemini";
        }
    } else{
        zodiak = "Tangal Anda tidak valid";
    }
    document.getElementById('zodiac').innerHTML = zodiak;
}

function Perkalian() {
    let a = parseInt(document.getElementById('bil1').value);
    let b = parseInt(document.getElementById('bil2').value);
    let hasil = a * b;
    document.getElementById('hasil').innerHTML = hasil;
}

function Penjumlahan() {
    let a = parseInt(document.getElementById('bil1').value);
    let b = parseInt(document.getElementById('bil2').value);
    let hasil = a + b;
    document.getElementById('hasil').innerHTML = hasil;
}

function Pengurangan() {
    let a = parseInt(document.getElementById('bil1').value);
    let b = parseInt(document.getElementById('bil2').value);
    let hasil = a - b;
    document.getElementById('hasil').innerHTML = hasil;
}

function Pembagian() {
    let a = parseInt(document.getElementById('bil1').value);
    let b = parseInt(document.getElementById('bil2').value);
    if (b === 0) {
        document.getElementById('hasil').innerHTML = "Tidak dapat dibagi oleh 0";
    } else {
        let hasil = a / b;
        document.getElementById('hasil').innerHTML = hasil;
    }
}