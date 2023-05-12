import { ValuesController } from "./Controllers/ValuesController.js";

import { playerController } from "./Controllers/PlayerController.js";

class App {
  valuesController = new ValuesController();
}

class App {
  playerController = new PlayerController()
}
window["app"] = new App();
