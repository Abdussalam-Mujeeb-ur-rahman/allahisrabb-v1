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




