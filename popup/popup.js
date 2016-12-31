(() => {

  'use strict';

  var referrer = document.querySelector('#referrer');
  // let referrerData = undefined;

  // if (document.referrer) {
  //   referrerData = document.referrer;
  // }
  // else {
  //   referrerData = 'none';
  // }

  // referrer.textContent = referrerData;

  // chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  //   console.log(response.back);
  // });

  // var foo = [];

  // chrome.tabs.query({active:true}, function(tab) {
  //   chrome.tabs.sendMessage(tab[0].id, {text:'bbbbb'}, function(response) {
  //       console.log(response);
  //       for (var i = 0; i < response.length; i++) {
  //         foo.push(response[i]);
  //       }
  //    });
  // });

  // for (var i = 0; i < foo.length; i++) {
  //   console.log(foo[i]);
  //   referrer.textContent += foo[i];
  // }

// chrome.tabs.query({active:true, currentWindow: true}, function(tabs) {
//   chrome.tabs.sendMessage(tabs[0].id, {text: 'aa'}, function(response) {
//     referrer.textContent = tabs[0].id;
//     if (response) {
//       referrer.textContent = response;
//     }
//     else {
//       referrer.textContent = 'none'
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {pop: "request from popup"}, function(response) {
    referrer.textContent = response;
    console.log(response);
  });
});
});

// referrer.textContent = new Date().toString();

})();
