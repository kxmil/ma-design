var fadeObject1 = document.querySelector('#fadeObject1');

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  if (Math.ceil(scrollPos/12) < 2){
    fadeObject1.src = "assets/animation/001.png";
  } else if (Math.ceil(scrollPos/12) < 10){
    fadeObject1.src = "assets/animation/00" + Math.ceil(scrollPos/12) + ".png";
  } else if (Math.ceil(scrollPos/12) < 100){
    fadeObject1.src = "assets/animation/0" + Math.ceil(scrollPos/12) + ".png";
  } else if (Math.ceil(scrollPos/12) < 500){
    fadeObject1.src = "assets/animation/" + Math.ceil(scrollPos/12) + ".png";
  } else {
    fadeObject1.src = "assets/animation/500.png";
  }
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