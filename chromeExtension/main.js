async function handle (info){
  var shortUrl = info.url.split("thestl/")[1];
      const response = await fetch('http://localhost:3000/longurl/'+shortUrl);
      const data = await response.json();
      return data;     
}
chrome.webRequest.onBeforeRequest.addListener(
    async function(info) { 
      const data = await handle(info);     
      var url = data.long_url;      
      chrome.tabs.update(info.tabId, {url});
    },
    {
      urls: [
        "*://thestl/*"
      ],
    },
    ["blocking"]);