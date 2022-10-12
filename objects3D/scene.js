import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export function setSceneCameraRenderer(camX, camY, camZ, isOrbitControl){
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //nebula
    /* camera.rotation.x = 1.16;
    camera.rotation.y = -0.12;
    camera.rotation.z = 0.27; */


    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg'),
        antialias: true
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.set(camX, camY, camZ);
    renderer.render(scene, camera);

    scene.fog = new THREE.FogExp2(0x03544e, 0.001);
    renderer.setClearColor(scene.fog.color);

    const controls = isOrbitControl ? new OrbitControls(camera, renderer.domElement) : null;

    return { 
        scene,
        camera,
        renderer,
        controls
     }
};

export function addSceneBackground(scene, backgroundImg){
    scene.background = new THREE.TextureLoader().load(backgroundImg);
}

export function moveCamera(camera, camX, camY, camZ){
    const t = document.body.getBoundingClientRect().top;

    //camera.position.set(camX + t*(-0.0002), camY + t*(+0.1), camZ + t*(-0.0002));
    camera.position.set(camX, camY, camZ + t*(-0.003));
    //camera.rotation.set(0, 0, 0);
};