console.log("EquiSalud iniciado");

/* Emergencia */

document.addEventListener("DOMContentLoaded", () => {

    const emergencyCard =
        document.querySelector(".emergency-card");

    if(emergencyCard){

        emergencyCard.addEventListener("click", () => {

            alert(
                "⚠ Alerta de emergencia enviada."
            );

        });

    }

});

const panicButton =
document.getElementById("panicButton");

if(panicButton){

    panicButton.addEventListener("click", () => {

        alert(
            "🚨 Emergencia enviada al voluntario."
        );

    });

}

const takenButtons =
document.querySelectorAll(".taken-btn");

takenButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        btn.innerText = "✓ Registrado";

        btn.style.background =
        "#F2EFE4";
        btn.style.background="green"

    });

});

const takenButtons2 =
document.querySelectorAll(".save-btn");

takenButtons2.forEach(btn => {

    btn.addEventListener("click", () => {

        btn.innerText = "✓ Registrado";

        btn.style.background =
        "#F2EFE4";
        btn.style.background="green"

    });

});