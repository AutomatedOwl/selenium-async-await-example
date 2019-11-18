// @flow
import HomePage from './../src/pageobjects/HomePage'
import DriverBuilder from './../src/lib/DriverBuilder'
import driverutils from './../src/lib/driver-utils'
import { By } from 'selenium-webdriver'
const sleep = require('util').promisify(setTimeout)

describe('Acceptance Tests', function () {
  let driverBuilder
  let driver

  beforeEach(async function () {
    driverBuilder = new DriverBuilder()
    driver = driverBuilder.driver
    await driverutils.goToHome(driver)
  })

  it('Loads the home page', async function () {
    const homePage = new HomePage(driver)
    // await homePage.isLoaded()
    // const title = await homePage.getTitle()
    await homePage.sendKeys(By.xpath('//textarea'), process.env.npm_config_input_text)
    await sleep(90000)
  })

  afterEach(async function () {
    await driverBuilder.quit()
  })
})
