const summary = require('../page_objects/summary');

describe('Test swipe functionality', async function() {
    it('Swipe tariffs', async function() {
        const bro = this.browser;
        await bro.auth('taxi');



        await summary.openPage(bro, 'testing', {comment:"search-10,wait-10,speed-300"});
        await bro.pause(15000);

        await summary.tariff.tariffElements.waitUntilTariffsAreClickable(bro);
        await summary.tariff.tariffElements.selectTariffById(bro, 3);


        await bro.pause(2000);
    });
});



