varying vec3 vertexNormal;
varying vec3 cameraViewPosition; //Test

void main(){
    vertexNormal = normalize(normalMatrix * normal);
    cameraViewPosition = normalize(mat3(modelViewMatrix) * cameraPosition); //Test
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 0.90);
}