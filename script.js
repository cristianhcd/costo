function toggleKwRateInput() {
    const kwRateOption = document.getElementById('kwRateOption').value;
    const kwRateSection = document.getElementById('kwRateSection');
    const kwCalcSection = document.getElementById('kwCalcSection');

    if (kwRateOption === 'yes') {
        kwRateSection.style.display = 'block';
        kwCalcSection.style.display = 'none';
    } else {
        kwRateSection.style.display = 'none';
        kwCalcSection.style.display = 'block';
    }
}

function calculateKwRate() {
    const totalKw = parseFloat(document.getElementById('totalKw').value);
    const totalCost = parseFloat(document.getElementById('totalCost').value);
    const resultElement = document.getElementById('result');

    if (isNaN(totalKw) || isNaN(totalCost)) {
        resultElement.textContent = 'Por favor, introduce valores válidos para calcular el valor por kilowatt.';
        return;
    }

    const kwRate = totalCost / totalKw;
    document.getElementById('kwRate').value = kwRate.toFixed(2);
    resultElement.textContent = `El valor calculado por kilowatt es: $${kwRate.toFixed(2)}`;
}

function calculateCost() {
    const kwRate = parseFloat(document.getElementById('kwRate').value);
    const kwUsage = parseFloat(document.getElementById('kwUsage').value);
    const resultElement = document.getElementById('result');

    if (isNaN(kwRate) || isNaN(kwUsage)) {
        resultElement.textContent = 'Por favor, introduce valores válidos.';
        return;
    }

    const monthlyCost = kwRate * kwUsage;
    resultElement.textContent = `El costo mensual del aparato es: $${monthlyCost.toFixed(2)}`;
}
