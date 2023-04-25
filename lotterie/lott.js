const svar_div = document.getElementById("svar_div")
const antal_vinster = document.getElementById("input_antal_vinster")

const vinster = [
    "Slott i Ryssland",
    "Biljett till en konsert av artisten du hatar mest",
    "Eiffeltornet",
    "Massage av Putin i Bozo",
    "10 miljoner i skadestånd",
    "SWAT raidar ditt hem",
    "En skäggig man som kodar",
    "Markrättigheterna till hela Siberien",
    "Ett hus i Arktis",
    "12 spänn",
    "Gifta dig med en estetare",
    "Snowboard"
]

function slumpaClick(){
    let vinst = ` <h3> Dina Vinster</h3>`
    let antalv = antal_vinster.value;
    let int_antalv = parseInt(antalv);

    for (i=0; i<int_antalv; i++) {
        let slumptal = Math.floor(Math.random() * 12)
        let tvinst = vinster[slumptal];
        vinst += `<p>${tvinst}</p>`
    }

    svar_div.innerHTML = vinst;
}

