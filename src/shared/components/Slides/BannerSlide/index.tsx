import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { TypeSlideBanner } from "../../../../app/HomePage/types/TypeSlideBanner";
import { ButtonSlide, ButtonSlideCircle, ImgContainer } from "./styles";

interface BannerSlideProps {
  dataSource: TypeSlideBanner[];
}

export function BannerSlide({ dataSource }: BannerSlideProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  }, AutoSlide)

  return (
    <div className="navigation-wrapper" style={{marginBottom: '1.5rem'}}>
        <div ref={sliderRef} className="keen-slider">
          {dataSource.map((img, i) => {
            return (
              <ImgContainer key={i} className={`keen-slider__slide number-slide${i}`}>
                <img src={img.imgURL} alt={img.title} />
              </ImgContainer>
            );
          })}
        </div>
        {loaded && instanceRef.current && (
          <ButtonSlideCircle>
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <ButtonSlide
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  className={currentSlide === idx ? " active" : ""}
                ></ButtonSlide>
              )
            })}
          </ButtonSlideCircle>
        )}
      </div>
  );
}

export const AutoSlide = [
  (slider: any) => {
    let timeout: ReturnType<typeof setTimeout>
    let mouseOver = false
    function clearNextTimeout() {
      clearTimeout(timeout)
    }
    function nextTimeout() {
      clearTimeout(timeout)
      if (mouseOver) return
      timeout = setTimeout(() => {
        slider.next()
      }, 4000)
    }
    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true
        clearNextTimeout()
      })
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false
        nextTimeout()
      })
      nextTimeout()
    })
    slider.on("dragStarted", clearNextTimeout)
    slider.on("animationEnded", nextTimeout)
    slider.on("updated", nextTimeout)
  },
]
