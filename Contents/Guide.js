import Buttons from "./buttons.js";
import { setTab } from "./buttons.js";

class Guide extends Buttons{
    constructor(){
        super("Guide", "guide-btn");
    }
    click() {
        console.log("Guide button clicked!");
        setTab("guide");
    }
} 

export default Guide;