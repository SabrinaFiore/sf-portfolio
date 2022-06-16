varying float vNoise;
varying vec2 vUv;
uniform sampler2D imageTexture;
uniform float time;

void main() {
  vec3 color1 = vec3(0.2078, 0.0, 0.0);
  vec3 color2 = vec3(0.8784, 0.2314, 0.2314);
  vec3 finalColor = mix(color1, color2, 0.5*(vNoise + 1.));

  vec2 newUV = vUv;

  // newUV = vec2(newUV.x, newUV.y + 0.01*sin(newUV.x*10. + time));

  vec4 flowerView = texture2D(imageTexture, newUV);

  gl_FragColor = vec4(finalColor, 2.);
  // gl_FragColor = vec4(vUv, 0., 1.);
  gl_FragColor = flowerView;
  // gl_FragColor = vec4(vNoise);
}
