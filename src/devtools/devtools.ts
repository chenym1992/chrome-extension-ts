import { browser } from 'webextension-polyfill-ts';

browser.devtools.panels
  .create("React Counter", "/src/devtools/panel-icon-16.png", "/src/devtools/panel.html")
  .then((panel) => {
    if (browser.runtime.lastError) console.error(browser.runtime.lastError);
    console.log("panel", panel);
  });
