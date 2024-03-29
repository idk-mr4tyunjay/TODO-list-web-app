import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("canvas3"),
});

// renderer.setClearColor("green");

const canvasWidth = 0.5 * window.innerWidth;
const canvasHeight = 0.5 * window.innerHeight;
renderer.setSize(canvasWidth, canvasHeight);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const cube3 = new THREE.Mesh(geometry, material);

scene.add(cube3);

camera.position.z = 5;

function animateCube3() {
  requestAnimationFrame(animateCube3);
  cube3.rotation.z += 0.01;
  cube3.rotation.x += 0.01;
  renderer.render(scene, camera);
}

animateCube3();

export { cube3, camera, scene, renderer };
