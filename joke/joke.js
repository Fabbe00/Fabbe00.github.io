const skamtknapp = document.getElementById("skamtknappen");
skamtknapp.addEventListener("click", getJoke)

const p_skamt = document.getElementById("pskamt");

function getJoke(e) {
    console.log("click");
    const request_adress = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`;

    

    fetch(
        `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`,
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
            let joke = response.joke
            p_skamt.innerHTML = joke;


        })
        .catch(error => console.log(error));

    
}