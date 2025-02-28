// @flow
import webdriver from 'selenium-webdriver'

export default class DriverBuilder {
  driver: WebDriverClass

  constructor () {
    const builder = new webdriver.Builder().usingServer('http://10.0.0.20:31112/wd/hub')
    // $FlowIssue getting chrome capabilities as method is a-ok
    const capabilities = webdriver.Capabilities['chrome']()
    builder.withCapabilities(capabilities)
    this.driver = builder.build()
  }

  async quit (): Promise<void> {
    return this.driver.quit()
  }
}
