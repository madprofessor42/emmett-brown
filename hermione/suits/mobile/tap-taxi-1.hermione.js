const summary = require('../../page_objects/summary')

describe('tap-taxi-1: Главная. Заказ такси с полным маршрутом', async () => {
    it('Полное флоу заказа такси должно пройти без ошибок', async ({browser}) => {
        await browser.auth('taxi-test');

        await summary.openPage(browser, 'testing', {comment: 'wait-10,search-10,speed-300'});

        await summary.address.addressFrom.waitUntilFromInputIsClickable(browser);
        await summary.address.addressFrom.clickOnFromInput(browser);

        await summary.address.addressSuggest.waitUntilSuggestIsDisplayed(browser);
        await summary.address.addressSuggest.addressFrom.waitUntilFromInputIsClickable(browser);
        await summary.address.addressSuggest.addressFrom.clickOnFromInput(browser);

        await summary.address.addressSuggest.addressFrom.waitUntilClearButtonIsClickable(browser);
        await summary.address.addressSuggest.addressFrom.clearFromAddress(browser)
        await summary.address.addressSuggest.addressFrom.typeFromAddress(browser, 'Проспект мира 112');

        await summary.address.addressSuggest.waitUntilSuggestOptionsAreClickable(browser);
        const fromAddress = await summary.address.addressSuggest.getOptionTextByNumber(browser, 3);
        await summary.address.addressSuggest.selectOptionByNumber(browser, 3);


        console.log(fromAddress);









    });
});

