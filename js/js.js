const calculate= document.querySelector("#calculate");
calculate.addEventListener("click",
function calc() {
    const workedHours = parseInt(document.getElementById("hours").value);
    let overHours;
    if(workedHours>40){
        overHours=workedHours-40;
        document.getElementById("overHours").value=overHours;
        document.getElementById("earnedMoney").value = 40*30+overHours*40+"$"; 
    }
    else{
        document.getElementById("overHours").value="You don't have over hours.";
        document.getElementById("earnedMoney").value = workedHours*30+"$";
    }
}, false);
