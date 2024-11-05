import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { gsap, Power3 } from "gsap";
import "../Navbar/Navbar.css";
import "locomotive-scroll/src/locomotive-scroll.scss";

function Middle() {
  const scrollRef = useRef(null);
  const miniCircleRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.7,
    });

    firstPageAnim();

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  function firstPageAnim() {
    const tl = gsap.timeline();
    tl.from("av", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      ease: Power3.easeInOut,
    }).to(".boundingelem", {
      y: 0,
      ease: Power3.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    });
  }

  useEffect(() => {
    const handleMouseMove = (dets) => {
      if (miniCircleRef.current) {
        miniCircleRef.current.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      <div id="minicircle" ref={miniCircleRef}></div>
      <div id="main" data-scroll-section>
        <div id="hero">
           
        </div>
      </div>
    </div>
  );
}

export default Middle;
