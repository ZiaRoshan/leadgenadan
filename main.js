// import 'flowbite';

gsap.to("#navbar", {
    backgroundColor: "#000",
    duration: 0.5,
    paddingTop: "10px",
    paddingBottom: "10px",
    scrollTrigger: {
        trigger: "#navbar",
        scroller: "body",
        // markers : true,
        start: "top -1",
        end: "top -2",
        scrub: 0.5
    }
})
