import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: '',
  output: './output',
  helpers: {
    Appium: {
      platform: "android",
      device: "emulator-5554",
      app: "/Users/admin/Learn/CodeCeptAppiumSample/NennoPizzaAppiumCodeCeptJS/app/nennosPizza.apk",
      desiredCapabilities: {
        automationName: "uiautomator2",
        fullReset: true,
        platformVersion: "11"  
      }
    }
  },
  include: {},
  name: 'CodeCeptJS',
  "plugins": {
    "allure": {
      "outputDir":"output"
    }
  },

  "gherkin": {
    "features": [
        "./features/*.feature",
        "./features/api_features/*.feature"
      ],
    "steps": [
      "./step_definitions/custom_steps.ts",
      "./step_definitions/ricci_steps.ts",
      "./step_definitions/drinks_steps.ts"
    ]
    }
};