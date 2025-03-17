import { iconTexts } from "./IconContents.js";

//find all the icons with class icon
const icons = document.querySelectorAll(".main-icon");
const openedIconTab = document.getElementById("opened-icon-tab");
const allSubIcons = document.querySelectorAll(".sub-icon");

let currActiveSubIcon;
let currentActiveIcon = 0;

class IconManager {
    constructor(label, content) {
        this.label = label;
        this.icon = document.getElementById(this.label);
        this.content = content;
        
        this.addClickEvent();
    }
    
    addClickEvent() {
        //loop through all icons and add click event
        for (let i = 0; i < icons.length; i++) {
            icons[i].addEventListener('click', () => {
                //console.log("clicked icon-" + i);
                currentActiveIcon = i;
                makeInactiveInvisible(i);
                //changeIconContent();
            })
        }

        for (let i = 0; i < allSubIcons.length; i++) {
            allSubIcons[i].addEventListener('click', () => {
                //update the opened-icon-tab
                changeIconContent(allSubIcons[i].getAttribute("data-id"));
            });
        }
        //default visible sub-icons
        currentActiveIcon = -1;
        makeInactiveInvisible();
    }
}

function makeInactiveInvisible() {
    for (let i = 0; i < icons.length; i++) {
        
        const subIcons = icons[i].querySelectorAll('.sub-icon');
        if (currentActiveIcon === i) {
            for (let i = 0; i < subIcons.length; i++) {
                //set all sub-icons for active mainicon to be visible
                subIcons[i].style.display = "inline";
            }
        }
        else {
            for (let i = 0; i < subIcons.length; i++) {
                //set sub-icons invisible
                subIcons[i].style.display = "none";
            }
        }
    }
}

function changeIconContent(index) {
    const dataId = (icons[currentActiveIcon].getAttribute("data-id"));
    const mainIconId = icons[currentActiveIcon].parentElement.getAttribute("id");
    
    const currentIconText = iconTexts[mainIconId][dataId];
    index = index.slice(2); //to get only the last index of string
    //kasi ang nilagay mong dataid ay 0-1, 0-2 etc. ay ang need ko lang ay yung 1 or 2
    
    openedIconTab.innerText = currentIconText[index];

    //check if same sub-icon is clicked twice
    //if so, make it either invisible or visible
    if (currActiveSubIcon == currentIconText[index]) {
        openedIconTab.style.display = (openedIconTab.style.display === "block") ? "none" : "block";
    }
    else {
        currActiveSubIcon = currentIconText[index];
        openedIconTab.style.display = "block";
    }
}

export default IconManager;