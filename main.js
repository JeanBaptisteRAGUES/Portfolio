import './style.css';
import * as THREE from 'three';
import { BlendFunction, BloomEffect, EffectComposer, EffectPass, KernelSize, RenderPass, TextureEffect } from 'postprocessing';
import { instantiateTorus } from './objects3D/torus';
import { instantiateJeff } from './objects3D/jeff';
import { animateEarth, instantiateEarth } from './objects3D/earth';
import { animateMoon, instantiateMoon } from './objects3D/moon';
import { instantiateStars } from './objects3D/stars';
import { animateNebula, instantiateNebula } from './objects3D/nebula';
import { animateSun, instantiateSun } from './objects3D/sun';
import { addAmbientLight } from './objects3D/light';
import { setSceneCameraRenderer, addSceneBackground , moveCamera } from './objects3D/scene';
import { Texture } from 'three';

//Offset caméra
const camX = 0;
//const camY = 450;
const camY = 5;
//const camZ = 150;
const camZ = 40;

//Création de la scène minimale
const {camera, scene, renderer, controls} = setSceneCameraRenderer(camX, camY, camZ, false);
addSceneBackground(scene, './images/space.jpg');

//Ajout d'une lumière ambiante de couleur blanche
addAmbientLight(scene);

//Helpers
//const lightHelper = new THREE.PointLightHelper(pointLight);
/* const gridHelper = new THREE.GridHelper(2000, 50);
scene.add(gridHelper); */

//Ajouts des astres/objets
/* const torus = instantiateTorus(scene, 10, 3, 16, 100);
const jeff = instantiateJeff(scene); */
const earth = instantiateEarth(scene, 0, 0, 0);
const moon = instantiateMoon(scene, -10, 10, 30);
const pivot = new THREE.Group();
pivot.position.set(0, 0, 0);
earth.add(pivot);
pivot.add(moon);
//const sun = instantiateSun(scene, -500, 0, -500);
/* const sunEarthPivot = new THREE.Group();
sunEarthPivot.position.set(-500, 0, -500);
sun.add(sunEarthPivot);
sunEarthPivot.add(earth); */

//instantiateStars(scene, 200);

//Nebula
//let cloudParticles = instantiateNebula(scene, 50);

//Animation des projets
const observer = new IntersectionObserver(entries => {
  //Boucle sur toutes les entrées
  entries.forEach(entry => {
    const projectId = entry.target.firstElementChild.firstElementChild.id;

    if (entry.isIntersecting && (projectId == "project1" || projectId == "project3")){
      //Ajout de la classe permettant l'animation
      entry.target.classList.add('slideLeft-animation');
    }
    if (entry.isIntersecting && (projectId == "project2" || projectId == "project4")){
      //Ajout de la classe permettant l'animation
      entry.target.classList.add('slideRight-animation');
    }
  });
});

/* observer.observe(document.querySelectorAll('.projectCard')); */
document.querySelectorAll('.projectCard').forEach(element => {
  observer.observe(element);
})

//PostProcessing
const bloomEffect = new BloomEffect({
  blendFunction: BlendFunction.COLOR_DODGE,
  kernelSize: KernelSize.SMALL,
  luminanceThreshold: 0.3,
  luminanceSmoothing: 0.75
});
bloomEffect.blendMode.opacity.value = 1.5;

let effectPass = new EffectPass(
  camera, 
  bloomEffect,
);
effectPass.renderToScreen = true;

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(effectPass);


//Intéractivité
document.body.onscroll = () => moveCamera(camera, camX, camY, camZ);

//Responsive
function onWindowResize(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize, false);

//Rafraichissement à chaque frame
function animate() {
  requestAnimationFrame(animate);

  //animateNebula(cloudParticles);

  animateMoon(moon, pivot);
  animateEarth(earth);

  //sunEarthPivot.rotateY(0.003);

  controls ? controls.update() : null;

  renderer.render(scene, camera);
  //composer.render(0.1);
};

animate();

