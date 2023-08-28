import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import Iphone from '../../assests/Iphone.png'
import Lambo from '../../assests/Lambo2.png'
import Furniture from '../../assests/furniture.png'
import Plants from '../../assests/Plants1.jpeg'
import Bike from '../../assests/Bike1.avif'
import Hurry from "../../assests/Hurry.png"



export default function CarouselControlsOutside() {
  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 2000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
    
    {/*<!-- Component: Carousel with controls outside --> */}
      <div className="glide-04 relative mt-[20vh] w-[85vw] m-auto rounded-[20px] shadow-2xl">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap  flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
          {/* <li>
              <img
                src={Hurry}
                className="Img m-auto max-h-full w-full max-w-full"
              />
            </li> */}
            <li>
              <img
                src={Iphone}
                className="Img m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src={Furniture}
                className="Img m-auto max-h-full w-full max-w-full"
              />
            </li>
           
            <li>
              <img
                src={Lambo}
                className="Img m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src={Plants}
                className="Img m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src={Bike}
                className="Img m-auto max-h-full w-full max-w-full"
              />
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="flex w-full items-center justify-center gap-2 p-4"
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      {/*<!-- End Carousel with controls outside --> */}
     

    </>
  )
}