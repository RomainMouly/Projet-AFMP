// burger button
let burgerBtn = document.getElementById("btn-trigger")
let navbarCollapse = document.getElementById("navbar-collapse")
let navbar = document.getElementById("navbar-nav")
let navLinks = navbar.getElementsByTagName("li")

burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("is-open")
    navbarCollapse.classList.toggle("show")
})



// content

const boxes = document.getElementsByClassName('box');

let boxesArray = []
Object.keys(boxes).map(function (index) {
  boxesArray.push(boxes[index])
});


boxesArray.map(function (item) {
  const content = item.getElementsByClassName('content')
  const iconLoop = item.getElementsByClassName('fa-search')
  const iconCross = item.getElementsByClassName('fa-times')
  const contentTitle = item.getElementsByClassName('content-title')

  iconLoop[0].addEventListener('click', function () {
    content[0].classList.add('show')
    iconLoop[0].classList.add('hide')
    iconCross[0].classList.remove('hide')
    contentTitle[0].classList.add('show')
  })

  iconCross[0].addEventListener('click', function () {
    content[0].classList.remove('show')
    iconCross[0].classList.add('hide')
    
    setTimeout(function() {
      iconLoop[0].classList.remove('hide')
      contentTitle[0].classList.remove('show')
    }, 1000);
  })
})

// transition: all .3s ease-out;