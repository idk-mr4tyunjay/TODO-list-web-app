import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  80,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const canvas = document.getElementById("canvas2");
const renderer = new THREE.WebGLRenderer({ canvas });

// Calculate the actual size based on the window size and the desired percentage
const canvasWidth = 0.5 * window.innerWidth;
const canvasHeight = 0.5 * window.innerHeight;
renderer.setSize(canvasWidth, canvasHeight);

const geometry = new THREE.BoxGeometry(1, 1, 0.4); // Create a cube with dimensions
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube2 = new THREE.Mesh(geometry, material);
scene.add(cube2);

camera.position.z = 5;

let speedX = 0.03;
let speedY = 0.03;

function animate() {
  requestAnimationFrame(animate);

  cube2.position.x += speedX;
  cube2.position.y += speedY;

  if (cube2.position.x < -7 || cube2.position.x > 7) {
    speedX = -speedX;
  }
  if (cube2.position.y < -3.2 || cube2.position.y > 3.2) {
    speedY = -speedY;
  }

  renderer.render(scene, camera);
}

animate();

export { cube2, camera, scene, renderer };
