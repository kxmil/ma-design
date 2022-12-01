var fadeObject1 = document.querySelector('#fadeObject1'),
fadeObject2 = document.querySelector('#fadeObject2'),
fadeObject3 = document.querySelector('#fadeObject3');

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  fadeObject1.style.opacity = ((scrollPos / document.body.offsetHeight) * 0.5);
  if (Math.ceil(scrollPos/250) < 2){
    fadeObject2.src = "assets/t.png";
  } else if (Math.ceil(scrollPos/250) > 7){
    fadeObject2.src = "assets/t7.png";
  } else {
    fadeObject2.src = "assets/t" + Math.ceil(scrollPos/250) + ".png";
  }
  fadeObject3.style.opacity = 1 - ((scrollPos / document.body.offsetHeight) * 2);
}

document.addEventListener('scroll', (e) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});


var images = [];
function preload() {
    for (var i = 0; i < 7; i++) {
      let url = "assets/t";
      images[i] = new Image();
      if (i === 0){
        url += ".png"
        images[i].src = url;
      } else {
        url += i + ".png"
        images[i].src = url;
      }
    }
}

preload()