import { By, Builder } from 'selenium-webdriver';
import assert from 'assert';

async function firstTest() {
  let driver;
  
  try {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://devopsproject-v74y.onrender.com/');
  
    let title = await driver.getTitle();
    assert.equal("Web Store", title);

    await driver.navigate().to('https://devopsproject-v74y.onrender.com/signup')
    title = await driver.getTitle();
    assert.equal("Sign Up", title);
    await driver.sleep(1500)

    await driver.navigate().back()
    title = await driver.getTitle();
    assert.equal("Web Store", title);
    await driver.sleep(1500)

    await driver.navigate().forward()
    await driver.sleep(1500)
    await driver.navigate().to('https://devopsproject-v74y.onrender.com/404')
  
    await driver.manage().setTimeouts({ implicit: 10000 });
  
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
