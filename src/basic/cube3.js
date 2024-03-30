import * as THREE from "three";
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';


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

// Create the first sphere
const geometry1 = new THREE.SphereGeometry(1, 32, 32);
const material1 = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const sphere1 = new THREE.Mesh(geometry1, material1);
sphere1.position.x = -2; // Position sphere1 to the left
scene.add(sphere1);

// Create the second sphere
const geometry2 = new THREE.SphereGeometry(0.5, 32, 32);
const material2 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const sphere2 = new THREE.Mesh(geometry2, material2);
sphere2.position.x = 2; // Position sphere2 to the right
scene.add(sphere2);

camera.position.z = 5;

const fontLoader = new FontLoader();
fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
  const textGeometry = new TextGeometry('sphere orbit', {
    font: font,
    size: 0.5,
    depth: 0.2, // Use depth instead of height
  });
  const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);
  textMesh.position.set(-2, 2, -1); // Set the position of the text
  scene.add(textMesh); // Add the text to the scene
});


function animate() {
  requestAnimationFrame(animate);

  // Rotate the spheres around each other
  const radius = 2; // Radius of the orbit
  const speed = 0.007; // Speed of rotation

  sphere1.position.x = radius * Math.cos(speed * Date.now());
  sphere1.position.z = radius * Math.sin(speed * Date.now());

  sphere2.position.x = -radius * Math.cos(speed * Date.now());
  sphere2.position.z = -radius * Math.sin(speed * Date.now());

  renderer.render(scene, camera);
}

animate();


export { sphere1 as cube3, sphere2, camera, scene, renderer };
