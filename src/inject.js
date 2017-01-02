(() => {

  'use strict';

  chrome.storage.sync.get(function(storage) {
    let execFlag = true;
    for (var i = 0; i < storage.excludeURL.length; i++) {
      if (location.host === storage.excludeURL[i]) {
        execFlag = false;
      }
    }
    if (execFlag) {
      disableReferrer();
    }
  });

  function disableReferrer() {
    let meta     = document.createElement('meta');
    meta.name    = "referrer";
    meta.content = "no-referrer";
    document.head.appendChild(meta);
  }

  chrome.runtime.sendMessage({referrer: document.referrer}, function(response) {});

  // function test() {
  //   chrome.runtime.sendMessage({
  //     greeting: "hello"
  //   }, function(response) {
  //     console.log(response);
  //   });
  // }
  // test();

// chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
//     sendResponse({farewell: 'inject'});
//     return true;
// });

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   console.log(request);
//   var res = 'finish';
//   sendResponse(res);
//   return true;
// });

// var ref = [];
// ref.push(window.location.href + ': ' + document.referrer);
// console.log(ref);

// chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
//   console.log(msg);
//     sendResponse(ref);
// });

  // chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  //   sendResponse(document.referrer);
  // });

})();
