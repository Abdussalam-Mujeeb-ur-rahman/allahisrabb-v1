const Harmburgers = document.querySelectorAll(".harmburger");
const Navbar = document.querySelectorAll(".navbar");


// =============================== SHOW SCROLL UP =================================
const scrollUpAndHideNav = () => {

    Navbar.forEach((nav) => {
        nav.classList.remove("in");
    })

    Harmburgers.forEach((harmburger) => {
        harmburger.classList.remove('close')
    })

    const scrollUp = document.getElementById('scroll-up')

    // when the scroll is higher than 350 viewport height,
    if (this.scrollY >= 350) {
        scrollUp.classList.add('scrollin')
        scrollUp.classList.remove('scrollout')
    } else {
        scrollUp.classList.remove('scrollin')
        scrollUp.classList.add('scrollout')
    }                    
}

window.addEventListener('scroll', scrollUpAndHideNav)





