# NennoPizzaAppiumCodeCeptJS

## Introduction 
This is a sample project for mobile automation with the following technologies

1. CodeCeptJS
2. Appium

## How to run the tests?
1. Install node from https://nodejs.org/en/download/
2. Appium following the instructions at https://codecept.io/mobile/#setting-up
3. Run `npm install` from the root folder.
4. Make sure the correct device details are provided at codecept.conf.ts; make sure that the values for device and platformVersion correspond to your emulator details 
5. Run the tests by running the command `npm run tests`

## Reports
The report used is allure reports and its automatically opened once the tests runs are done; or by running the command `allure serve output`
Please ensure you have allure command line tools installed with `npm install -g allure-commandline`