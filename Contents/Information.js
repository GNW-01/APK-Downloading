import Buttons from "./buttons.js";

class Information extends Buttons{
    constructor(){
        super("Information", "info-btn");
    }
    click() {
        console.log("Information button clicked!");
    }
    }

export default Information;
