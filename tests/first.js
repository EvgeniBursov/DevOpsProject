import { By, Builder, Key, until } from 'selenium-webdriver';
import assert from 'assert';

async function firstTest() {
  let driver;
  
  try {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://devopsproject-v74y.onrender.com/');
  
    let title = await driver.getTitle();
    assert.equal("Web Store", title);

    /*
    await driver.navigate().to('https://devopsproject-v74y.onrender.com/signup')
    title = await driver.getTitle();
    assert.equal("Sign Up", title);
    await driver.sleep(1500)

    await driver.navigate().back()
    title = await driver.getTitle();
    assert.equal("Web Store", title);
    await driver.sleep(1500)

    await driver.navigate().to('https://devopsproject-v74y.onrender.com/login')
    title = await driver.getTitle();
    assert.equal("Login Page", title);
    await driver.sleep(1500)*/

    /*login check*/ 
    /*await driver.wait(until.elementLocated(By.id('email')), 5000);
    await driver.findElement(By.id('email')).sendKeys('Bursov@gmail.com');
    await driver.sleep(3500)
    await driver.findElement(By.id('password')).sendKeys('123456');
    await driver.sleep(3500)
    await driver.findElement(By.className('submit-btn')).click();
    await driver.sleep(3500)
    await driver.wait(until.urlContains('https://devopsproject-v74y.onrender.com/'), 5000);
    let dashboardPageUrl = await driver.getCurrentUrl();
    if (dashboardPageUrl.includes('https://devopsproject-v74y.onrender.com/')) {
      console.log("User exists. Logged in successfully.");
  } else {
      console.log("User doesn't exist or login failed.");
  }*/

  /*register check*/ 
  /*
  await driver.findElement(By.id('user-img')).click();
  await driver.sleep(3500)
  await driver.findElement(By.className('reg_btn')).click();
  await driver.sleep(2500)

  await driver.wait(until.elementLocated(By.id('name')), 5000);
  await driver.findElement(By.id('name')).sendKeys('Rita');

  await driver.wait(until.elementLocated(By.id('email')), 5000);
  await driver.findElement(By.id('email')).sendKeys('rita1234@gmail.com');

  await driver.wait(until.elementLocated(By.id('password')), 5000);
  await driver.findElement(By.id('password')).sendKeys('123456');

  await driver.wait(until.elementLocated(By.id('number')), 5000);
  await driver.findElement(By.id('number')).sendKeys('987654321');

  await driver.findElement(By.className('submit-btn')).click();
  await driver.sleep(3500)

  await driver.wait(until.urlContains('https://devopsproject-v74y.onrender.com/'), 5000);
  let pageUrl = await driver.getCurrentUrl();
  if (pageUrl.includes('https://devopsproject-v74y.onrender.com/')) {
    console.log("User register successfully.");
} else {
    console.log("User registration failed.");
}*/


  //await driver.navigate().forward()
  //await driver.sleep(1500)
  //await driver.navigate().to('https://devopsproject-v74y.onrender.com/404')
  
    await driver.manage().setTimeouts({ implicit: 50000 });
  
    /*let textBox = await driver.findElement(By.name('my-text'));
    let submitButton = await driver.findElement(By.css('button'));
  
    await textBox.sendKeys('Selenium');
    await submitButton.click();
  
    let message = await driver.findElement(By.id('message'));
    let value = await message.getText();
    assert.equal("Received!", value);*/
  } catch (e) {
    console.error(e);
  } finally { await driver.quit() }
}

firstTest();
