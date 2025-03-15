import Buttons from "./buttons.js";
import { setTab } from "./buttons.js";

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
