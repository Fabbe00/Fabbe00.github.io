class Pengar{
    constructor(antal,pengasort){
        this.antal = antal;
        this.pengasort = pengasort;
    }
}
const input_pris = document.getElementById("pris")
const input_inbet = document.getElementById("inbet")
const svardiv = document.getElementById("svar_div")

const kalkyleraknapp = document.getElementById("kalk_knapp")
kalkyleraknapp.addEventListener("click",kalkyleraClick)

function kalkyleraClick(){
    
    //console.log(`Hej Hej`)

    let t_pris = parseInt(input_pris.value);
    let t_inbet = parseInt(input_inbet.value);

    if(t_pris > t_inbet){
        alert("De blir inget köp! För lite pengar.")
    }
    else{
    getExchangeArray(t_inbet, t_pris);
    const exchange_array = getExchangeArray(t_inbet, t_pris);
    svardiv.innerHTML= `<b>inbet= ${t_inbet} , pris= ${t_pris} kr </b>
    <br> <h3>Växel tillbaka:</h3>
    Femhundringar: ${exchange_array[0].antal} st
    <br> Tvåhundringar: ${exchange_array[1].antal} st
    <br> Hundringar: ${exchange_array[2].antal} st
    <br> Femtiolappar: ${exchange_array[3].antal} st
    <br> Tjugolappar: ${exchange_array[4].antal} st
    <br> Tiokronor: ${exchange_array[5].antal} st
    <br> Femkronor: ${exchange_array[6].antal} st
    <br> Tvåkronor: ${exchange_array[7].antal} st
    <br> Enkronor: ${exchange_array[8].antal} st
    `;
    }
}

/**
 *exChange()
 *in: belopp som ska växlas, valör på sedel eller mynt
 *out: antal sedlar-mynt man får ut av en valör
 */

 let exChange = (belopp,sedel) => { return Math.floor(belopp/sedel)}

 function getExchangeArray(inbetalning, priset){
    let antal_mynt = 0;
    let pengar_tillbaka = 0;
    let sedlar_mynt_array = []

    //500------------------------------------------
    pengar_tillbaka = inbetalning - priset;
    antal_mynt = exChange(pengar_tillbaka, 500);
    pengar_tillbaka = pengar_tillbaka % 500;

    let t_pengar = new Pengar(0, 500)

    if(antal_mynt > 0){
        t_pengar.antal = antal_mynt
    }
    sedlar_mynt_array.push(t_pengar)

    //200------------------------------------------
    antal_mynt = exChange(pengar_tillbaka, 200)
    pengar_tillbaka = pengar_tillbaka % 200;

    t_pengar = new Pengar(0, 200)

    if(antal_mynt > 0){
        t_pengar.antal = antal_mynt
    }
    sedlar_mynt_array.push(t_pengar)

    //100------------------------------------------
    antal_mynt = exChange(pengar_tillbaka, 100)
    pengar_tillbaka = pengar_tillbaka % 100;

    t_pengar = new Pengar(0, 100)

    if(antal_mynt > 0){
        t_pengar.antal = antal_mynt
    }
    sedlar_mynt_array.push(t_pengar)
    
    //50------------------------------------------
    antal_mynt = exChange(pengar_tillbaka, 50)
    pengar_tillbaka = pengar_tillbaka % 50;

    t_pengar = new Pengar(0, 50)

    if(antal_mynt > 0){
        t_pengar.antal = antal_mynt
    }
    sedlar_mynt_array.push(t_pengar)
    
    //20------------------------------------------
    antal_mynt = exChange(pengar_tillbaka, 20)
    pengar_tillbaka = pengar_tillbaka % 20;

    t_pengar = new Pengar(0, 20)

    if(antal_mynt > 0){
        t_pengar.antal = antal_mynt
    }
    sedlar_mynt_array.push(t_pengar)
    
    //10------------------------------------------
     antal_mynt = exChange(pengar_tillbaka, 10)
     pengar_tillbaka = pengar_tillbaka % 10;
 
     t_pengar = new Pengar(0, 10)
 
     if(antal_mynt > 0){
         t_pengar.antal = antal_mynt
     }
     sedlar_mynt_array.push(t_pengar)
     
    //5------------------------------------------
    antal_mynt = exChange(pengar_tillbaka, 5)
    pengar_tillbaka = pengar_tillbaka % 5;

    t_pengar = new Pengar(0, 5)

    if(antal_mynt > 0){
        t_pengar.antal = antal_mynt
    }
    sedlar_mynt_array.push(t_pengar)
     
    //2------------------------------------------
     antal_mynt = exChange(pengar_tillbaka, 2)
     pengar_tillbaka = pengar_tillbaka % 2;
 
     t_pengar = new Pengar(0, 2)
 
     if(antal_mynt > 0){
         t_pengar.antal = antal_mynt
     }
     sedlar_mynt_array.push(t_pengar)
      
    //1------------------------------------------
    antal_mynt = exChange(pengar_tillbaka, 1)
    pengar_tillbaka = pengar_tillbaka % 1;

    t_pengar = new Pengar(0, 1)

    if(antal_mynt > 0){
        t_pengar.antal = antal_mynt
    }
    sedlar_mynt_array.push(t_pengar)



    console.log(`antal pengar tillbaka = ${pengar_tillbaka} antal 500 sedlar = ${antal_mynt}`)

    return sedlar_mynt_array
 }