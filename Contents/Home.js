import Buttons from "./buttons.js";
import { setTab } from "./buttons.js";

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




