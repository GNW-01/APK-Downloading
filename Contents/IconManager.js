import { iconTexts } from "./IconContents.js";

//find all the icons with class icon
const icons = document.querySelectorAll(".main-icon");
const openedIconTab = document.getElementById("opened-icon-tab");
const allSubIcons = document.querySelectorAll(".sub-icon");

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

function changeIconContent(index) {
    const dataId = (icons[currentActiveIcon].getAttribute("data-id"));
    const mainIconId = icons[currentActiveIcon].parentElement.getAttribute("id");
    
    const currentIconText = iconTexts[mainIconId][dataId];
    index = index.slice(2);
    openedIconTab.innerText = currentIconText[index];
}

export default IconManager;