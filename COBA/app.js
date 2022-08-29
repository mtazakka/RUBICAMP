var baseUrl = "https://api.coinranking.com/v2/coins"
var proxyURL = "https://cors-anywhere.herokuapp.com/"
var apiURL = `${proxyURL}${baseUrl}`
var coinsData = []

let pageSize = 10
let currentPage = 1
async function renderTable() {
    await getData()

    var cryptoCoin = ''
    console.log(coinsData)
    coinsData.filter((row, index) => {
        let start = (currentPage - 1) * pageSize
        let end = currentPage * pageSize

        if (index >= start && index < end) return true;
    }).forEach(coin => {
        cryptoCoin += "<tr>"
        cryptoCoin += `<td>${parseFloat(coin.btcPrice).toFixed(6)}</td>`
        cryptoCoin += `<td>${coin.rank}</td>`
        cryptoCoin += `<td>${coin.tier}</td>`
        cryptoCoin += `<td>${coin.name}</td>`
        cryptoCoin += `<td>${Math.round(coin.price)} Billion</td>`
        cryptoCoin += `<td>${coin.symbol}</td>`
        "<tr>"
    })
    document.getElementById("data").innerHTML = cryptoCoin
}
renderTable()

function previousPage() {
    if (currentPage > 1)
        currentPage--;
    renderTable()
}
function nextPage() {
    if ((currentPage * pageSize) < coinsData.length)
        currentPage++;
    renderTable()
}

document.querySelector('#prevButton').addEventListener('click', previousPage, false)
document.querySelector('#nextButton').addEventListener('click', nextPage, false)

//FETCH DATA
async function getData() {
    const response = await fetch(apiURL);
    const coins = await response.json()
    coinsData = coins.data.coins

}
getData()