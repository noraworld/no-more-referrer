(() => {

  'use strict';

  let excludeURL = [];

  $('.exclude').children('.url').focus();

  $('.exclude').on('submit', function(event) {
    // event.preventDefault();
    console.log($(this).children('.url').val());
    saveOptions($(this).children('.url'));
  });

  loadOptions();
  function loadOptions() {
    chrome.storage.sync.get(function(storage) {
      excludeURL = storage.excludeURL;
      console.log(excludeURL);
      for (var i = 0; i < excludeURL.length; i++) {
        $('body').append('<div>' + excludeURL[i] + '</div>');
      }
    });
  }

  function saveOptions(url) {
    excludeURL.push(url.val());
    chrome.storage.sync.set({
      excludeURL: excludeURL
    });
  }

  let excludeURLs = document.querySelectorAll('.exclude .url');
  console.log(excludeURLs.length);

})();
