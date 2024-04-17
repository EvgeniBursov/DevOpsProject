import { By, Builder, until } from 'selenium-webdriver';
import assert from 'assert';


async function loginTest() {
  let driver;
  
  try {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://devopsproject-v74y.onrender.com/');
  
    let title = await driver.getTitle();
    assert.equal("Web Store", title);

    await driver.findElement(By.id('user-img')).click();
    await driver.sleep(3500)
    await driver.findElement(By.className('btn')).click();
    await driver.sleep(2500)

    title = await driver.getTitle();
    assert.equal("Login Page", title);
    await driver.findElement(By.id('create')).click();
    await driver.sleep(3500)
    await driver.navigate().back()
    await driver.findElement(By.id('home')).click();
    await driver.navigate().back()
    await driver.sleep(3500)
    await driver.wait(until.elementLocated(By.id('email')), 5000);
    await driver.findElement(By.id('email')).sendKeys('Bursov@gmail123.com');
    await driver.sleep(3500)
    await driver.findElement(By.id('password')).sendKeys('1234');
    await driver.sleep(3500)
    await driver.findElement(By.className('submit-btn')).click();
    await driver.sleep(3500)
    await driver.findElement(By.id('email')).clear()
    await driver.sleep(3500)
    await driver.findElement(By.id('email')).sendKeys('Bursov@gmail.com');
    await driver.sleep(3500)
    await driver.findElement(By.className('submit-btn')).click();
    await driver.sleep(3500)
    await driver.wait(until.elementLocated(By.id('password')), 5000);
    await driver.findElement(By.id('password')).clear()
    await driver.sleep(3500)
    await driver.wait(until.elementLocated(By.id('password')), 5000);
    await driver.findElement(By.id('password')).sendKeys('123456');
    await driver.sleep(3500)
    await driver.findElement(By.className('submit-btn')).click();
    await driver.sleep(3500)
    /* Login succes */
    title = await driver.getTitle();
    assert.equal("Web Store", title);
    await driver.findElement(By.id('user-img')).click();
    await driver.sleep(3500)

    await driver.wait(until.urlContains('https://devopsproject-v74y.onrender.com/'), 5000);
    await driver.manage().setTimeouts({ implicit: 10000 });
    let dashboardPageUrl = await driver.getCurrentUrl();
    if (dashboardPageUrl.includes('https://devopsproject-v74y.onrender.com/')) {
      console.log("User exists. Logged in successfully.");
  } else {
      console.log("User doesn't exist or login failed.");
  }
}catch (e) {
    console.error(e);
  }
  // finally { await driver.quit() }
}

loginTest();
