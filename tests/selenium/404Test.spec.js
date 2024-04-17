import { By, Builder, Key, until} from 'selenium-webdriver';
import assert from 'assert';
import { describe, it, beforeEach, afterEach } from 'mocha';


describe('Page not found', () =>{

  let driver;

  beforeEach(async function () {
    this.timeout(10000)
    driver = await new Builder().forBrowser('chrome').build()
    await driver.manage().setTimeouts({ implicit: 30000 });
  })

  afterEach(async function () {
    await driver.manage().setTimeouts({ implicit: 30000 });
    await driver.quit();
  })

  it('Web Store page', async function () {
    this.timeout(10000); // Adjust timeout if needed
    await driver.get('https://devopsproject-v74y.onrender.com/');
    let title = await driver.getTitle();
    assert.equal("Web Store", title);
    await driver.sleep(5500)
  })

  it('Page Not Found', async function () {
    this.timeout(10000); // Adjust timeout if needed
    await driver.get('https://devopsproject-v74y.onrender.com/lsasdls');
    let title = await driver.getTitle();
    assert.equal("Page Not Found", title);
    await driver.sleep(5500)
    await driver.wait(until.urlContains('https://devopsproject-v74y.onrender.com/404'), 5000);
  })

})
/*
async function notFoungPageTest() {
  let driver;
  try {driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://devopsproject-v74y.onrender.com/');
   

    let title = await driver.getTitle();
    assert.equal("Web Store", title);
    await driver.sleep(2500)
    await driver.get('https://devopsproject-v74y.onrender.com/lsasdls');
    title = await driver.getTitle();
    assert.equal("Page Not Found", title);
    await driver.sleep(3500)
    await driver.wait(until.urlContains('https://devopsproject-v74y.onrender.com/404'), 5000);
    await driver.manage().setTimeouts({ implicit: 10000 });
    let dashboardPageUrl = await driver.getCurrentUrl();
    if (dashboardPageUrl.includes('https://devopsproject-v74y.onrender.com/404')) {
      console.log("Route pages works done");
  } else {
      console.log("Route pages works not done");
  }
}catch (e) {
    console.error(e);
  }
  //finally { await driver.quit() }
}

notFoungPageTest();*/
