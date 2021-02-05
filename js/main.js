$(document).ready(function() {
    const flowersSlider = new Swiper('.flowers-slider', {
        // Slider parameters
        loop: true,
        slidesPerView: 6,


        // Navigation 
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        //настройки адаптивно версии
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,

            },
            // when window width is >= 576
            576: {
                slidesPerView: 4,

            },
            // when window width is >= 992
            992: {
                slidesPerView: 6,

            }
        }
    });


    const reviwesSlider = new Swiper('.reviwes-slider', {
        // Slider parameters
        loop: true,
        slidesPerView: 1,


        // Navigation 
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },


    });


    $("#review-1").on('click', function() {

        $.fancybox.open([{
                src: 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
                opts: {
                    caption: 'First caption',
                    thumb: 'https://source.unsplash.com/IvfoDk30JnI/240x160'
                }
            },
            {
                src: 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
                opts: {
                    caption: 'Second caption',
                    thumb: 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
                }
            }
        ], {
            loop: true,
            thumbs: {
                autoStart: true
            }
        });

    });
});