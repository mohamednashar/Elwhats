var radio1 = document.getElementById("radio1");
var radio2 = document.getElementById("radio2");
var g = document.getElementById("g");
var gg = document.getElementById("gg");
var ggg = document.getElementById("ggg");


radio1.addEventListener("click", function () {
    g.innerHTML="$5.5";
    gg.innerHTML="$9.5";
    ggg.innerHTML="$19";
}); 

radio2.addEventListener("click", function () {
    g.innerHTML="$60";
    gg.innerHTML="$104";
    ggg.innerHTML="$209";
}); 