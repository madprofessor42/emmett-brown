/**
 * Здесь собраны локаторы + действия на странице Summary (главный экран)
 */
const commands = require('../commands')
const extra_config = require('../../env')

module.exports = {
    /**
     *
     * @param bro
     * @param env
     * @param query
     * @returns {Promise<void>}
     */
    async openPage(bro, env, query= {}) {
        let stand_url;
        switch (env) {
            case 'testing':
                stand_url = extra_config.environment.testing;
                break;
            case 'prod':
                stand_url = '';
                break;
            default:
                throw new Error(`Stand must be testing or prod, speciifed stand is ${env}`)
        }

        let options = "";
        Object.keys(query).forEach(key => {
            options += `${key}=${query[key]}&`;
        })

        await bro.url(
            `${stand_url}/?${options}`
        );
    },





    /**
     * Селекторы тарифов (тарифы, имя тарифа, цена, сурж, Такси/Ультима и тд) + методы
     */
    tariff: {
        tariffVertical: {

        },
        tariffElements: {
            tariffButton: '//button[@data-testid="TariffButton"]',
            tariffButtonActive: '//button[@data-testid="TariffButton_active"]',


            waitUntilTariffsAreClickable: async function(bro) {
                const tariffs = await bro.$$(this.tariffButton);
                await bro.waitUntil(() => tariffs.every(elem => elem.isClickable()), {timeout: 10000, timeoutMsg: 'Not every tariff element is clickable'});
                },
            swipeTariffsLeft: async function(bro, distance) {
                const elem = await bro.$(this.tariffButton).parentElement();
                await commands.swipes.swipeLeft(bro, elem, distance);
                },
            swipeTariffsRight: async function(bro, distance) {
                const elem = await bro.$(this.tariffButton).parentElement();
                await commands.swipes.swipeRight(bro, elem, distance);
                },
            selectTariffByName: async function(bro, tariffName) {
                const tariff = await bro.$(this.tariffButton).$(`//span[text()='${tariffName}']`);
                await tariff.click();
                },
            selectTariffById: async function(bro, tariffId) {
                const tariff = await bro.$(`//button[@data-testid="TariffButton"][${tariffId}]`);
                await tariff.click();
                },
            clickOnSelectedTariff: async function(bro) {
                const active_tariff = await bro.$(this.tariffButtonActive);
                await active_tariff.click();
                }
            },
        tariffInfo: {
            containerShown: '//div[@data-testid="TariffRequirementsModal_expanded"]',
            containerHidden: '//div[@data-testid="TariffRequirementsModal_collapsed"]',


            waitUntilTariffInfoIsDisplayed: async function(bro) {
                const modal = await bro.$(this.containerShown);
                await modal.waitForDisplayed();
                },
            selectTariffOptionByName: async function(bro, optionName) {
                const option = await bro.$(this.containerShown).$(`//input[@title='${optionName}']//parent::label`)
                await option.click();
                }
        }
        },

    /**
     * Селекторы выбора адреса
     */
    address: {
        addressSuggest: {

        },
        addressFrom: {

        },
        addressTo: {

        }
    }

}

