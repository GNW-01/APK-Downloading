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