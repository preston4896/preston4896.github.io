"strict mode";

const animation1 = gsap.timeline();
animation1.to('#headshot-div', {
    duration: 1, 
    y: 300,
    opacity: 0
});
animation1.to('#text-div', {
    duration: 1,
    y: 300,
    opacity: 0
})
animation1.to('#bg', {
    duration: 1,
    opacity: 0,
    ease: "circ.out"
})
animation1.to('#view2', {
    duration: 1,
    opacity: 1
})

const controller = new ScrollMagic.Controller();
const scene1 = new ScrollMagic.Scene({
    triggerElement: "#view2",
    duration: 500,
    triggerHook: 0.25
})
.setTween(animation1)
.setPin("#view2")
.addIndicators()
.addTo(controller)