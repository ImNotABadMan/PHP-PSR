let swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    longSwipes: false,
    roundLengths: true, // Set to true to round values of slides width and height to prevent blurry texts on usual resolution screens (if you have such)
    // setWrapperSize:true ,
    // width: 1000,
    // nested: true,
    // autoHeight: true,
    // centerInsufficientSlides: true,
    // slidesOffsetAfter: 5000,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
});

/** show img */
let img = new Vue({
    el: ".content-1",
    data: {
        text: "vue text"
    },
    methods: {
        show(event) {
            console.log(event);
            console.log(event.currentTarget);
            // $('.mask-layer-img').attr('src', src);
            console.log(this.$refs);
            /**
             * mask-btn 按钮触发
             * mask-layer 最外层
             * mask-content 编辑层
             * */
            vmImg.$data.imgSrc = $(event.currentTarget).find('img').attr('src');

            $('.mask-layer').fadeToggle();
            $('.mask-content').each(function (index,item) {
                $(this).css("margin-left", -$(this).innerWidth()/2);
                $(this).css("margin-top", -$(this).innerHeight()/10);
            }).fadeToggle();
        }
    },
});


let vmImg = new Vue({
    el: ".mask-layer",
    data: {
        imgSrc: '',
    },
    methods: {
        hideImg: function(event) {
            // console.log(event);
            // console.log(event.currentTarget);
            // console.log(this);
            // console.log(this.$el);
            // if (event.currentTarget !== this.$el) {
            //     return;
            // }
            $(event.currentTarget).fadeToggle();
            $('.mask-content').fadeToggle();
        }
    }
});



// $(function () {
//     $('.mask-content').each(function (index,item) {
//         $(this).css("margin-left", -$(this).innerWidth() * 9.2);
//         $(this).css("margin-top", -$(this).innerHeight()/10);
//     })
// });
