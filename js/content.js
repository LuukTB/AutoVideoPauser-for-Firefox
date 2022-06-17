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
    console.log(message.response);
    if (!message.response == true)
        return;

    var vids = document.getElementsByTagName('video');
    for (let i = 0; i < vids.length; i++) {
        let vid = vids[i];
        if (isLeaving)
            vid.pause();
        else
            vid.play();
    }
}
function notifyBackgroundPage(e) {
    let sending = browser.runtime.sendMessage({});
    sending.then(handleResponse);
}