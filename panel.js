chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log("background.js got a message")
        console.log(request);
        console.log(sender);
        chrome.tabs.captureVisibleTab(null, {}, function (image) {
            // You can add that image HTML5 canvas, or Element.
            debugger
        });
    }
);