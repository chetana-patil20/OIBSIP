/* =====================================================
   TEMPERATURE CONVERTER
===================================================== */

// Get HTML elements

const temperatureInput =
    document.getElementById("temperature");

const inputUnit =
    document.getElementById("inputUnit");

const convertBtn =
    document.getElementById("convertBtn");

const clearBtn =
    document.getElementById("clearBtn");

const errorMessage =
    document.getElementById("errorMessage");

const results =
    document.getElementById("results");

const celsiusResult =
    document.getElementById("celsiusResult");

const fahrenheitResult =
    document.getElementById("fahrenheitResult");

const kelvinResult =
    document.getElementById("kelvinResult");


// =====================================================
// CONVERT TEMPERATURE
// =====================================================

function convertTemperature() {

    // Remove previous error
    errorMessage.textContent = "";


    // Get input value
    const inputValue =
        temperatureInput.value.trim();


    // Check empty input
    if (inputValue === "") {

        showError(
            "Please enter a temperature value."
        );

        return;
    }


    // Convert input to number
    const temperature =
        Number(inputValue);


    // Check whether value is numeric
    if (!Number.isFinite(temperature)) {

        showError(
            "Please enter a valid numeric temperature."
        );

        return;
    }


    // Get selected unit
    const unit =
        inputUnit.value;


    let celsius;


    // =================================================
    // CONVERT INPUT TO CELSIUS
    // =================================================

    if (unit === "celsius") {

        celsius = temperature;

    }

    else if (unit === "fahrenheit") {

        celsius =
            (temperature - 32) * 5 / 9;

    }

    else if (unit === "kelvin") {

        celsius =
            temperature - 273.15;

    }


    // =================================================
    // ABSOLUTE ZERO VALIDATION
    // =================================================

    if (celsius < -273.15) {

        showError(
            "Temperature cannot be below absolute zero (-273.15°C)."
        );

        clearResults();

        return;
    }


    // =================================================
    // CONVERT CELSIUS TO OTHER UNITS
    // =================================================

    const fahrenheit =
        (celsius * 9 / 5) + 32;

    const kelvin =
        celsius + 273.15;


    // =================================================
    // DISPLAY RESULTS
    // =================================================

    celsiusResult.textContent =
        `${formatTemperature(celsius)} °C`;

    fahrenheitResult.textContent =
        `${formatTemperature(fahrenheit)} °F`;

    kelvinResult.textContent =
        `${formatTemperature(kelvin)} K`;

}


// =====================================================
// FORMAT TEMPERATURE
// =====================================================

function formatTemperature(value) {

    return Number(value.toFixed(2));

}


// =====================================================
// SHOW ERROR
// =====================================================

function showError(message) {

    errorMessage.textContent =
        message;

}


// =====================================================
// CLEAR RESULTS
// =====================================================

function clearResults() {

    celsiusResult.textContent = "—";

    fahrenheitResult.textContent = "—";

    kelvinResult.textContent = "—";
}


// =====================================================
// CLEAR EVERYTHING
// =====================================================

function clearAll() {

    temperatureInput.value = "";

    inputUnit.value = "celsius";

    errorMessage.textContent = "";

    clearResults();

    temperatureInput.focus();

}


// =====================================================
// BUTTON EVENTS
// =====================================================

convertBtn.addEventListener(
    "click",
    convertTemperature
);

clearBtn.addEventListener(
    "click",
    clearAll
);


// =====================================================
// ENTER KEY SUPPORT
// =====================================================

temperatureInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            convertTemperature();

        }

    }
);