(() => {

  'use strict';

  let excludeURL = [];
  init();

  function init() {
    load();
    $('.exclude').children('.url').focus();

    $('.exclude').on('submit', function(event) {
      event.preventDefault();
      if ($(this).children('.url').val() === '') {
        $(this).children('.url').css('border', '1px solid red');
        return false;
      }
      add($(this).children('.url'));
      location.reload();
    });

    $(document).on('click', '.delete', function() {
      let index = $(this).parent().children('.index').text() - 1;
      excludeURL.splice(index, 1);
      save();
      location.reload();
    });
  }

  function load() {
    chrome.storage.sync.get(function(storage) {
      excludeURL = storage.excludeURL;
      for (var i = 0; i < excludeURL.length; i++) {
        $('.exclude-url-list').append('<tr><td class="index">' + (i + 1) + '</td><td class="value">' + excludeURL[i] + '</td><td class="delete"><button type="button">Delete</button></td></tr>');
      }
    });
  }

  function add(url) {
    excludeURL.unshift(url.val());
    save();
  }

  function save() {
    chrome.storage.sync.set({excludeURL: excludeURL});
  }

})();
