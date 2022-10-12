varying vec3 vertexNormal;
varying vec3 cameraViewPosition; //Test

void main() {
    //float intensity = pow(0.55 - dot(vertexNormal, vec3(0.0, 0.0, 1.0)), 2.0);
    float intensity = pow(0.6 - dot(vertexNormal, cameraViewPosition), 2.0); //Test
    //float intensity = pow(min(0.6 - dot(vertexNormal, cameraViewPosition), 0.9), 2.0);
    //float intensity = pow(0.6-dot(vertexNormal, cameraViewPosition), 2.0);

    gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
}