// =========================
// NAVIGASI HALAMAN
// =========================

let currentPage = 1;
const totalPages = 7;

function nextPage() {

    document
        .getElementById(`page${currentPage}`)
        .classList.remove("active");

    currentPage++;

    if (currentPage <= totalPages) {

        document
            .getElementById(`page${currentPage}`)
            .classList.add("active");

        if (currentPage === 2) {

            i = 0;

            document
                .getElementById("typing")
                .innerHTML = "";

            typeWriter();

        }

    }

}

// =========================
// TYPING EFFECT
// =========================

const message =
"Selamat Ulang Tahun Buat Pacar Aku Yang Paling Cantik ❤️. Semoga di usia yang baru ini kamu selalu diberikan kesehatan, kebahagiaan, rezeki yang melimpah, dan semua impian yang kamu inginkan dapat tercapai. Makasih Ya Sayang Udah Mau Sama Aku Sampai Sejauh Ini. Semoga Kedapannya Kamu menjadi pribadi yang luar biasa. I LOVE YOU SAYANG ❤️";

let i = 0;

function typeWriter() {

    const target =
        document.getElementById("typing");

    if (i < message.length) {

        target.innerHTML +=
            message.charAt(i);

        i++;

        setTimeout(typeWriter, 40);

    }

}

// =========================
// POPUP MEMORI
// =========================

const album = [

    {
        foto: "foto1.jpg",
        teks: "❤️ Ini adalah foto pertama yang sangat berkesan bagiku. Momen ini tidak akan pernah aku lupakan."
    },

    {
        foto: "foto2.jpg",
        teks: "🥰 Salah satu hari paling bahagia karena bisa menghabiskan waktu bersamamu."
    },

    {
        foto: "foto3.jpg",
        teks: "💕 Senyummu selalu menjadi alasan aku semangat setiap hari."
    }

];

let current = 0;

function bukaAlbum(index) {

    current = index;

    document.getElementById("popup")
        .style.display = "block";

    tampilkanPopup();

}

function tampilkanPopup() {

    document.getElementById("popupFoto").src =
        album[current].foto;

    document.getElementById("popupText").innerHTML =
        album[current].teks;

}

function nextPopup() {

    current++;

    if (current >= album.length) {

        current = 0;

    }

    tampilkanPopup();

}

function prevPopup() {

    current--;

    if (current < 0) {

        current = album.length - 1;

    }

    tampilkanPopup();

}

function tutupAlbum() {

    document.getElementById("popup")
        .style.display = "none";

}

// =========================
// HALAMAN CINTA
// =========================

function halamanCinta() {

    document.getElementById("page3")
        .classList.remove("active");

    document.getElementById("page4")
        .classList.add("active");
    currentPage = 4;
}

// =========================
// HALAMAN SURAT
// =========================

function halamanSurat() {

    document.getElementById("page4")
        .classList.remove("active");

    document.getElementById("page5")
        .classList.add("active");
        currentPage = 5;

}

// =========================
// COUNTDOWN ULANG TAHUN
// =========================

const nextBirthday =
    new Date("2027-06-10T00:00:00");

setInterval(() => {

    const now = new Date();

    const distance =
        nextBirthday - now;

    const days =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor((distance / (1000 * 60 * 60)) % 24);

    const minutes =
        Math.floor((distance / (1000 * 60)) % 60);

    const seconds =
        Math.floor((distance / 1000) % 60);

    if (document.getElementById("days")) {

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

    }

}, 1000);

// =========================
// EFEK HATI BERTERBANGAN
// =========================

function buatHati() {

    const hati = document.createElement("div");

    hati.innerHTML = "❤️";

    hati.style.position = "fixed";
    hati.style.left = Math.random() * 100 + "vw";
    hati.style.top = "-20px";
    hati.style.fontSize =
        (Math.random() * 20 + 20) + "px";

    hati.style.zIndex = "999";
    hati.style.pointerEvents = "none";

    document.body.appendChild(hati);

    let posisi = -20;

    const animasi = setInterval(() => {

        posisi += 3;

        hati.style.top = posisi + "px";

        if (posisi > window.innerHeight) {

            clearInterval(animasi);
            hati.remove();

        }

    }, 30);

}

setInterval(buatHati, 1200);