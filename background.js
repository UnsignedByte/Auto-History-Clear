//background.js
chrome.tabs.onRemoved.addListener(function(tabid, removed) {
  chrome.browsingData.remove({
    "originTypes": {
      "protectedWeb": true,
      "unprotectedWeb":true,
      "extension":true
    }
  }, {
    "appcache": true,
    "cache": true,
    "cookies": false,
    "downloads": true,
    "fileSystems": true,
    "formData": true,
    "history": true,
    "indexedDB": true,
    "localStorage": false,
    "pluginData": false,
    "passwords": false,
    "webSQL": true
  });
})
