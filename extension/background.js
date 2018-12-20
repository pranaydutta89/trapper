chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        },
            function (tabs) {
                chrome.tabs.captureVisibleTab(tabs[0].windowId
                    , { format: "png" },
                    (src) => {
                        message.image = src;
                        chrome.runtime.sendMessage(message);
                    }
                );
            });
    });