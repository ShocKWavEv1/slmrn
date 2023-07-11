import gsap from "gsap";
export const timer = () => {
    const TIME_IN_SECONDS = 4;

    let counterItem: any = document.querySelector(".timer");

    let counter = {
      val: 0,
    };

    gsap.to(counter, {
      duration: TIME_IN_SECONDS,
      val: 100,
      onUpdate() {
        counterItem.textContent = `${Math.ceil(counter.val)}%`;
      },
      ease: "Power3.easeOut",
      repeat: 0,
      delay: 1.5,
    });
}

export const curtain = () => {
    const tl = gsap.timeline();

    tl.to("body", {
      overflow: "hidden",
      height: "100vh"
    })
      .to(".preloader .text-container", {
        duration: 0,
        opacity: 1,
        ease: "Power3.easeOut",
      })
      .from(".preloader .text-container h1", {
        duration: 1.5,
        delay: 1,
        y: 70,
        skewY: 10,
        stagger: 0.4,
        ease: "Power3.easeOut",
      })
      .to(".preloader .text-container h1", {
        duration: 1.2,
        y: 70,
        skewY: -20,
        stagger: 0.2,
        ease: "Power3.easeOut",
      })
      .to(".preloader, .time_container", {
        delay: 1,
        duration: 1.5,
        height: "0vh",
        ease: "Power3.easeOut",
      })
      .to(
        "body",
        {
          overflow: "auto",
          height: "auto"
        },
        "-=2"
      )
      .to(".preloader", {
        display: "none",
      });
}