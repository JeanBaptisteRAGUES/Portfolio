import * as THREE from 'three';

export function instantiateNebula(scene, cloudsNumber){
    let cloudParticles = [];
    const cloudTexture = new THREE.TextureLoader().load('../images/smoke.png');
    const nebulaY = 200;
    const nebulaZ = 200; //400-500 -> -100

    for(let p=0; p<cloudsNumber; p++){
        let cloud = new THREE.Mesh(
            new THREE.PlaneGeometry(500, 500),
            new THREE.MeshLambertMaterial({
            map:cloudTexture,
            transparent:true
            })
        );

        cloud.position.set(
            Math.random()*400 -200,
            nebulaY,
            Math.random()*nebulaZ-500
        );

        cloud.rotation.set(0, 0, Math.random()*2*Math.PI);
        cloud.material.opacity = 0.55;
        cloudParticles.push(cloud);
        scene.add(cloud);
    }

    let directionalLight = new THREE.DirectionalLight(0xff8c19, 0.2);
    directionalLight.position.set(0,0,1);
    scene.add(directionalLight);

    let orangeLight = new THREE.PointLight(0xcc6600, 10, 300, 1.7);
    orangeLight.position.set(200, nebulaY-30, nebulaZ - 520);
    scene.add(orangeLight);
    let redLight = new THREE.PointLight(0xd8547e, 15, 300, 1.7);
    redLight.position.set(100, nebulaY-30, nebulaZ - 520);
    scene.add(redLight);
    let blueLight = new THREE.PointLight(0x3677ac, 10, 300, 1.7);
    blueLight.position.set(-50, nebulaY-30, nebulaZ - 500);
    scene.add(blueLight);

    //Lights helpers
    /* const dirLightHelper = new THREE.DirectionalLightHelper(directionalLight, 20);
    scene.add(dirLightHelper); */
    const orangeLightHelper = new THREE.PointLightHelper(orangeLight, 20);
    scene.add(orangeLightHelper);
    const redLightHelper = new THREE.PointLightHelper(redLight, 20);
    scene.add(redLightHelper);
    const blueLightHelper = new THREE.PointLightHelper(blueLight, 20);
    scene.add(blueLightHelper);

    return cloudParticles;
};

export function animateNebula(cloudParticles){
    cloudParticles.forEach(particle => {
        particle.rotation.z -= 0.001;
    });
}