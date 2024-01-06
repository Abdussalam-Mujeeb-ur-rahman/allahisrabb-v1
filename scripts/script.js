const harmburgers = document.querySelectorAll(".harmburger");
const navbar = document.querySelectorAll(".navbar");

// ===================== HARMBURGER =============================
harmburgers.forEach((harmburger) => {
    harmburger.addEventListener("click", () => {
        harmburger.classList.toggle("close");

        const isItClosed = harmburger.classList.contains("close");

        navbar.forEach((nav) => {
            nav.classList[isItClosed === true ? "add" : "remove"]("in")
        })
    })
})


// =============================== SHOW SCROLL UP =================================
const scrollUpAndHideNav = () => {

    navbar.forEach((nav) => {
        nav.classList.remove("in");
    })

    harmburgers.forEach((harmburger) => {
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





