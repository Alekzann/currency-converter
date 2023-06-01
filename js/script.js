let amountElement = document.querySelector(".js-amount");
let currencyElected = document.querySelector(".js-currencyElected");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result")

let EUR = 4.50;
let USD = 4.17;
let CZK = 0.1919;
let UAH = 0.1137;
let RUB = 0.519;

formElement.addEventListener("input", () => {
    let amount = +amountElement.value;
    let currency = currencyElected.value;
    let result;
    switch (currency) {
        case "EUR":
            result = amount / EUR;
            break;
        case "USD":
            result = amount / USD;
            break;
        case "CZK":
            result = amount / CZK;
            break;
        case "UAH":
            result = amount / UAH;
            break;
        case "RUB":
            result = amount / RUB;
            break;
    }
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`
})


