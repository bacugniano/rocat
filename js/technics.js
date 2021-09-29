//Табы в технике

$(document).ready(function(){

    $('ul.additional__tab-list').on('click', 'li:not(.additional__tab-item--active)', function() {
        $(this)
          .addClass('additional__tab-item--active').siblings().removeClass('additional__tab-item--active')
          .closest('section.additional').find('ul.additional__list').removeClass('additional__list--active').eq($(this).index()).addClass('additional__list--active');
      });

    if ($(window).width() < 481) {
        $('.technics').removeClass('technics--active');
        $('.additional__details-item--invisible').remove();
    }

    $(".tab-navigation__button").click(function () {
        $('.tab-navigation').addClass('tab-navigation--none');
    });

    $(".technics__back").click(function () {
        $('.tab-navigation').removeClass('tab-navigation--none');
        $('.technics').removeClass('technics--active');
    });
    

    $('.additional__tab-item--disabled').bind('click',function(){return false;});

    $('.additional__services-list').slick({
        mobileFirst: true,
        accessibility: false,
        arrows: false,
        centerMode: true,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          // {
          //   breakpoint: 360,
          //   settings: {
          //     slidesToShow: 1
          //   }
          // },   
                    {
            breakpoint: 700,
            settings: "unslick"
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      $('.additional__details-list').slick({
        mobileFirst: true,
        accessibility: false,
        arrows: false,
        centerMode: true,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          // {
          //   breakpoint: 360,
          //   settings: {
          //     slidesToShow: 1
          //   }
          // },   
                    {
            breakpoint: 700,
            settings: "unslick"
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
      
//скролл и стрелка

    // $(window).scroll(function() {
    //   if ($(this).scrollTop() > 1000) {
    //     $('.pageup').fadeIn();
    //   } else {
    //     $('.pageup').fadeOut();
    //   }
    // })

    // $("a[href^='#']").click(function(){
    //   var _href = $(this).attr("href");
    //   $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    //   return false;
    // });

});

//Табы в навигации

let tab = function () {
    let tabNav = document.querySelectorAll('.tab-navigation__item'),
        tabContent = document.querySelectorAll('.technics'),
        nav = document.querySelectorAll('.tab-navigation'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('tab-navigation__item--active');
        });
        this.classList.add('tab-navigation__item--active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('technics--active', 'animate__animated', 'animate__fadeIn') : item.classList.remove('technics--active', 'animate__animated', 'animate__fadeIn');
        })
    }

};

let tab2 = function () {
    let tabNav = document.querySelectorAll('.tab-navigation__item'),
        tabContent = document.querySelectorAll('.technics'),
        nav = document.querySelectorAll('.tab-navigation'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('tab-navigation__item--active');
        });
        this.classList.add('tab-navigation__item--active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('technics--active') : item.classList.remove('technics--active');
        })
    }

};

if ($(window).width() < 481) tab2();
else tab();