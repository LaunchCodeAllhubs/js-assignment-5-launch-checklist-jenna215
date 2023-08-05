// Write your helper functions here!
require('isomorphic-fetch');





function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

const testInput = document.querySelector("input");
function validateInput(testInput) {
   if (testInput === ""){
    return "Empty";
   } else if (isNaN(value)){
    return "Not a Number";
   } else {
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   document = document.querySelector("body");
   list = document.querySelector("li");
   pilot = document.getElementById("pilotStatus");
   copilot = document.getElementById("copilotStatus");
   fuelLevel = document.getElementById("fuelLevel");
   cargoLevel = document.getElementById("cargoMass");
   launchStatus = document.getElementById("launchStatus")

    pilot.querySelector("li") = (`Pilot ${pilotName} is ready for launch`);
    copilot.querySelector("li") = (`Pilot ${copilotName} is ready for launch`);
    if (fuelLevel < 10000){
        document.getElementById("fuelStatus").style.display == "visible" &&
        launchStatus.querySelector("h2") == "Shuttle not ready for launch" &&
        launchStatus.querySelector("h2").style.color == "red"
    } else if (cargoLevel > 10000){
        document.getElementById("fuelStatus").style.display == "visible" &&
        launchStatus.querySelector("h2") == "Shuttle not ready for launch" &&
        launchStatus.querySelector("h2").style.color == "red"
    } else {
        launchStatus.querySelector("h2") == "Shuttle ready for launch" &&
        launchStatus.querySelector("h2").style.color == "green"
    };
}

async function myFetch() {

    document.addEventListener('click', function (event){
        fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response){
            response.json().then(function(data){
                let planets = "";
                for(i=0; i<data.length;i++){
                    let planet = data[i]
                    console.log(planet.name)
                    planets += `<div class="planet">
                    <div id="missionTarget">
                    <h2>Mission Destination</h2>
                    <ol>
                        <li>Name: ${planet.name}</li>
                        <li>Diameter: ${planet.diameter}</li>
                        <li>Star: ${planet.star}</li>
                        <li>Distance from Earth: ${planet.distance}</li>
                        <li>Number of Moons: ${planet.moons}</li>
                    </ol>
                    <img src="${planet.image}">
                    </div>`
                }
                result.innerHTML = planets;
            })
        })
    })


    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
