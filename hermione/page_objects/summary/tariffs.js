const commands = require("../../commands");
const {mapContainer} = require("./map");

module.exports = {

    /**
     * Селекторы тарифов (тарифы, имя тарифа, цена, сурж, Такси/Ультима и тд) + методы
     */

    tariffVertical: {},
    tariffElements: {
        tariffButton: '//button[@data-testid="TariffButton"]',
        tariffButtonActive: '//button[@data-testid="TariffButton_active"]',
        tariffButtonImg: '//button[@data-testid="TariffButton"]//img',


        waitUntilTariffsAreDisplayed: async function (bro) {
            const tariffs = await bro.$$(this.tariffButtonImg);
            tariffs.forEach(tariff => {
                bro.waitUntil(async () => await tariff.isDisplayed(), {
                    timeout: 5000,
                    timeoutMsg: 'Not all tariffs are displayed'
                })
            })
        },
        swipeTariffsLeft: async function (bro, distance) {
            const elem = await bro.$(this.tariffButton).parentElement();
            await commands.swipes.swipeLeft(bro, elem, distance);
        },
        swipeTariffsRight: async function (bro, distance) {
            const elem = await bro.$(this.tariffButton).parentElement();
            await commands.swipes.swipeRight(bro, elem, distance);
        },
        swipeTariffModalUp: async function (bro, distance) {

        },
        selectTariffByName: async function (bro, tariffName) {
            const tariff = await bro.$(this.tariffButton).$(`//span[text()='${tariffName}']`);
            await tariff.click();
        },
        selectTariffById: async function (bro, tariffId) {
            const tariff = await bro.$(`//button[@data-testid="TariffButton"][${tariffId}]`);
            await tariff.click();
        },
        clickOnSelectedTariff: async function (bro) {
            const active_tariff = await bro.$(this.tariffButtonActive);
            await active_tariff.click();
        }
    },
    tariffInfo: {
        containerShown: '//div[@data-testid="TariffRequirementsModal_expanded"]',
        containerHidden: '//div[@data-testid="TariffRequirementsModal_collapsed"]',


        waitUntilTariffInfoIsDisplayed: async function (bro) {
            const modal = await bro.$(this.containerShown);
            await bro.waitUntil(async () => await modal.isDisplayed(), {
                timeout: 5000,
                timeoutMsg: 'Modal is not displayed'
            })
        },
        selectTariffOptionByName: async function (bro, optionName) {
            const option = await bro.$(this.containerShown).$(`//input[@title='${optionName}']//parent::label`)
            await option.click();
        },
        closeTariffModalBySwipe: async function (bro) {

        },

        async assertViewOfTariffInfoCollapsed(bro, ignoreElements = []) {
            ignoreElements.push(mapContainer)
            await bro.assertView('formTariffInfoCollapsed', this.containerHidden, {
                ignoreElements: [...ignoreElements],
                screenshotDelay: 5
            })
        },
        async assertViewOfTariffInfoExpanded(bro, ignoreElements = []) {
            await ignoreElements.push(mapContainer)
            await bro.assertView('formTariffInfoExpanded', this.containerShown, {
                ignoreElements: [...ignoreElements],
                screenshotDelay: 5
            })
        },
    }
}