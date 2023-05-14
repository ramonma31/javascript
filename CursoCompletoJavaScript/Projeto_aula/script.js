
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

function scrollsuave() {
  
  const linksInterno = document.querySelectorAll(".js-menu a[href^='#']");
  function scrolltosection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute("href")
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
    /*window.scrollTo({
      top: section,
      behavior: "smooth"
    });*/
  };

  linksInterno.forEach(link => {
    link.addEventListener("click", scrolltosection);
  })
}

function scrollinitanimation() {
  const sections = document.querySelectorAll(".js-scroll");
  if(sections.length){
    const windowmetade = innerHeight * 0.8;

    function animascroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const issectionvisible = (sectionTop - windowmetade) < 0;
        if(issectionvisible) {
          section.classList.add("active")
        }
      })
    }
  }

  animascroll()

  window.addEventListener("scroll", animascroll)
}


addNavImage()
initFaq()
scrollsuave()
scrollinitanimation()