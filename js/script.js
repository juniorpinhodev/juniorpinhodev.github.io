// icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('ativado');
}


// scroll das sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.screenY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //links do navbar ativo
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // Animação para o scroll
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }

    });

    // header

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // isto revove o toggle icon e navbar quando clicar em navbar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('ativado');

}

                            // Copy text
    // whatsapp
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

     // email
    function copyMail() {
        var copyText = document.getElementById("myeMail");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);

        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copiado: " + copyText.value;
        }

        function outFunc() {
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "e-Mail Copiado";
        }

