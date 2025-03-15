import Buttons from "./buttons.js";

class Home extends Buttons{
    constructor(){
        super("Home", "home-btn");
    }
    click() {
        console.log("HOME button clicked!");
    }
    }

export default Home;




