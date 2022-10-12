import * as THREE from 'three';

export function instantiateSun(scene, x, y, z){
    /* const moonTexture = new THREE.TextureLoader().load('../images/moon.jpg');
    const normalTexture = new THREE.TextureLoader().load('../images/normal.jpg'); */

    const sun = new THREE.Mesh(
        new THREE.SphereGeometry(32, 32, 32),
        new THREE.MeshBasicMaterial({
            color: 0x66dddd33
        }
        )
    );

    sun.position.set(x, y, z);

    scene.add(sun);

    return sun;
}

export function animateSun(sun){
    sun.rotateOnWorldAxis(new THREE.Vector3(0,1,0), 0.005);
}