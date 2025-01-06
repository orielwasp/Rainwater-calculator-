function calculate() {
    const rainfall = parseFloat(document.getElementById('rainfall').value);
    const roofArea = parseFloat(document.getElementById('roofArea').value);
    const tankVolume = parseFloat(document.getElementById('tankVolume').value);
    const desiredVolume = parseFloat(document.getElementById('desiredVolume').value);

    if (isNaN(rainfall) || isNaN(roofArea) || isNaN(tankVolume) || isNaN(desiredVolume)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    // Rainfall in mm to meters
    const rainfallInMeters = rainfall / 1000;

    // Calculate volume of water collected from roof per month
    const collectedWater = rainfallInMeters * roofArea * 1000; // in liters

    // Check if collected water can fill the tank
    const canFillTank = collectedWater >= tankVolume ? "Yes" : "No";

    // Calculate required roof area to collect the desired volume of water
    const requiredRoofArea = desiredVolume / (rainfallInMeters * 1000); // in m²

    const result = `
                <p>Can the predicted rainfall fill the tank? <strong>${canFillTank}</strong></p>
                <p>Monthly water collected from the roof: <strong>${collectedWater.toFixed(2)} liters</strong></p>
                <p>Required roof area to collect ${desiredVolume} liters: <strong>${requiredRoofArea.toFixed(2)} m²</strong></p>
            `;
    document.getElementById('result').innerHTML = result;
}