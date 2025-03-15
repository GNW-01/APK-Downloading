import Home from "./Home.js";
import Guide from "./Guide.js";
import Information from "./Information.js";
import { setTab } from "./Buttons.js";
import IconManager from "./Icon.js";

document.addEventListener("DOMContentLoaded", () => {
    new Home();
    new Guide();
    new Information();
});

//set the home tab as the default tab
setTab("home");
const iconManager = new IconManager();