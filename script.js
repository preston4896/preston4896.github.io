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
animation1.to('#view1', {
    duration: 1,
    opacity: 1,
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