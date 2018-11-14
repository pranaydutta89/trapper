chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log("background.js got a message")
        console.log(request);
        console.log(sender);

    }
);