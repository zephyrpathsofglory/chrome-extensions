const url = "https://www.youtube.com";

// https://www.youtube.com/watch?v=xv9igHCrnzQ
// https://youtubetranscript.com/?v=xv9igHCrnzQ
chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(url)) {
    // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const newURL = tab.url.replace(
      "www.youtube.com/watch?",
      "youtubetranscript.com/?"
    );
    chrome.tabs.create({ url: newURL });
  }
});
