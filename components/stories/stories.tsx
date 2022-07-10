import { BlobOptions } from "buffer";
import { stringify } from "querystring";
import { useState } from "react";
import classNames from "../../node_modules/classnames/index";
import styles from "./stories.module.scss";

const Stories = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [isSeeMore, setIsSeeMore] = useState<{
    text: boolean;
    video: boolean;
    photo: boolean;
  }>({ text: false, video: false, photo: false });
  return (
    <div className={styles.wrapper}>
      <div className={classNames("container", styles.stories)}>
        <div className={styles.storiesText}>
          <div className={styles.flex}>
            <div className={styles.leftBlock}>
              <img src="./assets/portrait_girl.png" />
            </div>
            <div className={styles.rightBlock}>
              <div className={styles.hash}># Stories</div>
              <h3>Travel In Japan: The True Experience</h3>
              <button
                type="button"
                className={styles.seeBtn}
                onClick={() =>
                  setIsSeeMore((prev) => {
                    return { photo: false, video: false, text: !prev.text };
                  })
                }
              >
                see more
              </button>
            </div>
          </div>
          {isSeeMore.text ? (
            <div className={styles.seeMoreContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              ut odit natus esse nobis laborum voluptatum recusandae. Ex
              distinctio recusandae nihil amet, temporibus quibusdam hic
              architecto soluta quas esse cupiditate.
            </div>
          ) : null}
        </div>
        <div className={styles.storiesVideo}>
          <div className={styles.flex}>
            <div
              className={classNames(styles.leftBlock, {
                [styles.playing]: isPlaying,
              })}
            >
              <video
                poster="./assets/poster.png"
                muted
                controls
                width={isPlaying ? "360" : "172"}
                height={isPlaying ? "200" : "112"}
                onPlay={() => setIsPlaying(true)}
                onEnded={() => {
                  setIsPlaying(false);
                }}
              >
                <source
                  src="https://d33wubrfki0l68.cloudfront.net/3b496f540288dba1b286dbe9c6a2ae6ab72a2b0b/22b59/assets/video/intro-video.webm"
                  type="video/webm"
                />
                <source
                  src="https://d33wubrfki0l68.cloudfront.net/6bf9ed8a545faa666af5371e5a09daeaab2c7b7c/6c6cc/assets/video/intro-video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={styles.rightBlock}>
              <div className={styles.hash}># VideoTutor</div>
              <h3>Helping Wild Turtles</h3>
              <button
                type="button"
                className={styles.seeBtn}
                onClick={() =>
                  setIsSeeMore((prev) => {
                    return { photo: false, text: false, video: !prev.video };
                  })
                }
              >
                see more
              </button>
            </div>
          </div>
          {isSeeMore.video ? (
            <div className={styles.seeMoreContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              ut odit natus esse nobis laborum voluptatum recusandae. Ex
              distinctio recusandae nihil amet, temporibus quibusdam hic
              architecto soluta quas esse cupiditate.
            </div>
          ) : null}
        </div>
        <div className={styles.storiesPhoto}>
          <div className={styles.flex}>
            <div className={styles.leftBlock}>
              <img src="./assets/portrait_boy.png" />
            </div>
            <div className={styles.rightBlock}>
              <div className={styles.hash}># Photostory</div>
              <h3>Threats of Indusrial World</h3>
              <button
                type="button"
                className={styles.seeBtn}
                onClick={() =>
                  setIsSeeMore((prev) => {
                    return { text: false, video: false, photo: !prev.photo };
                  })
                }
              >
                see more
              </button>
            </div>
          </div>
          {isSeeMore.photo ? (
            <div className={styles.seeMoreContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              ut odit natus esse nobis laborum voluptatum recusandae. Ex
              distinctio recusandae nihil amet, temporibus quibusdam hic
              architecto soluta quas esse cupiditate.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Stories;
