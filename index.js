import lagrangeBarbaCore from "https://cdn.skypack.dev/@lagrange/barba-core";
import gsap from "https://cdn.skypack.dev/gsap";

console.log(lagrangeBarbaCore);

gsap.to(".loader", {
  opacity: 0,
  duration: 1,
});

lagrangeBarbaCore.init({
  transitions: [
    {
      name: "opacity-transition",
      leave(data) {
        console.log("leaving");
        return gsap.to(".loader", {
          opacity: 1,
        });
      },
      beforeEnter(data) {
        console.log("before entering");
      },
      enter(data) {
        console.log("entering");
        data.current.container.remove();
        return gsap.from(".loader", {
          opacity: 0,
        });
      },
    },
  ],
});
