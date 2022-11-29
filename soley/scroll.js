var fadeObject1 = document.querySelector('#fadeObject1');

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  fadeObject1.style.opacity = 1 - ((scrollPos / document.body.offsetHeight) * 2);
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