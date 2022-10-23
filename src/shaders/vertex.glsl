varying vec2 vertexUV;
varying vec3 vertexNormal;
varying vec3 cameraViewPosition; //Test

void main(){
    vertexUV = uv;
    vertexNormal = normalize(normalMatrix * normal);
    cameraViewPosition = normalize(mat3(modelViewMatrix) * cameraPosition); //Test
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}