// form
const btn = document.getElementsByClassName("btn")
btn[0].addEventListener('click', function (e) {
    e.preventDefault;

    const div = document.getElementById("message")
    let alert = document.createElement("div")
    alert.classList.add("alert")
    alert.innerHTML = "Votre inscription a bien été prise en compte. A bientôt Moussaillon."
    div.appendChild(alert)
});