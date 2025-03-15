import Home from "./home.js";
import Guide from "./guide.js";
import Information from "./Information.js";
import { setTab } from "./buttons.js";

document.addEventListener("DOMContentLoaded", () => {
    new Home();
    new Guide();
    new Information();
});

setTab("home");