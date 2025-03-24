const openedIconTab = document.getElementById("opened-icon-tab");
export function setOpenedIconTabContent(content) {
    while (openedIconTab.firstChild) {
        openedIconTab.removeChild(openedIconTab.firstChild)
    }
    openedIconTab.innerHTML += content.replace(/\n/g, "<br>");
}

export function openIconTab() {
    // if (openedIconTab.style.display === "block") {
    //     openedIconTab.style.display = "none";
    // }
    // else {
    //     openedIconTab.style.display = "block";
    // }
    if (iconTab.ishidden) {
        iconTab.unhide();
    }
    else {
        iconTab.hide();
    }
    changeArrowHead();
}

export function changeArrowHead() {
    const arrowTop = document.querySelector(".arrow-top");
    const arrotBot = document.querySelector(".arrow-bottom");
    if (iconTab.ishidden) {
        arrowTop.style.transform = "rotate(-60deg)";
        arrotBot.style.transform = "rotate(60deg)";
    }
    else {
        arrowTop.style.transform = "rotate(60deg)";
        arrotBot.style.transform = "rotate(-60deg)";
    }
}

export const arrowHead = {
    element: document.getElementById("arrowhead-tab-opener"),
    unhide() {this.element.style.display = ""},
    hide() {this.element.style.display = "none"}
}

export const iconTab = {
    element: document.getElementById("opened-icon-tab"),
    unhide() {this.element.style.display = "block"},
    hide() {this.element.style.display = "none"},
    get ishidden() {return this.element.style.display === "none"}
}