// script untuk menjalankan background carousel pada header
let slideIndex = 1;
showDiv(slideIndex);

function plusDiv(n) {
    showDiv(slideIndex += n);
}

function showDiv(n) {
    var i;
    var x = document.getElementsByClassName("bg-image");
    if (n > x.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = x.length;
    }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block"
}

setInterval(() => {
    plusDiv(1);
}, 4000)



// script untuk menampilkan konten berdasarkan tombol navigasi yang diklik
const links = document.querySelectorAll('nav > a');

for (var i= 0; i<links.length; i++) {
    links[i].addEventListener('click', function(e) {
        var classLink = this.getAttribute('class');

        const articles = document.querySelectorAll('article');
        articles.forEach(function(art) {
            art.style.display = 'none';
        });
        const image = document.querySelector('aside > img');
        const imageDescription = document.querySelector('aside > span');
        image.src = `./assets/img/${classLink}.svg`;
        image.alt = `${this.innerHTML}`;
        imageDescription.innerHTML = `Gambar ${this.innerHTML}`;

        const article = document.querySelector(`article#${classLink}`);
        article.style.display = 'block';
    })
}


//script untuk menampilkan navbar di tampilan mobile pada saat tombol toggle diklik
const toggle = document.querySelector('#toggle-check');
const navbar = document.querySelector('.navbar');
toggle.addEventListener('click', function() {
    if (toggle.checked == true) {
        navbar.classList.remove('nav-off');
        navbar.classList.add('nav-on');
    } else {
        navbar.classList.remove('nav-on');
        navbar.classList.add('nav-off');
    }
    return
});

//script untuk menutup navbar saat user menekan layar diluar area navbar
document.onclick = function(e) {
    if (!toggle.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('nav-on');
        navbar.classList.add('nav-off');
        toggle.checked = false;
    }
}

//script untuk auto close navbar setelah user menekan link navbar
navbar.addEventListener('click', function() {

    if (window.innerWidth <= 768) {
        navbar.classList.remove('nav-on');
        navbar.classList.add('nav-off');
        toggle.checked = false;
    }
});

//script untuk menampilkan tombol to top saat user melakukan scroll
let toTop = document.querySelector('.to-top'); 
window.addEventListener('scroll', function () { 
    if (document.body.scrollTop > 20  || document.documentElement.scrollTop > 20) { 
        toTop.style.display = 'block'; 
    } else { 
        toTop.style.display = 'none'; 
    } 
});

//script untuk mengarahkan ke top page setelah menekan tombol to top
toTop.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})



