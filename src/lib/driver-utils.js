// @flow
const baseUrl = 'http://10.0.0.20:31000/'

export default {
  async goToHome (driver: WebDriverClass): Promise<void> {
    return driver.get(baseUrl)
  }
}
