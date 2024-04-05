import * as THREE from "three";
import { OrbitControls } from 'three';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("canvas4"),
});
// renderer.setClearColor("purple"); // white background color


const canvasWidth = 0.5 * window.innerWidth;
const canvasHeight = 0.5 * window.innerHeight;
renderer.setSize(canvasWidth, canvasHeight);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const cube4 = new THREE.Mesh(geometry, material);

scene.add(cube4);

camera.position.z = 5;

function animatecube4() {
  requestAnimationFrame(animatecube4);
  cube4.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animatecube4();

export { cube4, camera, scene, renderer };
