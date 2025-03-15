import { iconTexts } from "./IconContents.js";

//find all the icons with class icon
const icons = document.querySelectorAll(".main-icon");
const openedIconTab = document.getElementById("opened-icon-tab");

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
                changeIconContent();
            })
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
            //console.log(i, currentActiveIcon);
            for (let i = 0; i < subIcons.length; i++) {
                
                subIcons[i].style.display = "inline";
            }
        }
        else {
            for (let i = 0; i < subIcons.length; i++) {
                
                subIcons[i].style.display = "none";
            }
        }
    }
}

//const fs = require('fs');

function changeIconContent() {
    const dataId = (icons[currentActiveIcon].getAttribute("data-id"));
    openedIconTab.innerText = "";
    
    const currentIconText = iconTexts["information"][dataId];
    
    console.log(currentIconText);
    for (const id in currentIconText) {
        openedIconTab.innerText += currentIconText[id];
    }
}

//check if main-icon is clicked
//check if data-id is already in map
//if it is, then add icon reference to map[data-id]
//

export default IconManager;