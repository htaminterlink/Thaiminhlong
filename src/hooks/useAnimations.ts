import { useEffect, useRef, RefObject } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimationOptions {
  trigger?: Element | string | null;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  duration?: number;
  ease?: string;
}

export const useParallaxAnimation = <T extends HTMLElement>(
  options: Partial<AnimationOptions> = {}
): RefObject<T | null> => {
  const elementRef = useRef<T | null>(null);
  const optionsRef = useRef(options);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    optionsRef.current = options;
  });

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const opts = optionsRef.current;
    const defaultOptions = {
      trigger: element,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      markers: false,
    };

    const mergedOptions = { ...defaultOptions, ...opts };

    const animation = gsap.from(element, {
      scrollTrigger: mergedOptions,
      y: 50,
      opacity: 0,
      duration: opts.duration || 1,
      ease: opts.ease || "power2.out",
    });

    return () => {
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
    };
  }, []);

  return elementRef;
};

export const useHoverParallax = <T extends HTMLElement>(
  speed: number = 1
): RefObject<T | null> => {
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = element.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const mouseX = mouseEvent.clientX - rect.left;
      const mouseY = mouseEvent.clientY - rect.top;

      const moveX = ((centerX - mouseX) / 20) * speed;
      const moveY = ((centerY - mouseY) / 20) * speed;

      gsap.to(element, {
        x: moveX,
        y: moveY,
        duration: 1,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "power3.out",
      });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [speed]);

  return elementRef;
};

export const useTextAnimation = <T extends HTMLElement>(
  options: Partial<AnimationOptions> = {}
): RefObject<T | null> => {
  const elementRef = useRef<T | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasAnimated.current) return;

    const text = element.textContent;
    if (!text) return;

    hasAnimated.current = true;
    element.innerHTML = "";
    const chars = text.split("");

    chars.forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = "0";
      span.style.display = "inline-block";
      element.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        duration: 0.5,
        delay: index * 0.05,
        ease: "power2.out",
      });
    });

    return () => {
      gsap.killTweensOf(element.children);
    };
  }, []);

  return elementRef;
};
