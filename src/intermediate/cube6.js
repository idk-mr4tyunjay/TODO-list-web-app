import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas6') });

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
renderer.setSize(canvasWidth, canvasHeight);

// Create a sphere geometry
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);

camera.position.z = 5;

// Load HDR environment map
export const setSkySphere = (scene, imagePath) => {
  new RGBELoader()
    .setDataType(THREE.UnsignedByteType)
    .load(imagePath, function (texture) {
      const skySphereGeometry = new THREE.SphereGeometry(300, 60, 60);
      const skySphereMaterial = new THREE.MeshPhongMaterial({
        map: texture
      });
      skySphereMaterial.side = THREE.BackSide;
      const skySphereMesh = new THREE.Mesh(skySphereGeometry, skySphereMaterial);
      scene.add(skySphereMesh);
    }, undefined, function (error) {
      console.error('An error occurred loading the HDR file:', error);
    });
}

setSkySphere(scene, '/kloofendal_48d_partly_cloudy_puresky_2k.hdr');

// Set background color
scene.background = new THREE.Color(0x111111); // Dark gray background color

const fontLoader = new FontLoader();
fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
  const textGeometry = new TextGeometry('Canvas 6', {
    font: font,
    size: 0.5,
    depth: 0.2, // Use depth instead of height
  });

  const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);
  textMesh.position.set(-2, 1, -1); // Set the position of the text
  scene.add(textMesh); // Add the text to the scene
});

// Create OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
controls.maxPolarAngle = Math.PI / 2;
controls.enableZoom = false; // Disable zooming

function animatecube6() {
  requestAnimationFrame(animatecube6);
  controls.update(); // Update controls
  sphere.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animatecube6();

export { sphere as cube6, camera, scene, renderer };
