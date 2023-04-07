module.exports = {

    /**
     * Селекторы сайдбара
     */
    sideBarHamburger: '//*[@id="root"]/span',
    sideBarClose: '//*[@class="SideBlock-Control"]',

    waitUntilHamburgerIsDisplayed: async function (bro) {
        const hamburger = await bro.$(this.sideBarHamburger);
        await bro.waitUntil(async () => await hamburger.isDisplayed(), {
            timeout: 5000,
            timeoutMsg: 'Hamburger menu is not displayed'
        })
    },
    clickOnHamburger: async function (bro) {
        const hamburger = await bro.$(this.sideBarHamburger);
        await hamburger.click();
    },
    closeSideBar: async function (bro) {
        const close_menu = await bro.$(this.sideBarClose);
        await close_menu.click();
    }

}