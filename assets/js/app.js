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

$('.header__menu-btn').on('click', openMenu);

function closeMenu() {
    $('.mobile-menu').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.mobile-menu__header__menu-btn').on('click', closeMenu);


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

const new_page_owl = $('.new-page__owl');

new_page_owl.owlCarousel({
    loop: true,
    dots: true,
    autoplay: false,
    nav: false,
    responsive: {
        0: {
            items: 1,
            margin: 16
        },
        768: {
            items: 1,
            margin: 20
        }
    }
});


const owl = $('.gallery__owl');

owl.owlCarousel({
    loop: true,
    margin: 20,
    items: 1,
    dots: true,
    autoplay: false,
    nav: false,
});

$('.gallery__owl-next').click(function () {
    owl.trigger('next.owl.carousel');
});

$('.gallery__owl-prev').click(function () {
    owl.trigger('prev.owl.carousel');
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


const reviews__swiper = new Swiper('.aboit-slider__swiper', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 18,
    pagination: {
        el: '.aboit-slider__swiper__pagination',
        clickable: true,
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }

});


class ItcAccordion {
    constructor(target, config) {
        this._el = typeof target === 'string' ? document.querySelector(target) : target;
        const defaultConfig = {
            alwaysOpen: true,
            duration: 350
        };
        this._config = Object.assign(defaultConfig, config);
        this.addEventListener();
    }
    addEventListener() {
        this._el.addEventListener('click', (e) => {
            const elHeader = e.target.closest('.accordion__header');
            if (!elHeader) {
                return;
            }
            if (!this._config.alwaysOpen) {
                const elOpenItem = this._el.querySelector('.accordion__item_show');
                if (elOpenItem) {
                    elOpenItem !== elHeader.parentElement ? this.toggle(elOpenItem) : null;
                }
            }
            this.toggle(elHeader.parentElement);
        });
    }
    show(el) {
        const elBody = el.querySelector('.accordion__body');
        if (elBody.classList.contains('collapsing') || el.classList.contains('accordion__item_show')) {
            return;
        }
        elBody.style['display'] = 'block';
        const height = elBody.offsetHeight;
        elBody.style['height'] = 0;
        elBody.style['overflow'] = 'hidden';
        elBody.style['transition'] = `height ${this._config.duration}ms ease`;
        elBody.classList.add('collapsing');
        el.classList.add('accordion__item_slidedown');
        elBody.offsetHeight;
        elBody.style['height'] = `${height}px`;
        window.setTimeout(() => {
            elBody.classList.remove('collapsing');
            el.classList.remove('accordion__item_slidedown');
            elBody.classList.add('collapse');
            el.classList.add('accordion__item_show');
            elBody.style['display'] = '';
            elBody.style['height'] = '';
            elBody.style['transition'] = '';
            elBody.style['overflow'] = '';
        }, this._config.duration);
    }
    hide(el) {
        const elBody = el.querySelector('.accordion__body');
        if (elBody.classList.contains('collapsing') || !el.classList.contains('accordion__item_show')) {
            return;
        }
        elBody.style['height'] = `${elBody.offsetHeight}px`;
        elBody.offsetHeight;
        elBody.style['display'] = 'block';
        elBody.style['height'] = 0;
        elBody.style['overflow'] = 'hidden';
        elBody.style['transition'] = `height ${this._config.duration}ms ease`;
        elBody.classList.remove('collapse');
        el.classList.remove('accordion__item_show');
        elBody.classList.add('collapsing');
        window.setTimeout(() => {
            elBody.classList.remove('collapsing');
            elBody.classList.add('collapse');
            elBody.style['display'] = '';
            elBody.style['height'] = '';
            elBody.style['transition'] = '';
            elBody.style['overflow'] = '';
        }, this._config.duration);
    }
    toggle(el) {
        el.classList.contains('accordion__item_show') ? this.hide(el) : this.show(el);
    }
}


document.querySelectorAll('.accordion').forEach((accordion) => {
    new ItcAccordion(accordion, {
        alwaysOpen: false
    });
});
