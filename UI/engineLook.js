import { cent } from "./cent-menu.js";

export class UI {
    constructor (engine) {
        // state
        this.state = {
            build: {
                delete: false,
                place: false,
                touch: false,
                spawn: false,
            },

            mouse: {
                onCanvas: {
                    position: {x:0,y:0}
                },

                onScreen: {
                    position: {x:0,y:0}
                }
            },
        }

        document.addEventListener("mousemove", (event)=> {
            let mouseX = event.clientX;
            let mouseY = event.clientY;

            this.state.mouse.onScreen.position.x = mouseX;
            this.state.mouse.onScreen.position.y = mouseY;
        })

        engine.canv.addEventListener("mousemove", (event) => {
            const rect = engine.canv.getBoundingClientRect();

            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            console.log(mouseX, mouseY);
        });

        this.back = document.getElementById("stepback");
        this.engine = engine;
        this.cent_menu = new cent(engine);
    }
}