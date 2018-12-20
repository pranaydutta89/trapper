let runningTabId;
chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        },
            function (tabs) {
                runningTabId = tabs[0].id;
                chrome.tabs.captureVisibleTab(tabs[0].windowId
                    , { format: "png" },
                    (src) => {
                        message.image = src;
                        chrome.runtime.sendMessage(message);
                    }
                );
            });
    });

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
    if (runningTabId === tabId && changeInfo && changeInfo.status === 'complete') {
        chrome.runtime.sendMessage({ reset: true });
        chrome.tabs.executeScript({
            file: 'contentScript.js'
        });
    }
})