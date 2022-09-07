import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './**/*_test.ts',
  output: './output',
  helpers: {
    "Appium": {
      "platform": "android",
      "automationName": "uiautomator2",
      "deviceName": "13251JEC203081",
      "fullReset": true,
      "enablePerformanceLogging": true,
      "platformVersion": "12",
      "app": "/Users/admin/Learn/CodeCeptAppiumSample/NennoPizzaAppiumCodeCeptJS/app/nennosPizza.apk"
    }
  },
  include: {},
  name: 'CodeCeptJS',
  "plugins": {
    "allure": {
      "outputDir":"output"
    }
}

}