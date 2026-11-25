
// ======================================
// COVID-19 EARLY OUTBREAK DASHBOARD
// ======================================

// Store the COVID-19 data
let covidData = [];

// Get the country dropdown element
const countrySelect = document.getElementById("countrySelect");

// Load COVID-19 data from the JSON file
async function loadCovidData() {

    try {

        // Fetch the JSON file
        const response = await fetch("covid-19.json");

        // Check if the file loaded successfully
        if (!response.ok) {
            throw new Error("Could not load COVID-19 data.");
        }

        // Convert JSON response into JavaScript data
        const data = await response.json();

        // Store the country information
        covidData = data.countries;

        // Display the data in the browser console
        console.log("COVID-19 data loaded successfully!");
        console.log(covidData);

        // Populate the country dropdown
        populateCountries();

    } catch (error) {

        console.error("Error loading data:", error);

        countrySelect.innerHTML =
            '<option value="">Error loading countries</option>';

        alert("Unable to load the COVID-19 data. Please check your JSON file.");

    }
}


// Populate the country dropdown
function populateCountries() {

    // Clear existing dropdown options
    countrySelect.innerHTML = "";

    // Add each country to the dropdown
    covidData.forEach(function(country) {

        const option = document.createElement("option");

        option.value = country.code;
        option.textContent = country.country;

        countrySelect.appendChild(option);

    });

    // Select the first country by default
    countrySelect.value = covidData[0].code;

    console.log("Country selector populated successfully!");

}


// Start loading the data when the page opens
loadCovidData();
