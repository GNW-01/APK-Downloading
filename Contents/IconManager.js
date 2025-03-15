//find all the icons with class icon
const icons = document.querySelectorAll(".main-icon");

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
                console.log("clicked icon-" + i);
                currentActiveIcon = i;
                makeInactiveInvisible(i);
            })
        }
    }
}

function makeInactiveInvisible() {
    for (let i = 0; i < icons.length; i++) {
        // if (i === currentActiveIcon) {
        //     continue;
        // }
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

//check if main-icon is clicked
//check if data-id is already in map
//if it is, then add icon reference to map[data-id]
//

export default IconManager;