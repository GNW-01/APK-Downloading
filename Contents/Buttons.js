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
    //initialize tabs
    const homeTab = document.getElementById("home");
    const guideTab = document.getElementById("guide");
    const infoTab = document.getElementById("information");

    //set all tabs invisible
    homeTab.style.display = "none";
    guideTab.style.display = "none";
    infoTab.style.display = "none";

    //set the selected tab visible
    const openedIconTab = document.getElementById("opened-icon-tab");
    switch (openedTab) {
        case "home":
            homeTab.style.display = "flex";
            openedIconTab.style.display = "none";
            break;
        case "guide":
            guideTab.style.display = "flex";
            // openedIconTab.style.display = "block";
            break;
        case "information":
            infoTab.style.display = "flex";
            // openedIconTab.style.display = "block";
            break;
        default:
            break;
    }
}
