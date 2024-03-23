import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas5') });

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
renderer.setSize(canvasWidth, canvasHeight);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube5 = new THREE.Mesh(geometry, material);

scene.add(cube5);

camera.position.z = 5;

const fontLoader = new FontLoader();
fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
  const textGeometry = new TextGeometry('canvas5', {
    font: font,
    size: 0.5,
    height: 0.2,
  });
  const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);
  textMesh.position.set(-2, 1, -1); // Set the position of the text
  scene.add(textMesh); // Add the text to the scene
});

function animatecube5() {
  requestAnimationFrame(animatecube5);
  cube5.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animatecube5();

export { cube5, camera, scene, renderer };
