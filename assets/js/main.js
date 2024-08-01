/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener("click" , () =>{
        navMenu.classList.add("show-menu")
    })
}
/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener("click" , () =>{
        navMenu.classList.remove("show-menu")
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav_link")

const linkActive = () =>{
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click" , linkActive))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById("header")
    this.scrollY >= 50 ? header.classList.add("blur-header")
                        :header.classList.remove("blur-header")
}
window.addEventListener("scroll" , blurHeader)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById("scroll-up")

    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll")
                    :scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll" , scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]")

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop -58 ,
        sectionId = current.getAttribute("id"),
        sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
            {
                sectionsClass.classList.add("active-link")
            }
            else{
                sectionsClass.classList.remove("active-link")
            }
    })
}
window.addEventListener("scroll" , scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById("theme-button")
const darkTheme  = "dark-theme"
const iconTheme = "ri-sun-line"

//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")

// we obtion the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// we validate if the user previously chose a topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click" , () =>{
    // Add Or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user 
    localStorage.setItem("selected-theme" , getCurrentTheme())
    localStorage.setItem("selected-icon" , getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin : 'top',
    distance : '60px',
    duration : 2500,
    delay : 400,
     reset: true // Animations repeat 
})

sr.reveal(`.home_data, .list_container, .join_content, .footer_container`)
sr.reveal(`.home_img` , {origin: 'bottom'})
sr.reveal(`.health_image, .routine_images, .follow_img-3`, {origin: 'left'})
sr.reveal(`.health_data, .routine_data , .follow_img-4`, {origin: 'right'})
sr.reveal(`.follow_data, .follow_content-1 img`, {interval: 100})
