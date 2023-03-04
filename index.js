const btnE1 = document.getElementById("btn");
const jokeE1 = document.getElementById("joke");


const apiKey = "2igNNxqnRe8fWHFEJu2E+g==ponzxud0wUxNPoXZ"

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){

    try {
        jokeE1.innerText = "Loading...";
    btnE1.disabled = true;
    btnE1.innerText = "Please Wait !!"
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnE1.disabled = false;
    btnE1.innerText = "Tell Me A Joke"

    jokeE1.innerText = data[0].joke;
    } catch (error) {
        jokeE1.innerText = "An Error Happened, Try Again Later";
        btnE1.disabled = false;
        btnE1.innerText = "Tell Me A Joke"
        console.log(error);     
    }  
}

btnE1.addEventListener("click", getJoke)
