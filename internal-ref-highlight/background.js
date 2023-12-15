chrome.action.onClicked.addListener(async (tab) => {
  // Define the CSS styles you want to inject.
  const cssStyles = `
a[href^="#"] {
  color: red;
}
`;

  await chrome.scripting.insertCSS({
    css: cssStyles,
    target: { tabId: tab.id },
  });
});
