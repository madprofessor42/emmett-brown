const summary = require('../../page_objects/summary')

describe('Test', async () => {
    it('check mocks', async ({browser}) => {

        await browser.auth('taxi');

        await summary.openPage(browser, 'testing');

        await browser.pause(2000);
        await summary.sideBar.waitUntilHamburgerIsDisplayed(browser);
        await summary.sideBar.clickOnHamburger(browser);
        await browser.pause(2000);
        await summary.sideBar.closeSideBar(browser);

        await summary.tariff.tariffElements.waitUntilTariffsAreDisplayed(browser);
        await summary.tariff.tariffElements.selectTariffById(browser, 4);
        await browser.pause(5000);





    });
});

