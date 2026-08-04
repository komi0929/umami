"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface ScrollAnimationResult<T extends HTMLElement> {
  ref: RefObject<T | null>;
  isVisible: boolean;
}

export function useScrollAnimation<T extends HTMLElement>(
  optionsOrAnimationName?: ScrollAnimationOptions | string
): ScrollAnimationResult<T> & [RefObject<T | null>, boolean] {
  const options: ScrollAnimationOptions =
    typeof optionsOrAnimationName === "string" ? {} : (optionsOrAnimationName ?? {});

  const { threshold = 0.15, rootMargin = "0px 0px -50px 0px", triggerOnce = true } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  // Return a hybrid that supports both destructuring patterns:
  // const { ref, isVisible } = useScrollAnimation()  ← object destructuring
  // const [ref, isVisible] = useScrollAnimation()     ← array destructuring
  const result = [ref, isVisible] as ScrollAnimationResult<T> & [RefObject<T | null>, boolean];
  result.ref = ref;
  result.isVisible = isVisible;
  return result;
}
