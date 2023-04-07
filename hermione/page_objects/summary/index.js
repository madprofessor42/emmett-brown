const tariffs = require('./tariffs');
const address = require('./address');
const order = require('./order');
const map = require('./map');
const sideBar = require('./sideBar');


module.exports = {
    tariffs,
    address,
    order,
    map,
    sideBar,

    /**
     *
     * @param bro
     * @param env
     * @param query
     * @returns {Promise<void>}
     */
    async openPage(bro, env, query = {}) {
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


}