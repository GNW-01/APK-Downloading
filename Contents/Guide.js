import Buttons from "./Buttons.js";
import { setTab } from "./Buttons.js";

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