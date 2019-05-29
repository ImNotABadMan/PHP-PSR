let swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

/** show img */
let img = new Vue({
    el: ".content-1",
    data: {
        text: "vue text"
    },
    methods: {
        show() {
            enlarge(this)
        }
    },
});


function enlarge(obj)
{
    alert(obj.text);
}