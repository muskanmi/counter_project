var counte=0;
var btn1 = document.getElementById('dec');
var btn2 = document.getElementById('set');
var btn3 = document.getElementById('inc');
var value = document.getElementById('cou');

function changeColor(counte){
    var color ="";
    if(counte < 0){
        color = "red";
    }
    else if(counte > 0){
        color = "green";
    }
    else{
        color = "rgb(5, 50, 71)";
    }
    return color;
}

function decCounter(){
    counte--;
    value.innerHTML = counte;
    value.style.color = changeColor(counte);
}
function setCounter(){
    counte = 0;
    value.innerHTML=counte;
    value.style.color = changeColor(counte);
}
function incCounter(){
    counte++;
    value.innerHTML = counte;
    value.style.color = changeColor(counte);
}