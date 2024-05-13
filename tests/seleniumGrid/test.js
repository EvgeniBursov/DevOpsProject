import { By, Builder, Key, until} from 'selenium-webdriver';
import { Capabilities } from 'selenium-webdriver';


async function loginTest(browser) {
  let driver;

  if (browser === 'chrome') {
    driver = await new Builder()
      .usingServer('http://localhost:4444/wd/hub')
      .forBrowser('chrome')
      .build();
      try {
        await driver.get('http://localhost:5000');
        const title = await driver.getTitle();
        console.log('Page title:', title);
      } finally {
        await driver.quit();
      }
  } else if (browser === 'firefox') {
    const firefoxCapabilities = Capabilities.firefox();
    driver = await new Builder()
      .forBrowser('firefox')
      .usingWebDriverProxy('http://selenium-hub:4444')
      .withCapabilities(firefoxCapabilities)
      .build();
  } else {
    console.log("Unsupported browser.");
    return;
  }

}


async function runTests() {
  // Run tests in Chrome
  console.log("Running tests in Chrome...");
  await loginTest('chrome');
  // Run tests in Firefox
  console.log("Running tests in Firefox...");
  await loginTest('firefox');

  console.log("All tests completed.");
}

runTests();

/*import { By, Builder, Key, until} from 'selenium-webdriver';
import { Capabilities } from 'selenium-webdriver';


async function exampleTest() {
    const driver = await new Builder()
        .forBrowser('chrome')
        .usingServer('http://selenium-hub:4444/wd/hub')
        .build();

    try {
        await driver.get('https://www.example.com');
        const title = await driver.getTitle();
        console.log('Page title:', title);
    } finally {
        await driver.quit();
    }
}

exampleTest();*/

