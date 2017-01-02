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

})();
