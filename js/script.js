{


    const calculateResult = (amount, currency) => {
        const EUR = 4.50;
        const USD = 4.17;
        const CZK = 0.1919;
        const UAH = 0.1137;
        const RUB = 0.519;

        switch (currency) {
            case "EUR":
                return amount / EUR;

            case "USD":
                return amount / USD;

            case "CZK":
                return amount / CZK;

            case "UAH":
                return amount / UAH;

            case "RUB":
                return amount / RUB;

        };

    };

    const onResultUpdateText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`
    }

    const onFormInput = () => {
        const amountElement = document.querySelector(".js-amount");
        const currencyElected = document.querySelector(".js-currencyElected");
        
        const amount = +amountElement.value;
        const currency = currencyElected.value;
        
        const result = calculateResult(amount, currency);
        onResultUpdateText(amount, result, currency);

    };

    const init = () => {

        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("input", onFormInput);
    };

    init();

}