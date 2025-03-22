import Home from "./Home.js";
import Guide from "./Guide.js";
import Information from "./Information.js";
import { setTab } from "./Buttons.js";
import IconManager from "./IconManager.js";

document.addEventListener("DOMContentLoaded", () => {
    new Home();
    new Guide();
    new Information();
    new IconManager();
    //set the home tab as the default tab
    setTab("home");
});
