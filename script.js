const converButton = document.querySelector(".convertbutton") //query selector precisa de . procurar uma classe
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-corrency").value
    const correncyValueConvert = document.querySelector(".currency-value-to-convert")//Valor em real
    const correncyValueConverd = document.querySelector(".currency-value") //outras moedas


    const dolarToday = 5.2
    const euroToday = 6.2


    if (currencySelect.value == "dolar") { //Se o select estiver selecionado o valor do dolar, entre aqui
        correncyValueConverd.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"

        }).format(inputCurrencyValue / dolarToday)

    }
    if (currencySelect.value == "euro") {
        correncyValueConverd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    correncyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

    }).format(inputCurrencyValue)


}
function changeCurrency (){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector (".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src="./assets/dolar.png"
    }
    if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src="./assets/euro.png"
    }
    convertValues()
}
currencySelect.addEventListener ("change", changeCurrency)
converButton.addEventListener("click", convertValues)

