// form
const queryString = window.location.search;
const btn = document.getElementsByClassName("btn")

if (queryString !== '') {
    const urlParams = new URLSearchParams(queryString);

    const getPermis = urlParams.get('permis')
    const getDate = urlParams.get('date')
    const getLastname = urlParams.get('lastname')
    const getFirstname = urlParams.get('firstname')
    const getEmail = urlParams.get('email')
    const getPhome = urlParams.get('phone')
    const getMessage = urlParams.get('message')
    
    const div = document.getElementById("message")
    const alertSuccess = document.getElementsByClassName("alert alert-success")
    const alertDanger = document.getElementsByClassName("alert alert-danger")
    
    if (getPermis === '' || getDate === '' || getLastname === '' || getFirstname === ''  || getEmail === '' || getPhome === '' || getMessage === '' ) {
        let alert = document.createElement("div")
        alert.classList.add("alert", "alert-danger")
        alert.innerHTML = "Votre formulaire comporte des erreurs"
        div.appendChild(alert)
    } else {
        let alert = document.createElement("div")
        alert.classList.add("alert", "alert-success")
        alert.innerHTML = "Votre inscription a bien été prise en compte. A bientôt Moussaillon."
        div.appendChild(alert)
    }
}

