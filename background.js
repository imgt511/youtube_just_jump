// Function to be injected into the YouTube page to perform the "Jump Ahead" action.
function jumpAheadOnPage() {
  const selectors = [
    '.ytp-ad-skip-button-modern', // Selector for the modern "Skip" button
    '.ytp-ad-skip-button',      // Selector for the older "Skip" button
    '.ytp-skip-ad-button'        // Another potential selector
  ];

  for (const selector of selectors) {
    const skipButton = document.querySelector(selector);
    if (skipButton) {
      skipButton.click();
      return; // Stop after the first button is found and clicked
    }
  }
}

// Listen for the keyboard shortcut command.
chrome.commands.onCommand.addListener((command, tab) => {
  if (command === "jump-ahead-command") {
    // Execute the jumpAheadOnPage function in the active tab.
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: jumpAheadOnPage
    });
  }
});