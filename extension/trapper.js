
document.addEventListener('DOMContentLoaded', function () {

    chrome.devtools.panels.create("Trapper",
        "MyPanelIcon.png",
        "panel.html",
        function (panel) {
        }
    );


    chrome.tabs.executeScript({
        file: 'contentScript.js'
    });

});