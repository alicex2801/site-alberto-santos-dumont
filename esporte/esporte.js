document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('hamburguer');
  const navLateral = document.getElementById('menu-lateral');

  btn.addEventListener('click', () => {
    navLateral.classList.toggle('show');
    btn.classList.toggle('ativo');
  });

  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach(carousel => {
    // Pular carrossel da galeria
    if (carousel.closest(".galeria")) return;

    const images = carousel.querySelectorAll(".carousel-images img");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");
    const carouselImages = carousel.querySelector(".carousel-images");

    let index = 0;
    const total = images.length;

    function showImage() {
      carouselImages.style.transform = `translateX(${-index * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % total;
      showImage();
    });

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + total) % total;
      showImage();
    });

    const velocidade = 3000;
    setInterval(() => {
      index = (index + 1) % total;
      showImage();
    }, velocidade);
  });
});

// Animação ao rolar
function animarAoRolar() {
  const elementos = document.querySelectorAll('[data-animar]');
  const alturaTela = window.innerHeight * 0.8;

  elementos.forEach(el => {
    const topoElemento = el.getBoundingClientRect().top;
    if (topoElemento < alturaTela) {
      el.classList.add('ativo');
    }
  });
}
window.addEventListener('scroll', animarAoRolar);
window.addEventListener('load', animarAoRolar);
