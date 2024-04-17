import { By, Builder, until } from 'selenium-webdriver';
//import assert from 'assert';
import { assert } from 'chai'


describe('Untitled', function() {
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
  it('Untitled', async function() {
    await driver.get("https://devopsproject-v74y.onrender.com/")
    await driver.manage().window().setRect({ width: 1552, height: 840 })
    await driver.findElement(By.id("card-btn4")).click()
    assert(await driver.switchTo().alert().getText() == "Please Login in system")
    await driver.findElement(By.id("card-btn5")).click()
    assert(await driver.switchTo().alert().getText() == "Please Login in system")
    await driver.findElement(By.css(".nxt-btn > img")).click()
    await driver.findElement(By.id("cart-count")).click()
    await driver.findElement(By.id("cart-img")).click()
    await driver.findElement(By.id("buy-btn")).click()
    assert(await driver.switchTo().alert().getText() == "Please Login in system or add products")
    await driver.findElement(By.id("cart-img")).click()
    await driver.findElement(By.id("user-img")).click()
    await driver.findElement(By.xpath("(//button[@id=\'user-btn\'])[2]")).click()
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("Bursov@gmai.co")
    await driver.findElement(By.id("password")).sendKeys("123456")
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("Bursov@gmai.com")
    await driver.findElement(By.css(".submit-btn")).click()
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("Bursov@gmail.com")
    await driver.findElement(By.css(".submit-btn")).click()
    await driver.close()
  })
})
