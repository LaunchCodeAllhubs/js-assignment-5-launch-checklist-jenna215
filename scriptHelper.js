// Write your helper functions here!
require('isomorphic-fetch');





function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
   // Here is the HTML formatting for our mission target div.
   const planetView = document.getElementById("missionTarget");
   planetView.innerHTML = 
                    `<h2>Mission Destination</h2>
                    <ol>
                        <li>Name: ${name}</li>
                        <li>Diameter: ${diameter}</li>
                        <li>Star: ${star}</li>
                        <li>Distance from Earth: ${distance}</li>
                        <li>Number of Moons: ${moons}</li>
                    </ol>
                    <img src="${image}">`;
}

function validateInput(testInput) {
   if (testInput === ""){
    return "Empty";
   } 
   testInput = Number(testInput);
   if (isNaN(testInput)){
    return "Not a Number";
   } else {
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   pilotStatus = document.getElementById("pilotStatus");
   copilotStatus = document.getElementById("copilotStatus");
   fuelStatus = document.getElementById("fuelStatus");
   cargoStatus = document.getElementById("cargoStatus");
   launchStatus = document.getElementById("launchStatus");

   if (validateInput(pilot) === "Empty" || 
        validateInput(copilot) === "Empty" || 
        validateInput(fuelLevel) === "Empty"  || 
        validateInput(cargoLevel) === "Empty") {
            alert("All fields are required!");
    } else if (validateInput(pilot) === "Is a Number" || 
                validateInput(copilot) === "Is a Number" ||
                validateInput(fuelLevel) === "Not a Number"  || 
                validateInput(cargoLevel) === "Not a Number") {
                alert("Please enter valid information for each field");
    } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Pilot ${copilot} is ready for launch`;
        if (fuelLevel < 10000){
            fuelStatus.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            fuelStatus.innerHTML = "Fuel level too low for launch";
        } else if (cargoLevel > 10000){
            fuelStatus.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        } else {
            launchStatus.innerHTML = "Shuttle ready for launch";
            launchStatus.style.color = "green"
        };
    }
}

async function myFetch() {
    let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json()
        });
        
    return planetsReturned;
}

function pickPlanet(planets) {
    let planet = planets[Math.floor(Math.random() * (planets.length))]
        return planet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
