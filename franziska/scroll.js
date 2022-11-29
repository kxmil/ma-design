var fadeObject1 = document.querySelector('#fadeObject1'),
fadeObject2 = document.querySelector('#fadeObject2'),
fadeObject3 = document.querySelector('#fadeObject3');

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  fadeObject1.style.opacity = ((scrollPos / document.body.offsetHeight) * 2);
  fadeObject2.style.opacity = 1 - ((scrollPos / document.body.offsetHeight) * 20);
  fadeObject3.style.opacity = 1 - ((scrollPos / document.body.offsetHeight) * 5);
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

var h = document.querySelector('h1'),
f = document.querySelector('#font');

setInterval(function(){
  setTimeout(function(){
    f.style.display = "block"
    h.style.display = "none"
  },1400)
  setTimeout(function(){
    h.style.display = "block"
    f.style.display = "none"
  },1600)
  setTimeout(function(){
    f.style.display = "block"
    h.style.display = "none"
  },2000)
  setTimeout(function(){
    h.style.display = "block"
    f.style.display = "none"
  },2500)
},3000)