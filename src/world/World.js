import { loadBirds } from "./components/birds/birds" 
import { createCamera } from "./components/camera"
import { createLights } from "./components/lights"
import { createScene } from "./components/scene"

import { createControls } from "./components/systems/controls" 
import { createRenderer } from "./components/systems/renderer" 
import { Resizer } from "./components/systems/Resizer" 
import { Loop } from "./components/systems/Loop" 

let camera;
let controls;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    if (!container) {
      throw new Error("Container element not found.");
    }

    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
    controls = createControls(camera, renderer.domElement);

    const { ambientLight, mainLight } = createLights();

    loop.updatables.push(controls);
    scene.add(ambientLight, mainLight);

    const resizer = new Resizer(container, camera, renderer);
  }

  async init() {
    const { parrot, flamingo, stork } = await loadBirds();

    // move the target to the center of the front bird
    controls.target.copy(parrot.position);

    loop.updatables.push(parrot, flamingo, stork);
    scene.add(parrot, flamingo, stork);
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
