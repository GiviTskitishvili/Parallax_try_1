document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "section",
      start: "top top",
      end: "+=200%",
      scrub: true,
      pin: true,
    },
  });

  timeline
    // .to(".title", { y: -200, duration: 3 })
    .to("#sixth", { y: -700, duration: 6 })
    .to("#fifth", { y: -500, duration: 6 }, "-=6")
    .to("#forth", { y: -400, duration: 6 }, "-=6")
    .to("#third", { y: -300, duration: 6 }, "-=6")
    .to("#second", { y: -200, duration: 6 }, "-=6")
    .to("#first", { y: -100, duration: 6 }, "-=6")
    .to(".content, .blur", { top: "0%", duration: 6 }, "-=6")
    .to(".title, nav, .footer-wrapper", { y: -600, duration: 6 }, "-=6")
    .from(".title", { top: "350px", autoAlpha: 1, duration: 3 }, "-=5")
    .from(".one", { top: "40px", autoAlpha: 0, duration: 3 }, "-=4")
    .from(".two", { top: "40px", autoAlpha: 0, duration: 3 }, "-=3.5")
    .from(".three", { top: "40px", autoAlpha: 0, duration: 3 }, "-=3.5")
    .from(".four", { top: "40px", autoAlpha: 0, duration: 3 }, "-=4");
});
