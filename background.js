//background.js
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
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
      "localStorage": true,
      "pluginData": true,
      "passwords": true,
      "webSQL": true
    }, function (){
        console.log("All data is Deleted...");
    });
  }
})
