import { PhysicsWorld } from "./API.js";
import { UI } from "../UI/engineLook.js";


const engine = new PhysicsWorld();

document.getElementById("stepback").addEventListener("click", () => {
    window.location.href = "../index.html";
});

engine.spawn(100,100,1,1);

const ui = new UI(engine);


let run = false
function loop (ct) {
    engine.update(ct,run);
    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);