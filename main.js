// burger button
let burgerBtn = document.getElementById("btn-trigger")
let navbar = document.getElementById("navbar-nav")
let navLinks = navbar.getElementsByTagName("li")

burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("open")
    navbar.classList.toggle("open")
})