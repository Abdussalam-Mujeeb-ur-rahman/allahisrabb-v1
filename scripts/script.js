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

// scroll reveal
ScrollReveal({
    // reset: true, //makes the animation repeat over and over again.
    distance: "80px",
    duration: 2000,
    delay: 200,
  });


  ScrollReveal().reveal(".welcome_image, .doings_talks_d, .socials", { origin: "bottom" });
  ScrollReveal().reveal(".message", { origin: "left", delay: "1000" });
  ScrollReveal().reveal(".sure, .work_action .click_here", { origin: "right", delay: "2000" });
  ScrollReveal().reveal(".space, .about_details .c, .here", { origin: "left", delay: "3000" });

  ScrollReveal().reveal(".about_details .a, .section_subtitle, .work_experience h2, .experience_title, .work_action .learn, .doings_talks_a, .doings_talks_c, .doing:nth-of-type(odd)", { origin: "left" });
  ScrollReveal().reveal(".about_details .b, .work_action .started", { origin: "right", delay: "1000" });
  ScrollReveal().reveal(".about_details .d", { origin: "left", delay: "4000" });
  ScrollReveal().reveal(".about_details .f", { origin: "right", delay: "4000" });
  ScrollReveal().reveal(".about_details .e", { origin: "right", delay: "5000" });

  ScrollReveal().reveal(".experience_date, .experience_description, .doings_talks_b, .doing:nth-of-type(even)", { origin: "right" });


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





