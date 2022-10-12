import * as THREE from 'three';

export function instantiateTorus(scene, radius, tube, radialSegments, tubularSegments){
    //10, 3, 16, 100
    const geometry = new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments);
    //const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true}); //Matériau de test qui n'est pas sensible à la lumière
    const material = new THREE.MeshStandardMaterial({color: 0xFF6347});
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    return torus;
}
