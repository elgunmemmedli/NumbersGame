
let a ="";
let i = "";

function tap(){
    i=--i;
    let b = document.getElementById("ekran").value;
    if(a == 0){document.getElementById("btnspan").innerHTML = "Salam Səviyyə seç və Rəqəm yaz"}
    else if(b == 0){document.getElementById("btnspan").innerHTML = "Rəqəm Daxil Et"}
    else if (b == a){document.getElementById("btnspan").innerHTML = "Təbriklər siz qazandınız"}
    else if (i == 0){document.getElementById("btnspan").innerHTML = "Təssüf Siz Uduzdunuz  &#9785; <br/> Təkrar cəhd et &#9759;"}
    else if(b > a){document.getElementById("btnspan").innerHTML = `Daxil edilen  boyukdur ${i}cehd qaldi`}
    else{document.getElementById("btnspan").innerHTML = `Daxil edilen  kicikdir ${i}cehd qaldi`}
    if(i ==0){document.getElementById("cavab").disabled = true}
    else{document.getElementById("cavab").disabled = false }
}

function cixart1(){
    document.getElementById("sadespan"). innerHTML = "Sadə Variant: <br/> 1- den 10 - a qədər rəqəm seç <br/> 3 Şansın var";
    i= document.getElementById("sade").value;
     a = Math.floor(Math.random() *10);
}

function cixart2(){
    document.getElementById("aqirspan"). innerHTML = "Ağır Variant: <br/> 1- den 25 - ə qədər rəqəm seç <br/> 5 Şansın var";
    i= document.getElementById("aqir").value;
    a = Math.floor(Math.random() *25);
}
