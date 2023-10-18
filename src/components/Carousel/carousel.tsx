"use client";
import * as React from "react";
import { Carousel as MaterialCarousel } from "@material-tailwind/react";
import type { CarouselProps } from "@material-tailwind/react";

export interface ICarouselProps {
  carousel?: CarouselProps; // Rename the local variable to 'carousel'
}

export default function Carousel(props: ICarouselProps) {
  return (
    <div data-aos="fade-down">
      <MaterialCarousel
        autoplay={true}
        autoplayDelay={5000}
        loop={true}
        className={`transition-all `}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4  flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full max-w-[100%] max-h-[600px] object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full max-w-[100%] max-h-[600px] object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full max-w-[100%] max-h-[600px] object-cover"
        />
      </MaterialCarousel>
    </div>
  );
}
