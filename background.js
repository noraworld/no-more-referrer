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
      chrome.browserAction.setBadgeText({tabId: tab[0].id, text: "OFF"});
    }
  });
});

// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//     console.log(response.farewell);
//   });
// });

// chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
//     sendResponse({back: 'aaa'});
//     return true;
// });

  // chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  //   console.log(response.farewell);
  // });

  // chrome.tabs.query({active:true}, function(tab) {
  //   chrome.tabs.sendMessage(tab[0].id, {text:'from background'}, function(response) {
  //       console.log(response);
  //       alert('hhhhhhh');
  //    });
  // });

  // chrome.extension.onMessage.addListener(function(request,sender,sendResponse){
    // parseItems = [];
    // console.log(request);
    // console.log(sender);
    // console.log(sendResponse);

    // alert(request.time);
    // alert(request.text);
    // alert(startTime);
    // startTime = 'aaaa';
    // url = sender.url;

  //   var res = "finish";
  //   sendResponse(sender.pop);
  // });
