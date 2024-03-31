import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const shapes = ['cube', 'circle', 'triangle', 'sphere', 'rectangle'];

// Create Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas7') });

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
renderer.setSize(canvasWidth, canvasHeight);

// Create cube geometry
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube7 = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube7);

// Create other shapes (circle, triangle, sphere, rectangle) and hide them initially
const circle = new THREE.Mesh(new THREE.CircleGeometry(1, 32), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
const triangle = new THREE.Mesh(new THREE.ConeGeometry(1, 1, 3), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
const rectangle = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
scene.add(cube7, circle, triangle, sphere, rectangle);

// Set initial visibility of shapes to false
circle.visible = false;
triangle.visible = false;
sphere.visible = false;
rectangle.visible = false;

// Add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false; // Disable zooming


// Set initial camera position
camera.position.z = 5;

// Render function
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
let currentShapeIndex = 0;

// Function to switch to the next shape
function nextShape() {
  currentShapeIndex = (currentShapeIndex + 1) % shapes.length;
  switchShape(shapes[currentShapeIndex]);
}

// Define currentShape as a global variable
let currentShape;

// Function to switch to a specific shape
function switchShape(shape) {
  if (currentShape) {
    currentShape.visible = false;
  }
  switch (shape) {
    case 'circle':
      currentShape = circle;
      break;
    case 'triangle':
      currentShape = triangle;
      break;
    case 'sphere':
      currentShape = sphere;
      break;
    case 'cube':
      currentShape = cube7;
      break;
    case 'rectangle':
      currentShape = rectangle;
      break;
    default:
      break;
  }
  currentShape.visible = true;
}

// Position the shapes
cube7.position.set(-2, 0, 0);
circle.position.set(-1, 0, 0);
triangle.position.set(0, 0, 0);
sphere.position.set(1, 0, 0);
rectangle.position.set(2, 0, 0);



// Add button to switch shapes
document.getElementById('shapeButton').addEventListener('click', nextShape);

// Animation function
function animatecube7() {
  requestAnimationFrame(animatecube7);
  controls.update();
  if (currentShape) {
    currentShape.rotation.y += 0.01;
  }
  renderer.render(scene, camera);
}

// Call switchShape to initialize currentShape
switchShape(shapes[currentShapeIndex]);

// Call animatecube7
animatecube7();

export { cube7, camera, scene, renderer };
