import { useState, useEffect, useCallback } from "react";
import { EmblaCarouselType } from "embla-carousel-react";
import EmblaCarousel from "../carousel/emblaCarousel";
import SlideTravel from "../slideTravel/slideTravel";
import { COLOR_BODY, COLOR_BLUE, COLOR_RED } from "../const/conts";

import styles from "./sliderTravel.module.scss";
import classNames from "../../node_modules/classnames/index";

const SliderTravel = () => {
  const [scrollPrev, setScrollPrev] = useState<() => void>();
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [slidersLength, setSlidersLength] = useState(0);
  console.log("emblaApi:", emblaApi);
  console.log(emblaApi?.scrollSnapList());

  const DotButton = ({ selected, onClick }) => (
    <button
      className={classNames(styles.embla__dot, {
        [styles.is_selected]: selected,
      })}
      type="button"
      onClick={onClick}
    />
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );
  const handleClickPrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setActiveIndex((prev) => {
        if (prev === 0) return slidersLength - 1;
        else return prev - 1;
      });
    }
  };

  const handleClickNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setActiveIndex((prev) => {
        if (prev === slidersLength - 1) return 0;
        else return prev + 1;
      });
    }
  };
  useEffect(() => {
    const cb = () => {
      setEmblaApi?.(emblaApi);
      setActiveIndex?.(emblaApi?.selectedScrollSnap());
    };
    emblaApi?.on("init", cb);
    emblaApi?.on("select", cb);
    setScrollSnaps?.(emblaApi?.scrollSnapList());
    return () => {
      emblaApi?.off("init", cb);
      emblaApi?.off("select", cb);
    };
  }, [emblaApi]);

  return (
    <div className="container">
      <div className={styles.wrapper}>
        {/* <div className="flex justify-center items-center">
          <div className="sm:w-1/3 md:w-1/2 justify-end hidden sm:flex">
            <div
              className="glide-arrow bg-primary rounded-full h-12 w-12 flex items-center justify-center shadow-md cursor-pointer transition-colors duration-300 hover:bg-opacity-75"
              data-glide-dir="<"
              onClick={handleClickPrev}
            >
              <img
                src="/assets/images/icons/icon-arrow-white.svg"
                alt="arrow icon"
              />
            </div>
            <div
              className="glide-arrow bg-primary rounded-full h-12 w-12 flex items-center justify-center shadow-md cursor-pointer transform rotate-180 transition-colors duration-300 hover:bg-opacity-75 ml-4"
              data-glide-dir=">"
              onClick={handleClickNext}
            >
              <img
                src="/assets/images/icons/icon-arrow-white.svg"
                alt="arrow icon"
              />
            </div>
          </div>
        </div> */}
        <div className={styles.arrowLeft} onClick={handleClickPrev}>
          <img src="./svg/ChevronLeft.svg" alt="arrow" />
        </div>
        <ul className={styles.slides}>
          <EmblaCarousel
            setEmblaApi={setEmblaApi}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            setSlidersLength={setSlidersLength}
            isAoutoPlay={false}
            isFewSlides={false}
          >
            <li className={styles.slides}>
              <SlideTravel
                title="Travel In Japan: The True Experience"
                text="When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics."
                bg_color={COLOR_BODY}
              />
            </li>
            <li className={styles.slides}>
              <SlideTravel
                title="Travel In Japan: The True Experience"
                text="When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics."
                bg_color={COLOR_RED}
              />
            </li>
            <li className={styles.slides}>
              <SlideTravel
                title="Travel In Japan: The True Experience"
                text="When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics."
                bg_color={COLOR_BLUE}
              />
            </li>
          </EmblaCarousel>
        </ul>
        <div className={styles.arrowRight} onClick={handleClickNext}>
          <img src="./svg/ChevronLeft.svg" alt="arrow" />
        </div>
      </div>
      <div className={styles.embla__dots}>
        {scrollSnaps?.map((_, index) => (
          <DotButton
            key={index}
            selected={index === activeIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderTravel;
