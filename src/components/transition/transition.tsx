import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { Box } from "@chakra-ui/react";
import gsap from "gsap";
import { Fragment, useEffect, useRef, useState } from "react";
import { TransitionProps } from "./model";

const Transition: React.FC<TransitionProps> = ({ Component, pageProps }) => {
  const next = useRef<any>();

  const [DisplayChildren, setDisplayChildren] = useState(Component);

  const [timeline, setTimeline] = useState(() =>
    gsap.timeline({ paused: true })
  );

  useIsomorphicLayoutEffect(() => {
    setTimeline(
      gsap
        .timeline({ paused: true })
        .fromTo(
          "[data-animation='transition']",
          {
            y: "100%",
          },
          {
            y: 0,
            duration: 1.5,
            ease: "expo.inOut",
          }
        )
        .to("[data-animation='transition']", {
          y: "-100%",
          delay: 0.5,
          duration: 1.5,
          ease: "expo.inOut",
        })
    );
  }, []);

  useIsomorphicLayoutEffect(() => {
    timeline.restart();
    if (next.current) {
      const timeout = setTimeout(() => {
        next.current.animateIn()!;
        window.scrollTo(0, 0);
        setDisplayChildren(Component);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [Component]);

  return (
    <Fragment>
      <Box
        w="100%"
        h="100vh"
        bg="black"
        zIndex={2}
        transform="translateY(100%)"
        data-animation="transition"
      />
      <DisplayChildren
        ref={(node: any) => (next.current = node)}
        {...pageProps}
      />
    </Fragment>
  );
};

export default Transition;
