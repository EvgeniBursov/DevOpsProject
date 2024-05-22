import { By, Builder, Key, until} from 'selenium-webdriver';
import { Capabilities } from 'selenium-webdriver';



async function loginTest(browser) {
  let driver;

  if (browser === 'chrome') {
    driver = await new Builder()
      .usingServer('http://localhost:4444')
      .forBrowser('chrome')
      .build();
      try {
        await driver.get('https://devopsproject-v74y.onrender.com');
        const title = await driver.getTitle();
        console.log('Page title from chrome:', title);
      }finally {
        await driver.quit();
    }
  } else if (browser === 'firefox') {
    const firefoxCapabilities = Capabilities.firefox();
    driver = await new Builder()
      .forBrowser('firefox')
      .usingServer('http://localhost:4444')
      .withCapabilities(firefoxCapabilities)
      .build();
      try {
        await driver.get('https://devopsproject-v74y.onrender.com');
        const title = await driver.getTitle();
        console.log('Page title from firefox:', title);
      }finally {
        await driver.quit();
    }
  } else if (browser === 'edge') {
    const edgeCapabilities = Capabilities.edge();
    driver = await new Builder()
      .forBrowser('edge')
      .usingServer('http://localhost:4444')
      .withCapabilities(edgeCapabilities)
      .build();
      try {
        await driver.get('https://devopsproject-v74y.onrender.com');
        const title = await driver.getTitle();
        console.log('Page title from edge:', title);
      }finally {
        await driver.quit();
    }
  }else if (browser === 'safari') {
    const safariCapabilities = Capabilities.safari();
    driver = await new Builder()
      .forBrowser('safari')
      .usingServer('http://localhost:4444')
      .withCapabilities(safariCapabilities)
      .build();
      try {
        await driver.get('https://devopsproject-v74y.onrender.com');
        const title = await driver.getTitle();
        console.log('Page title from safari:', title);
      }finally {
        await driver.quit();
    }
  }else {
    console.log("Unsupported browser.");
    return;
  }
}


async function runTests() {
  console.log("Running tests in Chrome...");
  await loginTest('chrome');
  
  console.log("Running tests in Firefox...");
  await loginTest('firefox');

  console.log("Running tests in Safari...");
  await loginTest('safari');

  console.log("Running tests in Edge...");
  await loginTest('edge');
  console.log("All tests completed.");
}

runTests();


