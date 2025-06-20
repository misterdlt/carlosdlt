import Lenis from "lenis";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, SplitText } from "gsap/all";

import "./App.css";
import WorkSection from "./sections/work/work";
import AboutSection from "./sections/about/about";
import HeroSection from "./sections/hero/hero";
import FooterSection from "./sections/footer/footer";

function App() {
  //
  //
  const mainRef = useRef(null);
  const horizontalScroll = useRef(null);
  const verticalScroll = useRef(null);

  // Setup GSAP
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // hero Text
    gsap.set(".split", { opacity: 1 });

    let split = SplitText.create(".hero-text", {
      type: "chars, words",
      mask: "chars",
    });

    gsap.from(split.chars, {
      duration: 1,
      yPercent: "random([-150, 150])",
      xPercent: "random([-150, 150])",
      stagger: {
        from: "random",
        amount: 0.6,
      },
      ease: "power3.out",
    });

    // Horizontal Scroll Card Stack for Work Section
    let spacer = 45;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".work",
        pin: true,
        scrub: 0.5, // <-- will override for mobile below
        start: "top 0%",
        end: "bottom 20%", // <-- will override for mobile below
        // markers: true,
        invalidateOnRefresh: true,
      },
    });
    //Gsap's Match Media for Responsive js ❤️
    let mm = gsap.matchMedia();

    // desktop setup code here...
    mm.add("(min-width: 800px)", () => {
      tl.fromTo(
        ".work-item:not(:first-child)",
        {
          x: (index) => window.innerWidth / 1.125 + spacer * index,
          stagger: 0.5,
          y: 0,
        },
        {
          x: (index) => spacer * (index + 1),
          stagger: 0.5,
          y: 0,
        }
      );
    });
    // mobile setup code here...
    mm.add("(max-width: 799px)", () => {
      // Slow down effect on mobile by increasing scrub and scroll distance
      tl.scrollTrigger.scrub = 1.5; // increase scrub for smoother, slower effect
      tl.scrollTrigger.end = "bottom 0%"; // extend scroll distance for slower progress

      tl.fromTo(
        ".work-item:not(:first-child)",
        {
          y: (index) => window.innerHeight / 1.55 + spacer * index,
          stagger: 0.5,
          x: 0,
        },
        {
          y: (index) => spacer * (index + 1),
          stagger: 0.5,
          x: 0,
        }
      );
    });
  }, []);

  return (
    <div id="app" ref={mainRef}>
      <HeroSection />
      <AboutSection />
      <WorkSection ref={horizontalScroll} />
      <FooterSection ref={verticalScroll} />
    </div>
  );
}

export default App;
