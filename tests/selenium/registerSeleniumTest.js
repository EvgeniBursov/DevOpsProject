import { By, Builder, Key, until } from 'selenium-webdriver';
import assert from 'assert';

async function registerTest() {
  let driver;
  
  try {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://devopsproject-v74y.onrender.com/');
  
    let title = await driver.getTitle();
    assert.equal("Web Store", title);

    await driver.findElement(By.id('user-img')).click();
    await driver.sleep(3500)
    await driver.findElement(By.className('reg_btn')).click();
    await driver.sleep(2500)
  
    await driver.wait(until.elementLocated(By.id('name')), 5000);
    await driver.findElement(By.id('name')).sendKeys('Rita');
  
    await driver.wait(until.elementLocated(By.id('email')), 5000);
    await driver.findElement(By.id('email')).sendKeys('riiita12378@gmail.com');
  
    await driver.wait(until.elementLocated(By.id('password')), 5000);
    await driver.findElement(By.id('password')).sendKeys('123456');
  
    await driver.wait(until.elementLocated(By.id('number')), 5000);
    await driver.findElement(By.id('number')).sendKeys('987654321');
  
    await driver.findElement(By.className('submit-btn')).click();
    await driver.sleep(3500)
  
    await driver.wait(until.urlContains('https://devopsproject-v74y.onrender.com/'), 5000);
    await driver.manage().setTimeouts({ implicit: 10000 });
    let pageUrl = await driver.getCurrentUrl();
    if (pageUrl.includes('https://devopsproject-v74y.onrender.com/')) {
      console.log("User register successfully.");
  } else {
      console.log("User registration failed.");
  }

} catch (e) {
    console.error(e);
  } finally { await driver.quit() }
}

registerTest();
