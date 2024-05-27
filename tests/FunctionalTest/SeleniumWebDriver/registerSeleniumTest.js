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
    //check register page
    title = await driver.getTitle();
    assert.equal("Sign Up", title);

    await driver.findElement(By.id('login')).click();
    title = await driver.getTitle();
    assert.equal("Login Page", title);
    await driver.sleep(3500)
    await driver.navigate().back()
    await driver.findElement(By.id('home')).click();
    await driver.sleep(3500)
    await driver.navigate().back()
    await driver.sleep(3500)

    //try enter invalid register name < 1, password < 6 , email < 1
    await driver.wait(until.elementLocated(By.id('name')), 5000);
    await driver.findElement(By.id('name')).sendKeys('');
    await driver.findElement(By.className('submit-btn')).click();
    await driver.sleep(2500)
    await driver.wait(until.elementLocated(By.id('name')), 5000);
    await driver.findElement(By.id('name')).sendKeys('Rita');
    await driver.sleep(3500)
    await driver.wait(until.elementLocated(By.id('email')), 5000);
    await driver.findElement(By.id('email')).sendKeys('');
    await driver.sleep(2500)
    await driver.findElement(By.className('submit-btn')).click();
    await driver.sleep(2500)
    await driver.sleep(2500)
    await driver.wait(until.elementLocated(By.id('email')), 5000);
    await driver.sleep(2500)
    await driver.findElement(By.id('email')).sendKeys('Bursov@gmail.com');
    await driver.sleep(2500)
    await driver.findElement(By.className('submit-btn')).click();
    await driver.sleep(2500)
    await driver.wait(until.elementLocated(By.id('password')), 5000);
    await driver.sleep(2500)
    await driver.findElement(By.id('password')).sendKeys('');
    await driver.sleep(2500)
    await driver.findElement(By.className('submit-btn')).click();
    await driver.sleep(2500)
    await driver.wait(until.elementLocated(By.id('password')), 5000);
    await driver.sleep(2500)
    await driver.findElement(By.id('password')).sendKeys('123456');
    await driver.sleep(2500)
    await driver.findElement(By.className('submit-btn')).click();
    await driver.wait(until.elementLocated(By.id('number')), 5000);
    await driver.findElement(By.id('number')).sendKeys('');
    await driver.findElement(By.className('submit-btn')).click();
    await driver.wait(until.elementLocated(By.id('number')), 5000);
    await driver.findElement(By.id('number')).sendKeys('987654321');
    await driver.findElement(By.className('submit-btn')).click();
    await driver.sleep(3500)
    await driver.wait(until.elementLocated(By.id('email')), 5000);
    await driver.sleep(3500)
    await driver.findElement(By.id('email')).clear()
    await driver.sleep(3500)
    await driver.findElement(By.id('email')).sendKeys(generateRandomName());
    await driver.sleep(3500)
    await driver.findElement(By.className('submit-btn')).click();
    await driver.sleep(3500)
    title = await driver.getTitle();
    assert.equal("Web Store", title);
    await driver.wait(until.urlContains('https://devopsproject-v74y.onrender.com/'), 5000);
    /*Register done*/
    await driver.findElement(By.id('user-img')).click();
    await driver.sleep(3500)
    await driver.findElement(By.id('user-btn')).click();
    await driver.sleep(2500)
  
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
  } 
  //finally { await driver.quit() }
}

registerTest();



function generateRandomName() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const minLength = 2;
  const length = Math.floor(Math.random() * (alphabet.length - minLength + 1)) + minLength;
  let name = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      name += alphabet[randomIndex];
  }
  return name + '@gmail.com';
}
