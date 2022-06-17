let enabled = true;
browser.browserAction.onClicked.addListener(handleClick);
function handleClick() {
    if (enabled) {
        browser.browserAction.setIcon({
            path: {
                256: "img/off.png"
            }
        });
        enabled = false;
        browser.browserAction.setTitle({ title: "Enable autopause" });
    }
    else {
        browser.browserAction.setIcon({
            path: {
                256: "img/on.png"
            }
        });
        enabled = true;
        browser.browserAction.setTitle({ title: "Disable autopause" });
    }
}

function handleMessage(request, sender, sendResponse) {
    sendResponse({ response: enabled });
}
browser.runtime.onMessage.addListener(handleMessage);