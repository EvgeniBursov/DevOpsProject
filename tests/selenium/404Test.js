import { By, Builder, until } from 'selenium-webdriver';
import assert from 'assert';



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

notFoungPageTest();
