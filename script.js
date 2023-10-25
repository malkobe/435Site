const select = document.getElementById('crypto-select');
const nameElement = document.querySelector('#crypto-info h2');
const symbolElement = document.getElementById('crypto-symbol');
const supplyElement = document.getElementById('crypto-supply');
const priceElement = document.getElementById('crypto-price');
const changeElement = document.getElementById('crypto-change');

// Fetch data from Coincap API
fetch('https://api.coincap.io/v2/assets')
    .then(response => response.json())
    .then(data => {
        const cryptocurrencies = data.data;
        // Populate dropdown menu with cryptocurrency names
        cryptocurrencies.forEach(crypto => {
            const option = document.createElement('option');
            option.value = crypto.id;
            option.textContent = crypto.name;
            select.appendChild(option);
        });

        // Event listener for dropdown change
        select.addEventListener('change', () => {
            const selectedCrypto = cryptocurrconst ,select = document.getElementById('crypto-select');
const nameElement = document.querySelector('#crypto-info h2');
const symbolElement = document.getElementById('crypto-symbol');
const supplyElement = document.getElementById('crypto-supply');
const priceElement = document.getElementById('crypto-price');
const changeElement = document.getElementById('crypto-change');

// Fetch data from Coincap API
fetch('https://api.coincap.io/v2/assets')
    .then(response => response.json())
    .then(data => {
        const cryptocurrencies = data.data;
        // Populate dropdown menu with cryptocurrency names
        cryptocurrencies.forEach(crypto => {
            const option = document.createElement('option');
            option.value = crypto.id;
            option.textContent = crypto.name;
            select.appendChild(option);
        });

        // Event listener for dropdown change
        select.addEventListener('change', () => {
            const selectedCrypto = cryptocurrencies.find(crypto => crypto.id === select.value);
            updateCryptoInfo(selectedCrypto);
        });
    })
    .catch(error => console.error('Error:', error));

// Update cryptocurrency information based on user selection
function updateCryptoInfo(crypto) {
    nameElement.textContent = crypto.name;
    symbolElement.textContent = crypto.symbol;
    supplyElement.textContent = Math.round(crypto.supply).toLocaleString();
    priceElement.textContent = parseFloat(crypto.priceUsd).toFixed(2);
    changeElement.textContent = parseFloat(crypto.changePercent24Hr).toFixed(2);
}
encies.find(crypto => crypto.id === select.value);
            updateCryptoInfo(selectedCrypto);
        });
    })
    .catch(error => console.error('Error:', error));

// Update cryptocurrency information based on user selection
function updateCryptoInfo(crypto) {
    nameElement.textContent = crypto.name;
    symbolElement.textContent = crypto.symbol;
    supplyElement.textContent = Math.round(crypto.supply).toLocaleString();
    priceElement.textContent = parseFloat(crypto.priceUsd).toFixed(2);
    changeElement.textContent = parseFloat(crypto.changePercent24Hr).toFixed(2);
}
