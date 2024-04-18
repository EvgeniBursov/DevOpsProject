import { By, Builder, until, Key} from 'selenium-webdriver';
import assert from 'assert';
import { describe, beforeEach, afterEach, it } from 'mocha';

describe('pages', function() {
  this.timeout(50000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('pages', async function() {
    await driver.get("https://devopsproject-v74y.onrender.com/")
    await driver.manage().window().setRect({ width: 1552, height: 840 })
    await driver.findElement(By.css(".nxt-btn")).click()
    await driver.findElement(By.css(".nxt-btn")).click()
    await driver.findElement(By.css(".link-item:nth-child(1) > .link")).click()
    await driver.findElement(By.id("cart-img")).click()
    await driver.findElement(By.id("buy-btn")).click()
    assert(await driver.switchTo().alert().getText() == "Please Login in system or add products")
    await driver.findElement(By.css(".nav-items > a:nth-child(3)")).click()
    await driver.findElement(By.id("cart-img")).click()
    await driver.findElement(By.id("user-img")).click()
    await driver.findElement(By.css(".hero-section")).click()
    await driver.findElement(By.css(".nav")).click()
    await driver.findElement(By.xpath("(//button[@id=\'user-btn\'])[2]")).click()
    await driver.findElement(By.id("create")).click()
    await driver.findElement(By.id("home")).click()
    await driver.findElement(By.id("user-img")).click()
    await driver.findElement(By.id("user-btn")).click()
    await driver.findElement(By.id("login")).click()
    await driver.findElement(By.id("home")).click()
    await driver.close()
  })
})
