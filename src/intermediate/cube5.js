import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

// Create a scene
const scene = new THREE.Scene();
// Assuming 'scene' is your Three.js scene
scene.background = new THREE.Color('grey'); // Set background color to black

// Create a camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Create a renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("canvas5"),
});

// Set the size of the renderer
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
renderer.setSize(canvasWidth, canvasHeight);

// Add ambient light to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);

// Add directional light to the scene
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(3, 3, 3);
scene.add(directionalLight);

// Create a cube and add it to the scene
// Create a cube and add it to the scene with MeshStandardMaterial
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 'red' });
const cube5 = new THREE.Mesh(geometry, material);
scene.add(cube5);


// Configure renderer for physically correct lighting
renderer.physicallyCorrectLights = true;
renderer.outputEncoding = THREE.sRGBEncoding;


// Position the camera
camera.position.z = 5;

// Create an instance of OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false; // Disable zooming


// Load a font for the text
const fontLoader = new FontLoader();
fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
  const textGeometry = new TextGeometry('Orbit Control', {
    font: font,
    size: 0.5,
    depth: 0.2, // Use depth instead of height
  });
  const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);
  textMesh.position.set(-2, 1, -1); // Set the position of the text
  scene.add(textMesh); // Add the text to the scene
});

// Function to animate the scene
function animatecube5() {
  requestAnimationFrame(animatecube5);
  renderer.render(scene, camera);
  controls.update(); // Update controls in each frame
}

// Call the animate function
animatecube5();

export { cube5, camera, scene, renderer };
