import { useState, useEffect, useCallback } from "react";
import { EmblaCarouselType } from "embla-carousel-react";
import EmblaCarousel from "../carousel/emblaCarousel";

import styles from "./sliderSaveNature.module.scss";

const SliderSaveNature = () => {
  const [scrollPrev, setScrollPrev] = useState<() => void>();
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [slidersLength, setSlidersLength] = useState(0);

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
        <div className={styles.slidesWrapper}>
          <ul className={styles.slides}>
            <EmblaCarousel
              setEmblaApi={setEmblaApi}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              setSlidersLength={setSlidersLength}
              isAoutoPlay={false}
              isFewSlides={true}
            >
              <li className={styles.slide}>
                <img src="./assets/sliderSave/slide1.png" />
              </li>
              <li className={styles.slide}>
                <img src="./assets/sliderSave/slide2.png" />
              </li>
              <li className={styles.slide}>
                <img src="./assets/sliderSave/card-main.png" />
              </li>
              <li className={styles.slide}>
                <img src="./assets/sliderSave/slide4.png" />
              </li>
              <li className={styles.slide}>
                <img src="./assets/sliderSave/slide5.png" />
              </li>
            </EmblaCarousel>
          </ul>
        </div>
        <div className={styles.arrows}>
          <div className={styles.arrowLeft} onClick={handleClickPrev}>
            <img
              src="./svg/ChevronLeft.svg"
              alt="arrow"
              width={"8px"}
              height={"15px"}
            />
          </div>
          <div>
            <span className={styles.count}>{`${activeIndex + 1}`}</span>
            {` / ${scrollSnaps.length}`}
          </div>
          <div className={styles.arrowRight} onClick={handleClickNext}>
            <img
              src="./svg/ChevronLeft.svg"
              alt="arrow"
              width={"8px"}
              height={"15px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderSaveNature;
