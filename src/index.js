import View from "./view.js";
import Model from "./model.js";
import Controller from "./controller.js";

const app = new Controller( new Model(), new View() );
console.log(app);
if(app){
  app.view.render();
}
