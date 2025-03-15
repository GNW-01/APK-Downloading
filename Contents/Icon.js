const icons = document.querySelectorAll(".icon");

class IconManager {
    constructor(label, content) {
        this.label = label;
        this.icon = document.getElementById(this.label);
        this.content = content;
        
        this.addClickEvent();
    }

    addClickEvent() {
        for (let i = 0; i < icons.length; i++) {
            icons[i].addEventListener('click', () => {
                console.log(icons[i]);
            })
        }
    }
}

export default IconManager;