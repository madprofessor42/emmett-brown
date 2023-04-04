/**
 * Здесь собраны локаторы + действия на странице Summary (главный экран)
 */
const commands = require('../commands')

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
                stand_url = 'https://taxi.tap-tst.yandex.ru';
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
            `${stand_url}/?${options}hide_fs_promotions=true&hide_promoblocks=true`
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
            tariffButtonImg: '//button[@data-testid="TariffButton"]//img',


            waitUntilTariffsAreDisplayed: async function(bro) {
                const tariffs = await bro.$(this.tariffButtonImg);
                await bro.waitUntil(async () => await tariffs.isDisplayed(), {timeout: 5000, timeoutMsg:'Not all tariffs are displayed'})

                // TODO: сделать проверку всех элементов, пока способ ниже не рабочий
//                tariffs.forEach((tariff) => {
//                    bro.waitUntil(async () => await tariff.isDisplayed(), {timeout: 5000, timeoutMsg: 'Not all tariffs are displayed'})
//                })
                },
            swipeTariffsLeft: async function(bro, distance) {
                const elem = await bro.$(this.tariffButton).parentElement();
                await commands.swipes.swipeLeft(bro, elem, distance);
                },
            swipeTariffsRight: async function(bro, distance) {
                const elem = await bro.$(this.tariffButton).parentElement();
                await commands.swipes.swipeRight(bro, elem, distance);
                },
            swipeTariffModalUp: async function(bro, distance) {

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
                await bro.waitUntil(async () => await modal.isDisplayed(), {timeout: 5000, timeoutMsg: 'Modal is not displayed'})
                },
            selectTariffOptionByName: async function(bro, optionName) {
                const option = await bro.$(this.containerShown).$(`//input[@title='${optionName}']//parent::label`)
                await option.click();
                },
            closeTariffModalBySwipe: async function(bro) {

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
    },

    /**
     * Селекторы сайдбара
     */
    sideBar: {
        sideBarHamburger: '//*[@id="root"]/span',
        sideBarClose: '//*[@class="SideBlock-Control"]',

        waitUntilHamburgerIsDisplayed: async function(bro) {
            const hamburger = await bro.$(this.sideBarHamburger);
            await bro.waitUntil(async () => await hamburger.isDisplayed(), {timeout: 5000, timeoutMsg: 'Hamburger menu is not displayed'})
            },
        clickOnHamburger: async function(bro) {
            const hamburger = await bro.$(this.sideBarHamburger);
            await hamburger.click();
            },
        closeSideBar: async function(bro) {
            const close_menu = await bro.$(this.sideBarClose);
            await close_menu.click();
        }
    }
}

