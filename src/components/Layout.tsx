import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";
import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const lenis = new Lenis({ duration: 1.1 });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [location.pathname]);
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
