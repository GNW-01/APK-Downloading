    //make current tab invisible
    //make hometab visible 
    //all done through css

import { arrowHead, changeArrowHead, iconTab, setOpenedIconTabContent } from "./ContentTabUtils.js";
const clicksound = new Audio("./assets/sound/mixkit-modern-technology-select-3124.wav");
const selectall = document.getElementById("tabs-container");
    
 class Buttons{
    constructor(label, buttonId) {
        this.label = label;
        this.button = document.getElementById(buttonId);
        this.currActiveTab = sessionStorage.getItem("current-active-tab");
        
        if (this.button) {
            this.button.addEventListener("click", () => {
                this.click();
                this.setUniversalCurrTab();
            });
        } else {
            console.error(`Button with ID '${buttonId}' not found!`);
        }

        selectall.addEventListener("click", this.playsound);
    }

    playsound() {
        clicksound.currentTime = 0;
        clicksound.play();
        console.log("sound played");
    }

    click() {
        console.log(`${this.label} button clicked!`);
        setTab(this.label);
    }

    setUniversalCurrTab() {
        if (!this.currActiveTab) {
            return;
        }
        this.currActiveTab = `${this.label}`;
        sessionStorage.setItem("current-active-tab", this.currActiveTab);
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

    const openedIconTab = document.getElementById("opened-icon-tab");
    // openedIconTab.innerText = "Walk through all the information!";
    
    //set the selected tab visible
    switch (openedTab) {
        case "home":
            homeTab.style.display = "flex";
            setButtonHighlight("home");
            iconTab.hide();
            arrowHead.hide();
            break;
        case "guide":
            guideTab.style.display = "flex";
            setButtonHighlight("guide");
            iconTab.unhide();
            arrowHead.unhide();
            break;
        case "information":
            infoTab.style.display = "flex";
            setButtonHighlight("info");
            iconTab.unhide();
            arrowHead.unhide();
            break;
        default:
            break;
    }

    //reset openedicontab content if switch tabs
    setOpenedIconTabContent("Walk through all the information!");
    changeArrowHead();
}

function setButtonHighlight(btnName) {
    const btns = document.querySelectorAll('.nav-btn');
    for (let i = 0; i < btns.length; i++) {
        const btn = btns[i];
        // btn.style.boxShadow = "none";
        btn.style.background = "";
    }
    const highlightedBtn = document.getElementById(`${btnName}-btn`);
    // highlightedBtn.style.boxShadow = "0 0 4px 2px black";
    highlightedBtn.style.background = "linear-gradient(to right, #2575FC, #6A11CB)";
}


