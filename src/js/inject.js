(() => {

  'use strict';

  chrome.storage.sync.get(function(storage) {
    let execFlag = true;
    if (storage.excludeURL !== undefined) {
      for (var i = 0; i < storage.excludeURL.length; i++) {
        if (parseURL(location.href).match(RegExp(parseURL(storage.excludeURL[i])))) {
          execFlag = false;
        }
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

  function parseURL(url) {
    // cut 'http' or 'https'
    // http://www.example.com  => www.example.com
    // https://www.example.com => www.example.com
    url = url.replace(/^https?:\/\//g, '');

    // cut trailing slash
    // example.com/foo/bar/ => example.com/foo/bar
    url = (url[url.length-1] === '/') ? url.substr(0, url.length-1) : url;

    return url;
  }

  chrome.runtime.sendMessage({referrer: document.referrer}, function(response) {});

})();
