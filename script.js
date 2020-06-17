"strict mode";

const animation1 = gsap.timeline();
animation1.to('#headshot-div', {
    duration: 1, 
    y: 300,
    opacity: 0,
    ease: "power4.out"
});
animation1.to('#text-div', {
    duration: 1,
    y: 300,
    opacity: 0,
    ease: "power4.out"
})
animation1.to('body', {
    duration: 1,
    "--color": "rgba(9,9,121,1)",
    ease: "circ.out"
})
animation1.to('#bitmoji', {
    duration: 1,
    opacity: 1,
})
animation1.to('#v2-title', {
    duration: 1,
    opacity: 1,
})
animation1.to('#v2-text', {
    duration: 1,
    opacity: 1,
})

const controller = new ScrollMagic.Controller();
const scene1 = new ScrollMagic.Scene({
    triggerElement: "#view2",
    duration: 500,
    triggerHook: 0.5
})
.setTween(animation1)
.setPin("#view2")
.addIndicators()
.addTo(controller)

// // Animation: View 1
// // define timeline and animation
// const animation1 = gsap.timeline();

// // move the headshot to the left.
// animation1.to("#headshot-div", {
//     duration: 1,
//     x: -150,
//     // opacity: 0,
//     ease: "power4-out"
// })

// // move the text to the right
// animation1.to("#text-div", {
//     duration: 1,
//     x: 150,
//     // opacity: 0,
//     ease: "power4-out"
// })

// // view 1 controller - bind the animations to the view.
// const controller1 = new ScrollMagic.Controller();
// const scene1 = new ScrollMagic.scene({
//     triggerElement: "#view1"
// })
// .setTween(animation1)
// .setPin("#view1")
// .addIndicators()
// .addTo(controller1)