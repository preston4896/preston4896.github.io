"strict mode";

// TODO: Animate video opacity to zero eventually.
const animations = gsap.timeline();
// animations.to('#headshot-div', {
//     duration: 0.2, 
//     x: -150,
//     opacity: 0
// });
// animations.to('#text-div', {
//     duration: 0.2,
//     x: 150,
//     opacity: 0
// })
animations.to('#bg', {
    duration: 0.75,
    opacity: 0
})
// // animations.to('#bitmoji', {
// //     duration: .2,
// //     opacity: 1
// // })
// // animations.to('view2-text-parentDiv', {
// //     duration: .2,
// //     opacity: 1
// // })

const controller = new ScrollMagic.Controller();
const scene1 = new ScrollMagic.Scene({
    triggleElement: "#view2",
    duration: 500,
})
.setTween(animations)
.addIndicators()
.addTo(controller)

// code snippet: https://jsfiddle.net/cse_tushar/Dxtyu/141/
// The following code enables smooth-scrolling and navItem active status switching.
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $(".ml-auto .nav-item").each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#bannerResponsive a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#bannerResponsive ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}