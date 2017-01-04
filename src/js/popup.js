(() => {

  'use strict';

  let referrer = document.querySelector('#referrer');

  chrome.tabs.query({active: true, currentWindow: true}, function(tab) {
    chrome.tabs.sendMessage(tab[0].id, {pop: "request from popup"}, function(response) {
      if (chrome.extension.getBackgroundPage().referrer[tab[0].id] === "") {
        referrer.textContent = "none";
      }
      else {
        referrer.textContent = chrome.extension.getBackgroundPage().referrer[tab[0].id];
      }
    });
  });

})();
