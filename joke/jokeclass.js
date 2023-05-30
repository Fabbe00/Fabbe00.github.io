class JokeHandlerRequest {
    constructor(adress) {
        this.adress = adress;
    }

    async getJoke() {
        let joke_string = "This is not a joke";

        await fetch(
            this.adress,

            {
                method: "GET",
                headers: new Headers({
                    Accept: "application/json"
                })
            }
        )
            .then(res => res.json())
            .then(response => {

                //console.log(`${response.joke}`)
                joke_string = response.joke;
                //console.log(`jokestring = ${joke_string}`)



            })
            .catch(error => { console.log(error); joke_string += error });

    
            return joke_string;
        }
    

}//End of Class

//Starta Program
const skamtknapp = document.getElementById("skamtknappen")
skamtknapp.addEventListener("click", getJoke);

const p_skamt = document.getElementById("pskamt")

async function getJoke(e) {
    const request_adress = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`
    let joke_object = new JokeHandlerRequest(request_adress)
    
    let t_var = await joke_object.getJoke()
    console.log(`t_var = ${t_var}`)
    p_skamt.innerHTML = t_var;

}

