import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { setupModel } from "./setupModel.js";

  async function loadBirds() {
    const loader = new GLTFLoader();
  
    const [parrotData, flamingoData, storkData] = await Promise.all([
      loader.loadAsync("/assets/models/Parrot.glb"),
      loader.loadAsync("/assets/models/Flamingo.glb"),
      loader.loadAsync("/assets/models/Stork.glb"),
    ]);
  
    console.log("Squaaawk!", parrotData);
  
    const parrot = setupModel(parrotData);
    const flamingo = setupModel(flamingoData);
    const stork = setupModel(storkData);
  
    // Scale factors for each model (adjust as needed)
    const parrotScale = 0.1;
    const flamingoScale = 0.09;
    const storkScale = 0.08;
  
    // Apply the scale to each model
    parrot.scale.set(parrotScale, parrotScale, parrotScale);
    flamingo.scale.set(flamingoScale, flamingoScale, flamingoScale);
    stork.scale.set(storkScale,storkScale,storkScale);
  
    // Adjust positions
    parrot.position.set(0, 0, 0); // Original position
    flamingo.position.set(5, 0, -10); // Adjusted position along the z-axis
    stork.position.set(-5, 0, -5); // Adjusted position along the z-axis
  
    return {
      parrot,
      flamingo,
      stork,
    };
  }
  

export { loadBirds };
