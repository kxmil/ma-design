var canvas = document.querySelector('#three');


document.onkeydown = checkKey;
function checkKey(e) {
  // HAUT DROITE
  if (e.keyCode == '38') {
    console.log("haut")
  // BAS GAUCHE
  } else if (e.keyCode == '40') {
    console.log("bas")
  // HAUT GAUCHE
  } else if (e.keyCode == '37') {
    console.log("gauche")
  // BAS DROITE
  } else if (e.keyCode == '39') {
    console.log("droite")
  }
}