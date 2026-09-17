const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

navLinks.onclick = () => {
    navLinks.classList.remove('active');
}

function copyEmail() {
    navigator.clipboard.writeText("tanweien2703@gmail.com");
    alert("Copied email.");
}