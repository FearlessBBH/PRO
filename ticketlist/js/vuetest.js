import Swiper from 'swiper';
var test = new Vue({
    el: '#swiperww',
    data: {
        swipers: [{
                src: 'images/ticketlist/icon_line.png'
            },
            {
                src: 'images/ticketlist/icon_line.png'
            },
            {
                src: 'images/ticketlist/icon_line.png'
            }
        ]
    },
    mounted() {
        var mySwiper = new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay: {
                delay: '4000'
            },

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

        })
    }
});