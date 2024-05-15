import { By, Builder, until, Key} from 'selenium-webdriver';
import assert from 'assert';
import { describe, beforeEach, afterEach, it } from 'mocha';

describe('login', function() {
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
  it('login', async function() {
    await driver.get("https://devopsproject-v74y.onrender.com/")
    await driver.manage().window().setRect({ width: 1936, height: 1056 })
    await driver.findElement(By.id("user-img")).click()
    await driver.findElement(By.xpath("(//button[@id=\'user-btn\'])[2]")).click()
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("Bursov@gmail.com")
    await driver.findElement(By.id("password")).sendKeys("123456")
    await driver.findElement(By.css(".submit-btn")).click()
    await driver.close()
  })
})
