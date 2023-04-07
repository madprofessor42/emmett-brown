module.exports = {

    /**
     * Селекторы выбора адреса
     */
    addressFrom: {
        fromInput: '(//div[contains(@class, "address")]//div[contains(@class, "main")])[1]',

        waitUntilFromInputIsClickable: async function (bro) {
            const input = await bro.$(this.fromInput);
            await bro.waitUntil(async () => await input.isClickable(), {
                timeout: 5000,
                timeoutMsg: 'fromInput is not clickable'
            })
        },
        clickOnFromInput: async function (bro) {
            const input = await bro.$(this.fromInput);
            await input.click();
        }

    },
    addressTo: {
        toInput: '(//div[contains(@class, "address")]//div[contains(@class, "main")])[2]',

        waitUntilToInputIsClickable: async function (bro) {
            const input = await bro.$(this.toInput);
            await bro.waitUntil(async () => await input.isClickable(), {
                timeout: 5000,
                timeoutMsg: 'toInput is not clickable'
            })
        },
        clickOnToInput: async function (bro) {
            const input = await bro.$(this.toInput);
            await input.click();
        }

    },
    addressSuggest: {
        suggestBox: '//div[@data-testid="AddressSuggest_container"]',
        suggestOptions: '//div[@data-testid="AddressSuggest_container"]//div[@role="option"]',

        waitUntilSuggestIsDisplayed: async function (bro) {
            const suggest = await bro.$(this.suggestBox);
            await bro.waitUntil(async () => await suggest.isDisplayed(), {
                timeout: 5000,
                timeoutMsg: 'Suggest is not displayed'
            })
        },
        waitUntilSuggestOptionsAreClickable: async function (bro) {
            const options = await bro.$$(this.suggestOptions);
            options.forEach(option => {
                bro.waitUntil(async () => await option.isClickable(), {
                    timeout: 5000,
                    timeoutMsg: 'Not all options are clickable'
                })
            })
        },
        // TODO: Нужно подумать, а нужно ли реализовать данную функцию
//            getOptionTextByNumber: async function (bro, optionNumber) {
//                const optionText = await bro.$$(`(//div[@data-testid="AddressSuggest_container"]//div[@role="option"])[${optionNumber}]//span`)
//                const arr = [];
//                optionText.forEach(text => {
//                    arr.push(text.getText());
//                })
//                return arr;
//            },
        selectOptionByNumber: async function (bro, optionNumber) {
            const option = await bro.$(`(//div[@data-testid="AddressSuggest_container"]//div[@role="option"])[${optionNumber}]`);
            await option.click();
        },


        addressFrom: {
            fromInput: '//div[@data-testid="AddressSuggest_container"]/div[contains(@class, "search")]/div[1]//span[contains(@class, "Textarea ")]',
            fromInputTextarea: '(//div[@data-testid="AddressSuggest_container"]//textarea)[1]',
            fromInputClearButton: '(//div[@data-testid="AddressSuggest_container"]//span[contains(@class, "Icon")])[1]',

            waitUntilFromInputIsClickable: async function (bro) {
                const fromInput = await bro.$(this.fromInput);
                await bro.waitUntil(async () => await fromInput.isClickable(), {
                    timeout: 5000,
                    timeoutMsg: 'fromInput is not clickable'
                })
            },

            clickOnFromInput: async function (bro) {
                const fromInput = await bro.$(this.fromInput);
                await fromInput.click();
            },
            typeFromAddress: async function (bro, address) {
                const fromInput = await bro.$(this.fromInputTextarea);
                await fromInput.setValue(address);
            },

            waitUntilClearButtonIsClickableAndDisplayed: async function (bro) {
                const clearBtn = await bro.$(this.fromInputClearButton);
                await bro.waitUntil(async () => await (clearBtn.isClickable() && clearBtn.isDisplayed()), {
                    timeout: 5000,
                    timeoutMsg: 'clearBtn is not clickable'
                })
            },
            clearFromAddress: async function (bro) {
                const clearBtn = await bro.$(this.fromInputClearButton);
                clearBtn.click();
            }

        },
        addressTo: {
            toInput: '//div[@data-testid="AddressSuggest_container"]/div[contains(@class, "search")]/div[2]//span[contains(@class, "Textarea ")]',
            toInputTextarea: '(//div[@data-testid="AddressSuggest_container"]//textarea)[2]',
            toInputClearButton: '(//div[@data-testid="AddressSuggest_container"]//span[contains(@class, "Icon")])[2]',

            waitUntilToInputIsClickable: async function (bro) {
                const toInput = await bro.$(this.toInput);
                await bro.waitUntil(async () => await toInput.isClickable(), {
                    timeout: 5000,
                    timeoutMsg: 'toInput is not clickable'
                })
            },

            clickOnToInput: async function (bro) {
                const toInput = await bro.$(this.toInput);
                await toInput.click();
            },
            typeToAddress: async function (bro, address) {
                const toInput = await bro.$(this.toInputTextarea);
                await toInput.setValue(address);
            },

            waitUntilClearButtonIsClickableAndDisplayed: async function (bro) {
                const clearBtn = await bro.$(this.toInputClearButton);
                await bro.waitUntil(async () => await (clearBtn.isClickable() && clearBtn.isDisplayed()), {
                    timeout: 5000,
                    timeoutMsg: 'clearBtn is not clickable'
                })
            },
            clearToAddress: async function (bro) {
                const clearBtn = await bro.$(this.toInputClearButton);
                clearBtn.click();
            },
            checkToInputIsFocused: async function (bro) {
                const toInput = await bro.$(this.toInputTextarea);
                bro.waitUntil(async () => await toInput.isFocused(), {
                    timeout: 5000,
                    timeoutMsg: 'toInput is not focused'
                })

            }

        },
    },
}