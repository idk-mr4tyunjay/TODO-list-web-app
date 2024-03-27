import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas1') });

const canvasWidth = 0.5 * window.innerWidth;
const canvasHeight = 0.5 * window.innerHeight;
renderer.setSize(canvasWidth, canvasHeight);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube1 = new THREE.Mesh(geometry, material);

scene.add(cube1);

camera.position.z = 5;

function animateCube1() {
  requestAnimationFrame(animateCube1);
  cube1.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animateCube1();

export { cube1, camera, scene, renderer };
