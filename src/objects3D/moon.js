import * as THREE from 'three';

export function instantiateMoon(scene, x, y, z){
    const moonTexture = new THREE.TextureLoader().load('public-images/moon.jpg');
    const normalTexture = new THREE.TextureLoader().load('public-images/normal.jpg');

    const moon = new THREE.Mesh(
        new THREE.SphereGeometry(3, 32, 32),
        new THREE.MeshStandardMaterial({
            map: moonTexture,
            normalMap: normalTexture
        })
    );

    moon.position.set(x, y, z);

    scene.add(moon);

    return moon;
}

export function animateMoon(moon, pivot){
    moon.rotateOnWorldAxis(new THREE.Vector3(0,1,0), 0.005);
    pivot.rotateY(0.01);
}