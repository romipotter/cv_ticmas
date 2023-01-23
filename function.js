
document.getElementById('botondark').addEventListener('click', function () {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white"
})

document.getElementById('botonlight').addEventListener('click', function () {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
})

/** 
//Evento titulos

const title2 = document.querySelector(".title2");

title2.addEventListener('onmouseover', function () {
    title2.style.color = "blue";
})

title2.addEventListener('onmouseout', function () {
    title2.style.color = "red";
})


//Evento foto

const foto = document.querySelector(".foto");

foto.addEventListener('onmouseover', function () {
    foto.width = "280px";
    foto.height = "280px";
})

foto.addEventListener('onmouseout', function () {
    foto.width = "220px";
    foto.height = "220px";
})
*/


/** 
document.getElementsByClassName('title2').addEventListener('onmouseover', function() {
    document.getElementsByClassName('title2').style.color = "blue";
});

document.getElementsByClassName('title2').addEventListener('onmouseout', function() {
    document.getElementsByClassName('title2').style.color = "red";
});
*/


/** 
EN HTML: onmouseover="bigimg(this)" onmouseout="normalimg(this)"

EN JS:
function bigimg(x) {
    x.style.height= "275px";
    x.style.width= "275px"
}

function normalimg(x) {
    x.style.height= "220px";
    x.style.width= "220px"
}
*/

