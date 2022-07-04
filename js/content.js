let isLeaving = false;
document.addEventListener('blur', function () {
    notifyBackgroundPage();

    isLeaving = true;
});

document.addEventListener('focus', function () {
    notifyBackgroundPage();

    isLeaving = false;
});

function handleResponse(message) {
    if (!message.response == true)
        return;

    var vids = document.getElementsByTagName('video');
    if (!document.contains(vids[0]))
        return;

    if (isLeaving) {
        for (let i = 0; i < vids.length; i++) {
            vids[i].pause();
        }
    }
    else {
        vids[0].play();
    }
}
function notifyBackgroundPage(e) {
    let sending = browser.runtime.sendMessage({});
    sending.then(handleResponse);
}