import { PerspectiveCamera } from 'three';

function createCamera() {
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  camera.position.set(0, 0, 10);
  camera.lookAt(0, 0, 0); // Look at the center of the scene

  return camera;
}


export { createCamera };
