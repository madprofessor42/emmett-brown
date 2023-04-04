module.exports = {
    /**
     * Для свайпа указываем контейнер с элементами (не просто элемент с тарифом, а его родительский элемент)
     * @param {Object} bro
     * @param {Object} element
     * @param {Number} distance
     */
    async swipeLeft(bro, element, distance) {
        if (!element.isDisplayedInViewport()){
            throw new Error('Element is not visible in ViewPort');
        }

        const location = await element.getLocation();
        const size = await element.getSize();

        // Определяем середину элемента по y и конец элемента по x
        const start_point = {
            x: Math.floor(location.x + size.width - 1),
            y: Math.floor(location.y + size.height / 2)
        }

        // Если конец элемента находится за рамками экрана (например список тарифов), то ставим курсор в конец элемента который виден на экране
        const app_size = await bro.$('div#root').getSize();
        if (start_point.x >= app_size.width) {
            start_point.x = app_size.width - 1;
        }

        // Если переданный distance выйдет за рамки экрана
        if ((start_point.x - distance) < 0 ){
            distance = start_point.x
        }

        await bro.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: {pointerType: 'touch'},
                actions: [
                    {type: 'pointerMove', duration: 0, x: start_point.x, y: start_point.y},
                    {type: 'pointerDown', button: 0},
                    {type: 'pause', duration: 200},
                    {type: 'pointerMove', duration: 200, x: start_point.x - distance, y: start_point.y},
                    {type: 'pointerUp', button: 0}
                ]
            }
        ])
    },



    /**
     * Для свайпа указываем контейнер с элементами (не просто элемент с тарифом, а его родительский элемент)
     * @param {Object} bro
     * @param {Object} element
     * @param {Number} distance
     */
    async swipeRight(bro, element, distance) {
        if (!element.isDisplayedInViewport()){
            throw new Error('Element is not visible in ViewPort');
        }

        const location = await element.getLocation();
        const size = await element.getSize();

        // Определяем середину элемента по y и начало элемента по x
        const start_point = {
            x: location.x + 1,
            y: Math.floor(location.y + size.height / 2)
        };

        // Если начало элемента находится за рамками экрана, то ставим курсор в начало элемента, который виден на экране
        if (start_point.x <= 0) {
            start_point.x = 1;
        }

        // Если переданный distance выйдет за рамки экрана
        const app_size = await bro.$('div#root').getSize();
        if ((start_point.x + distance) > app_size.width ){
            distance = app_size.width - start_point.x
        }


        await bro.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: {pointerType: 'touch'},
                actions: [
                    {type: 'pointerMove', duration: 0, x: start_point.x, y: start_point.y},
                    {type: 'pointerDown', button: 0},
                    {type: 'pause', duration: 200},
                    {type: 'pointerMove', duration: 200, x: start_point.x + distance, y: start_point.y},
                    {type: 'pointerUp', button: 0}
                ]
            }
        ])
    }
}
