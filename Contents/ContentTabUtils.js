const openedIconTab = document.getElementById("opened-icon-tab");
export function setOpenedIconTabContent(content) {
    while (openedIconTab.firstChild) {
        openedIconTab.removeChild(openedIconTab.firstChild)
    }
    openedIconTab.innerHTML += content.replace(/\n/g, "<br>");
}

export function openIconTab() {
    if (openedIconTab.style.display === "block") {
        openedIconTab.style.display = "none";
    }
    else {
        openedIconTab.style.display = "block";
    }
    changeArrowHead();
}

export function changeArrowHead() {
    const arrowTop = document.querySelector(".arrow-top");
    const arrotBot = document.querySelector(".arrow-bottom");
    if (openedIconTab.style.display !== "block") {
        arrowTop.style.transform = "rotate(-60deg)";
        arrotBot.style.transform = "rotate(60deg)";
    }
    else {
        arrowTop.style.transform = "rotate(60deg)";
        arrotBot.style.transform = "rotate(-60deg)";
    }
    console.log(openedIconTab.style.display);
}

export const arrowHead = {
    element: document.getElementById("arrowhead-tab-opener"),
    unhide() {this.element.style.display = ""},
    hide() {this.element.style.display = "none"}
}