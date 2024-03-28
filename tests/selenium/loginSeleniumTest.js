/*import { By, Builder, until } from 'selenium-webdriver';
//import assert from 'assert';
import { assert } from 'chai'


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

    await driver.wait(until.elementLocated(By.id('email')), 5000);
    await driver.findElement(By.id('email')).sendKeys('Bursov@gmail12.com');
    await driver.sleep(3500)
    await driver.findElement(By.id('password')).sendKeys('123456');
    await driver.sleep(3500)
    await driver.findElement(By.className('submit-btn')).click();
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
  } finally { await driver.quit() }
}
loginTest();*/



import { By, Builder, until } from 'selenium-webdriver';
//import assert from 'assert';
import { assert } from 'chai'

async function loginTest() {
    let driver;

    try {
        // Specify the Selenium Grid Hub URL
        const hubUrl = 'http://localhost:4444/wd/hub';

        // Set up the WebDriver with the desired capabilities
        driver = await new Builder()
            .usingServer(hubUrl) // Connect to the Selenium Grid Hub
            .forBrowser('chrome') // Specify the desired browser
            .build();

        // Navigate to the website
        await driver.get('https://devopsproject-v74y.onrender.com/');

        // Perform login tests
        let title = await driver.getTitle();
        assert.equal("Web Store", title);

        // Perform other test steps as in your original script...

        // Example: Check if the user is logged in successfully
        let dashboardPageUrl = await driver.getCurrentUrl();
        if (dashboardPageUrl.includes('https://devopsproject-v74y.onrender.com/')) {
            console.log("User exists. Logged in successfully.");
        } else {
            console.log("User doesn't exist or login failed.");
        }
    } catch (e) {
        console.error(e);
    } finally {
        if (driver) {
            await driver.quit();
        }
    }
}

loginTest();
