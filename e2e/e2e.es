var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://localhost:6060/Week-01/index.html');
driver.findElement(By.id('hand')).click();
driver.findElement(By.name('num')).isDisplayed();
driver.wait(until.titleIs('点赞'), 5000);
driver.quit();