// burger button
let burgerBtn = document.getElementById("btn-trigger")
let navbarCollapse = document.getElementById("navbar-collapse")
let navbar = document.getElementById("navbar-nav")
let navLinks = navbar.getElementsByTagName("li")

burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("is-open")
    navbarCollapse.classList.toggle("show")
})