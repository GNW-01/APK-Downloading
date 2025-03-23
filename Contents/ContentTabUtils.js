
export function setOpenedIconTabContent(content) {
    const openedIconTab = document.getElementById("opened-icon-tab");
    while (openedIconTab.firstChild) {
        openedIconTab.removeChild(openedIconTab.firstChild)
    }
    // const exitBtn = document.createElement('button');
    // exitBtn.id = "content-tab-exit";
    // openedIconTab.append(exitBtn);
    openedIconTab.innerHTML += content.replace(/\n/g, "<br>");

    // document.getElementById('content-tab-exit').onclick = () => {
    //     openedIconTab.style.display = "none";
    //     console.log("exited");
    // }
}