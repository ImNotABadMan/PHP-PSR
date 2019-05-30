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
    console.log(obj.$refs.imgSrc.src);
    $('.mask-layer-img').attr('src', obj.$refs.imgSrc.src);
    /**
     * mask-btn 按钮触发
     * mask-layer 最外层
     * mask-content 编辑层
     * */
    $('.mask-layer').fadeToggle();
    $('.mask-content').fadeToggle();
}

$(function () {
    $('.mask-layer').click(function (event) {
        if (event.target !== this) {
            return;
        }
        $(this).fadeToggle();
        $('.mask-content').fadeToggle();
    });

    $('.mask-content').each(function (index,item) {
        $(this).css("margin-left", -$(this).innerWidth() * 9.2);
        $(this).css("margin-top", -$(this).innerHeight()/10);
    })
});
