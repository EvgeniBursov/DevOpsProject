import { Builder, By, Key, until } from 'selenium-webdriver';
import { assert } from 'chai';
import * as fs from 'fs';

describe('search', async function () {
    let driver;
	// [..]

    // A helper function to start a web search
    const search = async (term) => {
        // Automate DuckDuckGo search
        await driver.get('https://duckduckgo.com/');
        const searchBox = await driver.findElement(
            By.id('search_form_input_homepage'));
        await searchBox.sendKeys(term, Key.ENTER);

        // Wait until the result page is loaded
        await driver.wait(until.elementLocated(By.css('#links .result')));

        // Return page content
        const body = await driver.findElement(By.tagName('body'));
        return await body.getText();
    };

	// [..]

    // Before each test, initialize Selenium and launch the browser
    beforeEach(async function() {
        // Microsoft uses a longer name for Edge
        let browser = process.env.BROWSER;
        if (browser == 'edge') {
            browser = 'MicrosoftEdge';
        }

        // Connect to service specified in env variable or default to 'selenium'
        const host = process.env.SELENIUM || 'selenium';
        const server = `http://${host}:4444`;
        driver = await new Builder()
            .usingServer(server)
            .forBrowser(browser)
            .build();
    });

    // After each test, take a screenshot and close the browser
    afterEach(async function () {
        if (driver) {
            // Take a screenshot of the result page
            // [..]

            // Close the browser
            await driver.quit();
        }
    });

    // Our test definitions
    it('should search for "Selenium dev"', async function () {
        const content = await search('Selenium dev');
        assert.isTrue(content.includes('www.selenium.dev'));
    });

	// [..]
});












/*import { By, Builder, Key, until} from 'selenium-webdriver';
import { Capabilities } from 'selenium-webdriver';



async function loginTest(browser) {
  let driver;

  if (browser === 'chrome') {
    driver = await new Builder()
      .usingServer('http://localhost:4444/wd/hub')
      .forBrowser('chrome')
      .build();
  } else if (browser === 'firefox') {
    const firefoxCapabilities = Capabilities.firefox();
    driver = await new Builder()
      .forBrowser('firefox')
      .usingServer('http://localhost:4444/wd/hub')
      .withCapabilities(firefoxCapabilities)
      .build();
  } else {
    console.log("Unsupported browser.");
    return;
  }

  /*try {
    await driver.get('https://devopsproject-v74y.onrender.com');
    const title = await driver.getTitle();
    console.log('Page title:', title);
  } finally {
    await driver.quit();
  }*/
///}

/*async function runTests() {
  // Run tests in Chrome
  //console.log("Running tests in Chrome...");
  //await loginTest('chrome');
  
  // Run tests in Firefox
  console.log("Running tests in Firefox...");
  await loginTest('firefox');

  console.log("All tests completed.");
}

runTests();*/


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

