import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useRef,
  ReactNode,
} from "react";
import Lenis from "@studio-freight/lenis";

const ScrollContext = createContext({
  lenis: null,
});

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [lenis, setLenis] = useState<any>();
  const reqIdRef: any = useRef(null);

  useEffect(() => {
    const animate = (time: any) => {
      lenis?.raf(time);
      reqIdRef.current = requestAnimationFrame(animate);
    };
    reqIdRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqIdRef.current);
  }, [lenis]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    setLenis(lenis);

    return () => {
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  const memoedValue = useMemo(
    () => ({
      lenis,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <ScrollContext.Provider value={memoedValue}>
      {children}
    </ScrollContext.Provider>
  );
};
export default function usePage() {
  return useContext(ScrollContext);
}
