import Buttons from "./Buttons.js";
import { setTab } from "./Buttons.js";

class Information extends Buttons{
    constructor(){
        super("information", "info-btn");
    }
    
    // click() {
    //     console.log("Information button clicked!");
    //     setTab("information");
    // }
}

export default Information;
