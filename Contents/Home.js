import Buttons from "./Buttons.js";
import { setTab } from "./Buttons.js";

class Home extends Buttons{
    constructor(){
        super("Home", "home-btn");
    }
    click() {
        console.log("HOME button clicked!");
        setTab("home");
    }
}

export default Home;




