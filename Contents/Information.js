import Buttons from "./Buttons.js";
import { setTab } from "./Buttons.js";

class Information extends Buttons{
    constructor(){
        super("Information", "info-btn");
    }
    
    click() {
        console.log("Information button clicked!");
        setTab("information");
    }
}

export default Information;
