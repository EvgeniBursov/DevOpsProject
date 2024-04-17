import { By, Builder, until, Browser} from 'selenium-webdriver';
import assert from 'assert';

async function cartTest() {
  let driver;
  
  try {

    driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions('--no-sandbox').build();
    await driver.get('https://devopsproject-v74y.onrender.com/');

    let title = await driver.getTitle();
    assert.equal("Web Store", title);
    await driver.sleep(3500)
    
    await driver.findElement(By.id('card-btn1')).click();
    await driver.sleep(2500)
    let alert = await driver.switchTo().alert();
    await driver.sleep(1500)
    await alert.accept();

    await driver.findElement(By.id('user-img')).click();
    await driver.sleep(3500)
    await driver.findElement(By.className('btn')).click();
    await driver.sleep(2500)

    title = await driver.getTitle();
    assert.equal("Login Page", title);
    await driver.wait(until.elementLocated(By.id('email')), 5000);
    await driver.findElement(By.id('email')).sendKeys('Bursov@gmail.com');
    await driver.sleep(3500)
    await driver.findElement(By.id('password')).sendKeys('123456');
    await driver.sleep(3500)
    await driver.findElement(By.className('submit-btn')).click();
    await driver.sleep(3500)
    

    await driver.findElement(By.id('cart-img')).click();
    await driver.sleep(1500)

    await driver.findElement(By.id('card-btn1')).click();
    await driver.sleep(3500)
    await driver.findElement(By.id('card-btn2')).click();
    await driver.sleep(3500)
    await driver.findElement(By.id('card-btn3')).click();
    await driver.sleep(3500)
    await driver.findElement(By.className('minusBtn')).click();
    await driver.sleep(3500)
    await driver.findElement(By.id('buy-btn')).click();
    await driver.sleep(3500)
    await driver.wait(until.urlContains('https://devopsproject-v74y.onrender.com/pages/thankPage.html'), 5000);
    await driver.manage().setTimeouts({ implicit: 10000 });
    let dashboardPageUrl = await driver.getCurrentUrl();
    if (dashboardPageUrl.includes('https://devopsproject-v74y.onrender.com/pages/thankPage.html')) {
      console.log("Buy successfully.");
  } else {
      console.log("Buy failed.");
  }
    await driver.findElement(By.id('home')).click();
    await driver.sleep(2500)


}catch (e) {
    console.error(e);
  } 
  ///finally { await driver.quit() }
}

cartTest();
