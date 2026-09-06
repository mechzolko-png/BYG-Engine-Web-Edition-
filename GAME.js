import { PhysicsWorld } from "./engine/API.js"

const engine = new PhysicsWorld();


let ball = engine.spawn(100,100,0,0)

function loop(ct) {
    engine.update(ct);
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);