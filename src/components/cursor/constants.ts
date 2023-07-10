import { gsap } from "gsap";

export const customCursor = () => {
    const cursor: any = document.getElementById("custom-cursor");
    const links: any = document.querySelectorAll(
      ".link"
    );
    const cursorText: any = document.querySelector("cursor-text");

    console.log(links);

    const onMouseMove = (event: any) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, { x: clientX, y: clientY });
    };

    const onMouseEnterLink = (event: any) => {
      const link = event.target;
      if (link.classList.contains("view")) {
        gsap.to(cursor, { scale: 5 });
        //cursorText.style.display = "block";
      } else {
        gsap.to(cursor, { scale: 5 });
      }
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1 });
      //cursorText.style.display = "none";
    };

    document.addEventListener("mousemove", onMouseMove);

    links.forEach((link: any) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });
}