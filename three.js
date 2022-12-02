// Three.js - Load .OBJ and .MTL file
// from https://threejsfundamentals.org/threejs/threejs-load-obj-materials.html


  'use strict';

/* global THREE */

function main() {
  const canvas = document.querySelector('#three');
  const renderer = new THREE.WebGLRenderer({canvas,alpha: true });
  renderer.setClearColor( 0x000000, 0 ); // the default

  const fov = 30;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(10, 10, 20);

  const controls = new THREE.OrbitControls(camera, canvas);
  controls.target.set(0, 5, 0);
  controls.update();

  const scene = new THREE.Scene();

  scene.position.y = 5

  {
    const skyColor = 0xB1E1FF;  // light blue
    const groundColor = 0xB97A20;  // brownish orange
    const intensity = 1;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    scene.add(light);
  }

  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(5, 10, 2);
    scene.add(light);
    scene.add(light.target);
  }

  {
    const objLoader = new THREE.OBJLoader2();
    objLoader.loadMtl('assets/cabinet.mtl', null, (materials) => {
      objLoader.setMaterials(materials);
      objLoader.load('assets/cabinet.obj', (event) => {
        const root = event.detail.loaderRootNode;
        scene.add(root);
      });
    });
  }

  // SCROLL INTERACTION
  let lastKnownScrollPosition = 0;
  let ticking = false;

  function doSomething(scrollPos) {
    scene.rotation.y = scrollPos / 150
    camera.updateProjectionMatrix();
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

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render() {

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);
    scene.rotation.y += 0.003

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();