// @flow
const baseUrl = 'https://testjs2.000webhostapp.com/'

export default {
  async goToHome (driver: WebDriverClass): Promise<void> {
    return driver.get(baseUrl)
  }
}
