var soruSayisi = 0;
var kutuSayisi = 5;
var resimID = "";
var kutuID = "";
function tasinmaDurumu(e) {
    e.preventDefault();
}
function tut(e) {
    e.dataTransfer.setData("text", e.target.id);
    resimID = e.target.id;
}
function birak(e) {
    e.preventDefault();
    window.document.getElementById(e.target.id).innerHTML = "";
    var tasinanResimID = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(tasinanResimID));
    var kontrolMetni = "kutu" + resimID;
    if (e.target.id == kontrolMetni) {
        soruSayisi++;
    }
    if (soruSayisi == kutuSayisi) {
        window.document.getElementById("sonuc").innerHTML = "<h1>Tebrikler</h1>";
    }
}