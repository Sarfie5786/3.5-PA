/*
    Author:    Sara Fields
    Date:      10/1/2026
    Purpose:   3.5 Performance Assessment: Flow Control
*/

/* =========================================
   GREENWAY PARK TRAIL DATA
========================================= */

const trails = [
    { name: "River Walk", difficulty: "low", time: 20 },
    { name: "Forest Loop", difficulty: "medium", time: 45 },
    { name: "Hill Summit Trail", difficulty: "high", time: 90 },
    { name: "Lake Side Path", difficulty: "low", time: 30 },
    { name: "Rock Ridge Trail", difficulty: "high", time: 75 },
    { name: "Pine Creek Trail", difficulty: "medium", time: 50 },
    { name: "Meadow View Trail", difficulty: "low", time: 25 },
    { name: "sarfie5786 Mountain Trail", difficulty: "high", time: 120 }
];

/* =========================================
   TODO: DISPLAY TRAILS VIA LOOP
========================================= */
const trailContainer =
    document.getElementById("trailContainer");

trails.forEach(function(trail) {

    const trailCard =
        document.createElement("article");

    trailCard.classList.add("card");

    trailCard.innerHTML = `
        <h3>${trail.name}</h3>
        <p>Difficulty: ${trail.difficulty}</p>
        <p>Average Time: ${trail.time} minutes</p>
    `;

    trailContainer.appendChild(trailCard);

});


/* =========================================
   TODO: FORM LOGIC
========================================= */
const trailForm =
    document.getElementById("trailForm");

const result =
    document.getElementById("result");

trailForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const selectedPets =
    document.querySelector('input[name="pets"]:checked');


    const pets =
        selectedPets ? selectedPets.value : "";
        
    const experience =
        document.getElementById("experience").value;

    let recommendation = "River Walk";

    if (pets.value === "yes") {

        if (experience === "low") {
            recommendation = "River Walk";
        } else {
            recommendation = "Forest Loop";
        }

    } else if (pets.value === "no") {

        if (experience === "low") {
            recommendation = "Lake Side Path";
        } else if (experience === "medium") {
            recommendation = "Forest Loop";
        } else if (experience === "high") {
            recommendation = "Rock Ridge Trail";
        }

    }

    result.innerHTML =
        "<strong>Recommended Trail:</strong> " +
        recommendation;

});