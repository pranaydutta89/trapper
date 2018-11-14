document.addEventListener('DOMContentLoaded', function () {

    chrome.devtools.panels.create("Trapper",
        "MyPanelIcon.png",
        "panel.html",
        function (panel) {
            // code invoked on panel creation
            console.log('panel created')

        }
    );

    console.log('script below')
    chrome.tabs.executeScript({
        file: 'contentScript.js'
    });


});