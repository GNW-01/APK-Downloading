    //make current tab invisible
    //make hometab visible 
    //all done through css
 class Buttons{
    constructor(label, buttonId) {
        this.label = label;
        this.button = document.getElementById(buttonId);

        if (this.button) {
            this.button.addEventListener("click", () => this.click());
        } else {
            console.error(`Button with ID '${buttonId}' not found!`);
        }
    }

    click() {
        console.log(`${this.label} button clicked!`);
    }
}

export default Buttons;

export function setTab(openedTab) {
    const homeTab = document.getElementById("home");
    const guideTab = document.getElementById("guide");
    const infoTab = document.getElementById("information");

    homeTab.style.display = "none";
    guideTab.style.display = "none";
    infoTab.style.display = "none";

    switch (openedTab) {
        case "home":
            homeTab.style.display = "flex";
            break;
        case "guide":
            guideTab.style.display = "flex";
            break;
        case "information":
            infoTab.style.display = "flex";
            break;
        default:
            break;
    }
}
