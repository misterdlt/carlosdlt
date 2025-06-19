import Lenis from "lenis";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "gsap/all";

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
    // Hero through Work Section
    gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        endTrigger: ".work",
        end: "bottom bottom",
        snap: {
          snapTo: 1 / 2,
          duration: { min: 0.25, max: 0.75 },
          delay: 0.125,
          ease: "power1.inOut",
        },
      },
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

    // Back to Vertical Scroll
    gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "top bottom+=1",
        end: "bottom bottom",
        snap: [0, 1],
      },
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
