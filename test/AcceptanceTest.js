// @flow
import HomePage from './../src/pageobjects/HomePage'
import DriverBuilder from './../src/lib/DriverBuilder'
import driverutils from './../src/lib/driver-utils'

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
    await homePage.isLoaded()
    const title = await homePage.getTitle()
    console.log(title)
    
  })

  afterEach(async function () {
    await driverBuilder.quit()
  })
})
