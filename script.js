// TUNGGU HTML SELESAI
document.addEventListener("DOMContentLoaded", function () {

    // DARK MODE
    const darkBtn = document.getElementById("darkBtn");
    if (darkBtn) {
        darkBtn.innerText = "Dark Mode";
        darkBtn.onclick = function () {
            document.body.classList.toggle("dark");
        };
    }

    // MODAL
    window.openModal = function () {
        document.getElementById("modal").style.display = "flex";
    };

    window.closeModal = function () {
        document.getElementById("modal").style.display = "none";
    };

    // CHAT DUMMY
    window.sendMsg = function () {
        const msg = document.getElementById("msgBox").value;
        if (msg === "") return;
        document.getElementById("reply").innerText =
            "Pesan diterima ❤️ (dummy)";
    };

    // SCROLL ANIMATION
    const fades = document.querySelectorAll(".fade");
    function checkScroll() {
        fades.forEach(sec => {
            const top = sec.getBoundingClientRect().top;
            if (top < window.innerHeight - 100) {
                sec.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // jalan langsung
});
