import Home from "./home.js";
import Guide from "./guide.js";
import Information from "./Information.js";
import { setTab } from "./Buttons.js";

document.addEventListener("DOMContentLoaded", () => {
    new Home();
    new Guide();
    new Information();
});

//set the home tab as the default tab
setTab("home");