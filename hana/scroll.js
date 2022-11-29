var fadeObject1 = document.querySelector('#fadeObject1'),
fadeObject2 = document.querySelector('#fadeObject2'),
fadeObject3 = document.querySelector('#fadeObject3');

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  fadeObject1.style.opacity = ((scrollPos / document.body.offsetHeight) * 2);
  if (Math.ceil(scrollPos/22) < 2){
    fadeObject2.src = "assets/little-apocrypha/little-apocrypha-2.png";
  } else if (Math.ceil(scrollPos/22) > 50){
    fadeObject2.src = "assets/little-apocrypha/little-apocrypha-50.png";
  } else {
    fadeObject2.src = "assets/little-apocrypha/little-apocrypha-" + Math.ceil(scrollPos/22) + ".png";
  }
  fadeObject3.style.opacity = 1 - ((scrollPos / document.body.offsetHeight) * 0.8);
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