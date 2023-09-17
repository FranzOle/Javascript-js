function Halo(){
    document.getElementById('ganti').innerHTML ="Hallo Javascript";
}
function UbahNama(){
    let nama = document.getElementById('nama').value;
    let hasilNama = `Halo Nama Saya adalah ${nama}`;
    document.getElementById('nama2').innerHTML=hasilNama;
}

function FungsiPerkalian() {
    let a = document.getElementById('bil1').value;
    let b = document.getElementById('bil2').value;
    let kali = a * b;
document.getElementById('hasil').innerHTML = "Hasil: " + kali;
}

function FungsiPenjumlahan(){
let angka_a = parseInt( document.getElementById('bil1').value);
let angka_b = parseInt(document.getElementById('bil2').value);
let tambah = angka_a+angka_b;
document.getElementById('hasil').innerHTML = "Hasil :" + tambah;
}

function FungsiPembagian(){
let angka_a = parseInt(document.getElementById('bil1').value);
let angka_b = parseInt(document.getElementById('bil2').value);
let bagi = angka_a / angka_b;
document.getElementById('hasil').innerHTML = "Hasil :" + bagi;
}
function FungsiPengurangan(){
let angka_a = parseInt(document.getElementById('bil1').value);
let angka_b = parseInt(document.getElementById('bil2').value);
let kurang = angka_a - angka_b;
document.getElementById('hasil').innerHTML = "Hasil : "+ kurang;
}

function waktu(){
    document.getElementById('time').innerHTML = Date();
}
let btn = document.getElementById('jam');

btn.onclick = function(){
    document.getElementById('time').innerHTML = Date();
}

let isi = document.getElementById('ketik');
let tampil = document.getElementById('time');
isi.onmouseover = function(){
    tampil.innerHTML = isi.value;
}

let hari = document.getElementById('even');
hari.addEventListener("mouseover", coba);

function coba(){
    alert("coba coba");
}