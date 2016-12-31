var referrer;
if (document.referrer) {
  referrer = 'ex'
}
else {
  referrer = 'no';
}

chrome.browserAction.setBadgeText({"text": referrer});
// alert(document.referrer);

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

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  sendResponse('ok');
});
