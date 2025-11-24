import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useParallax = (
  options = {
    speed: 1,
    direction: "vertical",
  }
) => {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const moveX = ((centerX - offsetX) / 20) * options.speed;
      const moveY = ((centerY - offsetY) / 20) * options.speed;

      gsap.to(element, {
        x: options.direction === "horizontal" ? moveX : 0,
        y: options.direction === "vertical" ? moveY : 0,
        ease: "power3.out",
        duration: 2,
      });
    };

    element.addEventListener("mousemove", handleMouseMove);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
    };
  }, [options.speed, options.direction]);

  return elementRef;
};

export const useScrollAnimation = (
  options: Partial<{
    trigger: Element | null;
    start: string;
    end: string;
    scrub: number;
    markers: boolean;
  }> = {}
) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const optionsRef = useRef(options);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    optionsRef.current = options;
  });

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const opts = optionsRef.current;
    const scrollTrigger = gsap.from(element, {
      scrollTrigger: {
        trigger: opts.trigger || element,
        start: opts.start || "top center",
        end: opts.end || "bottom center",
        scrub: opts.scrub !== undefined ? opts.scrub : 1,
        markers: opts.markers || false,
      },
      y: 50,
      opacity: 0,
    });

    return () => {
      if (scrollTrigger.scrollTrigger) {
        scrollTrigger.scrollTrigger.kill();
      }
    };
  }, []);

  return elementRef;
};
