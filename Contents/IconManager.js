//find all the icons with class icon
const icons = document.querySelectorAll(".icon");

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
            })
        }
    }
}

export default IconManager;