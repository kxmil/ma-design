var fadeObject1 = document.querySelector('#fadeObject1'),
fadeObject2 = document.querySelector('#fadeObject2'),
fadeObject3 = document.querySelector('#fadeObject3');

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  fadeObject1.style.opacity = ((scrollPos / document.body.offsetHeight) * 1.5);
  fadeObject2.style.opacity = 1 - ((scrollPos / document.body.offsetHeight) * 1.3);
  fadeObject3.style.opacity = 1 - ((scrollPos / document.body.offsetHeight) * 1.3);
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