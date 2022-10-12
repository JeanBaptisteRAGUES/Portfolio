import * as THREE from 'three';

function addStar(scene) {
    //Mettre en dehors de la fonction pour ne pas le refaire 200+ fois ?
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({color: 0xffffff});
    const star = new THREE.Mesh(geometry, material);
  
    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
  
    star.position.set(x, y, z);
    scene.add(star);
};

export function instantiateStars(scene, starsNumber){
    Array(starsNumber).fill().forEach(() => addStar(scene));
}