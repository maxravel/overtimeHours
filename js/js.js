let oH= document.getElementById("overHours");
const eM= document.getElementById("earnedMoney");
const calculate= document.querySelector("#calculate");

calculate.addEventListener("click",
function calc() {
    const workedHours = parseInt(document.getElementById("hours").value);
    let overHours;

    workedHours>40 ? (overHours=workedHours-40,
            oH.value=overHours,
            eM.value = 40*30+overHours*40+"$") :
        (oH.value="You don't have over hours.",
            eM.value = workedHours*30+"$")

    // if(workedHours>40){
    //     overHours=workedHours-40;
    //     oH.value=overHours;
    //     $("#overHours").value=overHours;
    //     eM.value = 40*30+overHours*40+"$"; 
    // }
    // else{
    //     oH.value="You don't have over hours.";
    //     eM.value = workedHours*30+"$";
    // }
    
}, false);


