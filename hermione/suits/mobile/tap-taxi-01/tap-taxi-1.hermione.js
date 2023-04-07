const summary = require('../../../page_objects/summary');

describe('tap-taxi-1: Главная. Заказ такси с полным маршрутом', async () => {
    it('Полное флоу заказа такси должно пройти без ошибок', async ({browser}) => {
        await browser.auth('taxi-01');

        await summary.openPage(browser, 'testing', {comment: 'wait-10,search-10,speed-300'});

        await summary.address.addressFrom.waitUntilFromInputIsClickable(browser);
        await summary.address.addressFrom.clickOnFromInput(browser);

        // Используем явное ожидание, так как иначе придется писать строк 5 кода на проверку, что каждый элемент отобразился
        await browser.pause(1000);

        await summary.address.addressSuggest.addressFrom.clickOnFromInput(browser);

        await summary.address.addressSuggest.addressFrom.waitUntilClearButtonIsClickableAndDisplayed(browser);
        await summary.address.addressSuggest.addressFrom.clearFromAddress(browser)
        await summary.address.addressSuggest.addressFrom.typeFromAddress(browser, 'Проспект мира 112');
        await summary.address.addressSuggest.waitUntilSuggestOptionsAreClickable(browser);
        await summary.address.addressSuggest.selectOptionByNumber(browser, 1);

        await summary.address.addressSuggest.addressTo.checkToInputIsFocused(browser);
        await summary.address.addressSuggest.addressTo.typeToAddress(browser, 'Льва толстого 16');
        await summary.address.addressSuggest.waitUntilSuggestOptionsAreClickable(browser);
        await summary.address.addressSuggest.selectOptionByNumber(browser, 1);

        // Ждем что suggest закрылся и карта прогрузилась вместе с ценой
        await browser.pause(2500);

        await summary.tariffs.tariffInfo.assertViewOfTariffInfoCollapsed(browser);



















    });
});

