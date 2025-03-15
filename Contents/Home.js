import Buttons from "Buttons.js";

class Home extends Buttons{
    constructor(){
        super();
    }
    const homeBtn = document.getElementById("home-btn");
    homeBtn.onclick = function() {
        console.log("hello wordl");
    }
}




