import Buttons from "./buttons.js";

class Guide extends Buttons{
    constructor(){
        super("Guide", "guide-btn");
    }
    click() {
        console.log("Guide button clicked!");
    }
} 

export default Guide;