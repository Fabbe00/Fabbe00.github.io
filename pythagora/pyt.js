
let bool_katet = true
const inputselect = document.getElementById("inputselect")
const input_V1 = document.getElementById("input_V1")
const input_V2 = document.getElementById("input_V2")
const answer = document.getElementById("answer")
const kalkyl = document.getElementById("kalkyl")

kalkyl.addEventListener("click", kalkyleraClick)

inputselect.addEventListener("change", function(){
    console.log(`Selected Val: ${this.value}`)
    let selectval = this.value;

    if (selectval === "katet") {
        bool_katet = true
        input_V2.placeholder = "katet";
    }
    else {
        bool_katet = false;
        input_V2.placeholder = "hypotenusa";
    }
})

function kalkyleraClick(){
    console.log(`klick`)

    //try{
        let tal1 = input_V1.value;
        let tal2 = input_V2.value;

        let int_tal1 = parseInt(tal1);
        let int_tal2 = parseInt(tal2);

        let int_tal1_upph = int_tal1 * int_tal1;
        let int_tal2_upph = int_tal2 * int_tal2

        let str_svar = ""

        if(isNaN(tal1) || isNaN(tal2)) {
            alert("Endast heltal!")
        }

        else{
            if (bool_katet) {
                let adderat = int_tal1_upph + int_tal2_upph;
                let roten_ur = Math.sqrt(adderat);

                str_svar = `<b>hypotenusa</b>
                <br>
                ${tal1}&sup2; + ${tal2}&sup2; = <br>
                ${int_tal1_upph} + ${int_tal2_upph} = ${adderat} <b>
                Roten ur: ${adderat} = ${roten_ur.toFixed(2)} `
            }
            else {
                console.log(`tal2=${int_tal2_upph}  - tal1=${int_tal1_upph}`)
                let subtraherat = int_tal2_upph - int_tal1_upph;
                let roten_ur = Math.sqrt(subtraherat);

                str_svar = `<b>katet;</b>
                <br>
                ${tal2}&sup2; - ${tal1}&sup2; = <br>
                ${int_tal2_upph} - ${int_tal1_upph} = ${subtraherat} <b>
                Roten ur: ${subtraherat} = ${roten_ur.toFixed(2)} `
            }
            answer.innerHTML = str_svar;
            input_V1.value = "";
            input_V2.value = "";
        }
    //}
    /*catch(error404) {
        alert("Input Error" + error404)
    }*/
}
