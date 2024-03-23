import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

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

const fontLoader = new FontLoader();
fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
  const textGeometry = new TextGeometry('Cube rotation', {
    font: font,
    size: 0.5,
    height: 0.2,
  });
  const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);
  textMesh.position.set(-2, 1, -1); // Set the position of the text
  scene.add(textMesh); // Add the text to the scene
});

function animateCube1() {
  requestAnimationFrame(animateCube1);
  cube1.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animateCube1();

export { cube1, camera, scene, renderer };
