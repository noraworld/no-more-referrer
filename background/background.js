var referrer = [];

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
    referrer[tab[0].id] = request.referrer;
    console.log(tab[0].id);
    sendResponse(referrer);
    if (referrer[tab[0].id] === "") {
      chrome.browserAction.setBadgeText({tabId: tab[0].id, text: "ON"});
    }
    else {
      chrome.browserAction.setBadgeText({tabId: tab[0].id, text: ""});
    }
  });
});
