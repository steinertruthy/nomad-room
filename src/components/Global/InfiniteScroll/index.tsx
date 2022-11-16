import { useRef, useEffect } from "react";

interface iInfiteScrollProps {
  callback: () => void;
}

export const InfiteScroll = ({ callback }: iInfiteScrollProps) => {
  const divInifiteScroll = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      const radio = entry.intersectionRatio;

      if (radio) {
        callback();
      }
    });

    if (divInifiteScroll.current) {
      observer.observe(divInifiteScroll.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return <div ref={divInifiteScroll} />;
};
