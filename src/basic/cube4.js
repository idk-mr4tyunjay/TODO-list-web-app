import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas4') });

const canvasWidth = 0.5 * window.innerWidth;
const canvasHeight = 0.5 * window.innerHeight;
renderer.setSize(canvasWidth, canvasHeight);

// Add ambient light to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Add directional light to the scene
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 }); // Use MeshPhongMaterial for lighting
const cube4 = new THREE.Mesh(geometry, material);

scene.add(cube4);

camera.position.z = 5;

const fontLoader = new FontLoader();
fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
  const textGeometry = new TextGeometry('Lighting', {
    font: font,
    size: 0.5,
    depth: 0.2, // Use depth instead of height
  });
  const textMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff }); // Use MeshPhongMaterial for lighting
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);
  textMesh.position.set(-2, 1, -1); // Set the position of the text
  scene.add(textMesh); // Add the text to the scene
});

function animatecube4() {
  requestAnimationFrame(animatecube4);
  cube4.rotation.y += 0.01;
  cube4.rotation.x += 0.01; // Rotate the cube along the x-axis as well
  renderer.render(scene, camera);
}

animatecube4();

export { cube4, camera, scene, renderer };
