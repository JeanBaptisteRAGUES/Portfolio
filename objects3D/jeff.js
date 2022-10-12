import * as THREE from 'three';

export function instantiateJeff(scene){
    const jeffTexture = new THREE.TextureLoader().load('../images/jeff.png'); //N'instancier qu'une fois le TextureLoader()
    const jeff = new THREE.Mesh(
        new THREE.BoxGeometry(3,3,3),
        new THREE.MeshBasicMaterial({ map: jeffTexture })
    );
    
    scene.add(jeff);

    return jeff;
}