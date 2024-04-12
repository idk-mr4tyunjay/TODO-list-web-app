import { cube1 } from "./basic/cube1.js";
import { cube2 } from "./basic/cube2.js";
import { cube3 } from "./basic/cube3.js";
import { cube4 } from "./basic/cube4.js";

// canvas intermediate
import { cube5 } from "./intermediate/cube5.js";
// import { cube6 } from "./intermediate/cube6.js";
import { cube7 } from "./intermediate/cube7.js";
//bird
import { World } from "./world/World.js"; 

async function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // create a new world
  const world = new World(container);

  // complete async tasks
  await world.init();

  // start the animation loop
  world.start();
}

main().catch((err) => {
  console.error(err);
});
