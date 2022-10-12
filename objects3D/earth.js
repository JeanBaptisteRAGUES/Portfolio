import * as THREE from 'three';
import vertexShader from '../shaders/vertex.glsl'; //npm install --save-dev vite-plugin-string
import fragmentShader from '../shaders/fragment.glsl';
import atmosphereVertexShader from '../shaders/atmosphereVertex.glsl';
import atmosphereFragmentShader from '../shaders/atmosphereFragment.glsl';

export function instantiateEarth(scene, x, y, z){
    const earthTexture = new THREE.TextureLoader().load('../images/earth2.jpg');

    /* const earth = new THREE.Mesh(
        new THREE.SphereGeometry(12, 32, 32),
        new THREE.MeshStandardMaterial({
            map: earthTexture,
        })
    ); */

    const earth = new THREE.Mesh(
        new THREE.SphereGeometry(12, 32, 32),
        new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                globeTexture: {
                    value: earthTexture
                }
            }
        })
    );

    earth.position.set(x, y, z);
    scene.add(earth);

    const atmosphere = new THREE.Mesh(
        new THREE.SphereGeometry(12, 32, 32),
        new THREE.ShaderMaterial({
            vertexShader: atmosphereVertexShader,
            fragmentShader: 
                atmosphereFragmentShader,
                blending: THREE.AdditiveBlending,
                side: THREE.BackSide
            ,
            transparent: true
        })
    );
    atmosphere.scale.set(1.1, 1.1, 1.1);
    atmosphere.position.set(x, y, z);
    scene.add(atmosphere);

    return earth;
}

export function animateEarth(earth){
    earth.rotateOnWorldAxis(new THREE.Vector3(0,1,0), 0.002);
}