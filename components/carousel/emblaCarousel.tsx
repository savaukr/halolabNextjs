import React, {
  useEffect,
  useState,
  Children,
  cloneElement,
  SetStateAction,
} from "react";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import classNames from "classnames";

import styles from "./emblaCarousel.module.scss";

type Props = {
  children: React.ReactNode;
  isLoop?: boolean;
  activeIndex?: number;
  setActiveIndex?: React.Dispatch<SetStateAction<number>>;
  setEmblaApi?: React.Dispatch<SetStateAction<EmblaCarouselType>>;
  setSlidersLength?: React.Dispatch<SetStateAction<number>>;
  isAoutoPlay?: boolean;
  isFewSlides?: boolean;
};

const EmblaCarousel = ({
  children,
  isLoop = true,
  activeIndex,
  setActiveIndex,
  setEmblaApi,
  setSlidersLength,
  isAoutoPlay = true,
  isFewSlides = false,
}: Props) => {
  const options = { loop: isLoop };
  const plugins = isAoutoPlay ? [Autoplay({ stopOnLastSnap: true })] : [];
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
  const [sliders, setSliders] = useState([]);
  const [active, setActive] = useState(activeIndex);

  useEffect(() => {
    let arrChildren = [];
    arrChildren = [...Children.toArray(children)];
    setSliders(
      arrChildren.map((slide, index) => {
        return cloneElement(slide, {
          className: classNames(
            slide.props.className,
            styles.embla__slide,
            { [styles.fewSlides]: isFewSlides },
            {
              [styles.active]: setEmblaApi
                ? index === activeIndex
                : index === active,
            }
          ),
          key: index,
        });
      })
    );
    setSlidersLength?.(arrChildren.length);
  }, [active, children]);

  useEffect(() => {
    const cb = () => {
      if (!setEmblaApi) {
        setActive(emblaApi?.selectedScrollSnap());
      } else {
        setEmblaApi?.(emblaApi);

        setActiveIndex?.(emblaApi?.selectedScrollSnap());
      }
    };
    emblaApi?.on("init", cb);
    emblaApi?.on("select", cb);
    return () => {
      emblaApi?.off("init", cb);
      emblaApi?.off("select", cb);
    };
  }, [emblaApi]);

  return (
    <div className={styles.embla}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className={styles.embla__container}>{sliders}</div>
      </div>
    </div>
  );
};
export default EmblaCarousel;
