import { useState, useEffect } from "react"
import { throttle } from "lodash"

const  scrollToElement = require('scroll-to-element');

function getSize() {
  return {
    innerHeight: isWindow() ? window.innerHeight : 1000,
    innerWidth: isWindow() ? window.innerWidth : 1000,
    outerHeight: isWindow() ? window.outerHeight : 1000,
    outerWidth: isWindow() ? window.outerWidth : 1000,
  };
}

export function useWindowSize() {
  let [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

export function checkHover(): boolean {
  const canHover = !(window.matchMedia('(hover: none)').matches);

  return canHover
}

export const useWindowScrollPosition = (options = {}) => {
  const { throttleMs = 100 } = options
  const [scroll, setScroll] = useState({
    x: isWindow() ? window.pageXOffset : 0,
    y: isWindow() ? window.pageYOffset : 0,
  })

  const handle = throttle(() => {
    setScroll({
      x: isWindow() ? window.pageXOffset : 0,
      y: isWindow() ? window.pageYOffset : 0,
    })
  }, throttleMs)

  useEffect(() => {
    window.addEventListener("scroll", handle)

    return () => {
      window.removeEventListener("scroll", handle)
    }
  }, [])

  return scroll
}

export function isWindow() {
  return typeof window !== "undefined"
}

export function scrollToHashLink(timeout: number = 0, withOffset: boolean = false) {
  // const timeout
  if(window.location.hash) { 
    window.setTimeout(() => {
      const element = document.querySelector(window.location.hash);
      if (element) {
        const offset = withOffset ? -element.offsetHeight : 0;
        scrollToElement(element, {offset, duration: 300})
        element.scrollIntoView( {block: "start", inline: "nearest", behavior: "auto" });
      }
    }, timeout);
  }
}
