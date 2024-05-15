import { By, Builder, until, Key} from 'selenium-webdriver';
import assert from 'assert';
import { describe, beforeEach, afterEach, it } from 'mocha';


describe('Register', function() {
  this.timeout(80000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Register', async function() {
    await driver.get("https://devopsproject-v74y.onrender.com/")
    await driver.manage().window().setRect({ width: 1552, height: 840 })
    await driver.findElement(By.id("user-img")).click()
    await driver.findElement(By.id("user-btn")).click()
    await driver.findElement(By.css(".submit-btn")).click()
    await driver.findElement(By.css("body")).click()
    await driver.findElement(By.id("name")).click()
    await driver.findElement(By.id("name")).sendKeys("asd")
    await driver.findElement(By.css(".submit-btn")).click()
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("Bursov@gmail.com")
    await driver.findElement(By.css(".submit-btn")).click()
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.css("body")).click()
    await driver.findElement(By.css("body")).click()
    await driver.findElement(By.id("password")).sendKeys("123456")
    await driver.findElement(By.id("number")).click()
    await driver.findElement(By.id("number")).sendKeys("123")
    await driver.findElement(By.css(".submit-btn")).click()
    await driver.findElement(By.css("body")).click()
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("Bursov12345@gmail.com")
    await driver.findElement(By.css(".submit-btn")).click()
    await driver.findElement(By.id("user-img")).click()
    await driver.findElement(By.css(".login-logout-popup")).click()
    await driver.findElement(By.css(".hero-section")).click()
    await driver.findElement(By.id("user-btn")).click()
    await driver.close()
  })
})
