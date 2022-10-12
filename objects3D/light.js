import * as THREE from 'three';

export function addAmbientLight(scene){
    const ambientLight = new THREE.AmbientLight(0xcccccc);
    scene.add(ambientLight);
}