// Icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('ativado');
}

// Scroll das Sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; // Corrigido para window.scrollY
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Links do navbar ativo
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // Animação para o scroll
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    // Header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove o toggle icon e navbar quando clicar na navbar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('ativado');
}

// Copy text - WhatsApp
function copyWhat() {
    var copyText = document.getElementById("myWhatsapp");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copiado: " + copyText.value;
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Whatsapp Copiado";
}

// Copy text - Email
function copyMail() {
    var copyText = document.getElementById("myeMail");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copiado: " + copyText.value;
}

function outFuncEmail() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "e-Mail Copiado";
}

// Modal Functionality
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var spans = document.getElementsByClassName("close");

// Quando o usuário clicar no botão, abre o modal 
btn.onclick = function(event) {
    event.preventDefault(); // Impede o redirecionamento
    modal.style.display = "block"; // Exibe o modal
}

// Quando o usuário clicar em <span> (x), fecha o modal
for (let i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
        modal.style.display = "none";
    }
}

// Quando o usuário clicar fora do modal, ele fecha
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
