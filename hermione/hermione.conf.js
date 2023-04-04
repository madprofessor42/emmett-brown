module.exports = {
    gridUrl: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost',
    pageLoadTimeout: 0,
    httpTimeout: 60000,
    testTimeout: 90000,
    resetCursor: false,
    sets: {
        desktop: {
            files: [
                'suits/desktop/*'
            ],
            browsers: [
                'chromeDesktop'
            ]
        },
        mobile: {
            files: [
                'suits/mobile/*'
            ],
            browsers: [
                'chromeMobile'
            ]
        }
    },
    browsers: {
        chromeDesktop: {
            automationProtocol: 'webdriver',
            desiredCapabilities: {
                browserName: 'chrome'
            }
        },
        chromeMobile: {
            testsPerSession: 15,                     // сколько тестов будет прогоняться в 1 браузере. По дефолту бесконечность
            sessionsPerBrowser: 1,                   // сколько тестов будет прогоняться одновременно (если поставить 5, то будет открыто 5 браузеров)
            automationProtocol: 'webdriver',
            desiredCapabilities: {
                browserName: 'chrome',
                "goog:chromeOptions": {
                    // Using iPhone 12 mobile emulation
                    mobileEmulation: {
                        deviceMetrics: {width: 390, height: 844, pixelRatio: 3.0},
                        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1'
                    }
                }
            }
        }
    },
    plugins: {
        'html-reporter/hermione': {
            // https://github.com/gemini-testing/html-reporter
            enabled: true,
            path: 'hermione-report',
            defaultView: 'all',
            diffMode: '3-up-scaled'
        },
        '@yandex-int/hermione-auth-commands': {
            enabled: true, // Включить плагин
            tus_consumer: 'tap-team', // Консьюмер для проекта в TUS txf-turboapp-taxi
            env: 'test', // Окружение Паспорта
            loginPrefix: 'yandex-team-', // Префикс, автоматически добавляемый перед логином, при вызове команды auth, authAny
            groupSize: 1, // Количество аккаунтов в группе, используется при вызовах команды authAny
            groupLockFor: 0, // Время блокировки аккаунта из группы, в секундах
            logAuth: false, // Логировать логин и пароль использованного для авторизации тестового аккаунта
            requestOptions: {} // Опции для запросов к TUS
        },
    }
}
