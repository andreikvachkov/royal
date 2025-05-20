const header = document.getElementById("header");
function toggleHeaderClass() {
    if (window.scrollY > 0) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
}
toggleHeaderClass();
window.addEventListener("scroll", toggleHeaderClass);


gsap.registerPlugin(ScrollTrigger);

gsap.to(".char", {
    color: "#fff",
    stagger: 0.05,
    ease: "none",
    scrollTrigger: {
        trigger: ".three-section__text",
        start: "top 95%",
        end: "bottom 25%",
        scrub: true,
        markers: false,
    }
});

gsap.to(".chartwo", {
    color: "#fff",
    stagger: 0.05,
    ease: "none",
    scrollTrigger: {
        trigger: ".gallery__title",
        start: "top 95%",
        end: "bottom 25%",
        scrub: true,
        markers: false,
    }
});

gsap.to(".charthree", {
    color: "#fff",
    stagger: 0.05,
    ease: "none",
    scrollTrigger: {
        trigger: ".video__bottom-text",
        start: "top 95%",
        end: "bottom 25%",
        scrub: true,
        markers: false,
    }
});

gsap.timeline({
    scrollTrigger: {
        trigger: ".four-section",
        start: "top top",
        end: () => "+=" + window.innerHeight * 1,
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: false,
    }
})
    .to(".four-section", { /* любые анимации */ })

gsap.timeline({
    scrollTrigger: {
        trigger: ".five-section",
        start: "top top",
        end: () => "+=" + window.innerHeight * 1,
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: false,
    }
})
    .to(".five-section", { /* анимации */ })

gsap.timeline({
    scrollTrigger: {
        trigger: ".six-section",
        start: "top top",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: false,
    }
})
    .to(".six-section", { /* анимации */ })


function openMenu() {
    $('.mobile-menu').addClass('active');
    $('body').addClass('no-scroll');
}

function closeMenu() {
    $('.mobile-menu').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.mobile-menu__header__menu-btn').on('click', closeMenu);

$('.header__menu-btn').on('click', openMenu);


function openPopupGallery() {
    const imgSrc = $(this).find('img').attr('src');

    $('.gallery_popup__content img').attr('src', imgSrc);

    $('.gallery_popup').addClass('active');
    $('body').addClass('no-scroll');
}

function closePopupGallery() {
    $('.gallery_popup').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.gallery_popup__close').on('click', closePopupGallery);

$('.payment__bottom__item').on('click', openPopupGallery);


$('.gallery__owl').owlCarousel({
    loop: true,
    margin: 20,
    items: 1,
    dots: true,
    autoplay: false,
});

$('.news__owl').owlCarousel({
    loop: true,
    margin: 20,
    items: 1,
    dots: true,
    autoplay: false,
    responsive: {

        769: {
            items: 3
        }
    }
});