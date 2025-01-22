// Set current year in footer
document.getElementById("getdates").textContent = new Date().getFullYear();

// Set last modified date in footer
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed, units = "Metric") {
    // Check if criteria to run is met, if not returns N/A
    if (
        (units === "Metric" && (temperature > 10 || windSpeed <= 4.8)) ||
        (units === "US" && (temperature > 50 || windSpeed <= 3))
    ) {
        return "N/A";
    }

    // Calculate wind chill
    if (units === "Metric") {
        return Math.round(
            13.12 +
            0.6215 * temperature -
            11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temperature * Math.pow(windSpeed, 0.16)
        );
    } else if (units === "US") {
        return Math.round(
            35.74 +
            0.6215 * temperature -
            35.75 * Math.pow(windSpeed, 0.16) +
            0.4275 * temperature * Math.pow(windSpeed, 0.16)
        );
    } else {
        return "Invalid Units";
    }
}

// Function to update the wind chill value
function updateWeather() {
    const tempElement = document.getElementById("temp");
    const windElement = document.getElementById("wind");
    const windChillElement = document.getElementById("windChill");

    // Extract temperature and wind speed from the html data
    const tempText = tempElement.textContent; // looking for temp in C or F
    const windText = windElement.textContent; // looking for wind in kM or Mph

    // Determine the units based on text
    const units = tempText.includes("°C") ? "Metric" : "US";

    // Extract numeric values
    const temperature = parseFloat(tempText); // removes the C or F from the number
    const windSpeed = parseFloat(windText); // removes the km/h or mph from the number

    // Calculate wind chill
    const windChill = calculateWindChill(temperature, windSpeed, units);

    // Update the Wind Chill field in the DOM
    windChillElement.textContent = windChill !== "N/A" ? `${windChill} ${units === "Metric" ? "°C" : "°F"}` : "N/A";
}

// Runs the updateWeather function on page load
document.addEventListener("DOMContentLoaded", updateWeather);
