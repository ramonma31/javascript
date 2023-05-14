
function addNavImage() {
  const tabmenu = document.querySelectorAll(".js-tabmenu li");
  const tabcontent = document.querySelectorAll(".js-tabcontent section");

  if(tabcontent.length && tabmenu.length) {
    tabcontent[0].classList.add("active")

    function activetab(index) {
      tabcontent.forEach(section => {
        section.classList.remove("active")
      })
      tabcontent[index].classList.add("active")
    }

    tabmenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activetab(index);
      })
    })
  }
}
addNavImage()

function initFaq() {
  const acordionlist = document.querySelectorAll(".js-acordion dt")
  const activeClass = "active"
  if(acordionlist.length)
  acordionlist[0].classList.add(activeClass);
  acordionlist[0].nextElementSibling.classList.add(activeClass)
  
  function activeacordion() {
    this.classList.toggle(activeClass)
    this.nextElementSibling.classList.toggle(activeClass);
  }

  acordionlist.forEach((item) => {
    item.addEventListener("click", activeacordion)
  });
}

initFaq()

const linksInterno = document.querySelectorAll(".js-menu a[href^='#']");

function scrolltosection() {
  this.preventDefault()
}

linksInterno.forEach(link => {
  link.addEventListener("click", scrolltosection);
})