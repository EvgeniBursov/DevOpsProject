import { By, Builder, until, Key} from 'selenium-webdriver';
import assert from 'assert';
import { describe, beforeEach, afterEach, it } from 'mocha';

describe('Pages', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Pages', async function() {
    await driver.get("https://devopsproject-v74y.onrender.com/")
    await driver.manage().window().setRect({ width: 978, height: 824 })
    await driver.findElement(By.css(".pre-btn")).click()
    await driver.findElement(By.css(".nxt-btn")).click()
    await driver.findElement(By.css(".nxt-btn > img")).click()
    await driver.findElement(By.id("user-img")).click()
    await driver.findElement(By.id("user-btn")).click()
    await driver.findElement(By.id("login")).click()
    await driver.findElement(By.id("home")).click()
    await driver.findElement(By.id("user-img")).click()
    await driver.findElement(By.xpath("(//button[@id=\'user-btn\'])[2]")).click()
    await driver.findElement(By.css(".container")).click()
    await driver.findElement(By.id("create")).click()
    await driver.findElement(By.id("home")).click()
    await driver.close()
  })
})
