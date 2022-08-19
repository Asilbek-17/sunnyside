var elBtn = document.querySelector(".burger")
var elNav = document.querySelector(".site-nav")

elBtn.addEventListener("click", function(){
    elNav.classList.toggle("site-nav-show")
})