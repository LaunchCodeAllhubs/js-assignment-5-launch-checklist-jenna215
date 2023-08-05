// Write your JavaScript code here!

const { myFetch, validateInput, formSubmission } = require("./scriptHelper");


const formSubmit = document.getElementById("formSubmit");
const pilotName = document.getElementById("pilotName");
const copilotName = document.querySelector("name=copilotName");




window.addEventListener("load", function() {
    
    formSubmit.addEventListener("submit", function(event) {
        let formField = document.querySelector("input[class=formField]:checked");
        // alert the current value found in the username input
        if (formField.value === "null") {
            alert("All fields are required!");
            event.preventDefault();
        } else if (pilotName.value || copilotName.value !== "" && !formField.value.trim().match(/^[A-Z a-z 0-9\-]+$/)) {
            alert("\nPlease enter a single keyword with only letters and/or numbers.");
        } else {
            validateInput();
        }
        event.preventDefault();
    });

    let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    formSubmission();
    })

});
    