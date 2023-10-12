import React from "react";
import { useSpring, animated, useScroll } from "@react-spring/web";
import "../styles/WaveScrollAnimation.css"; // You should create this CSS file

const X_LINES = 40;
const INITIAL_WIDTH = 20;

const WaveScrollAnimation = () => {
  const containerRef = React.useRef(null);
  const barContainerRef = React.useRef(null);

  const [textStyles, textApi] = useSpring(() => ({
    y: "100%",
  }));

  const { scrollYProgress } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      if (scrollYProgress > 0.7) {
        textApi.start({ y: "0" });
      } else {
        textApi.start({ y: "100%" });
      }
    },
    default: {
      immediate: true,
    },
  });

  return (
    <div ref={containerRef} className="wave-scroll-animation">
      <div className="animated-layers">
        <animated.div ref={barContainerRef} className="bar-container">
          {Array.from({ length: X_LINES }).map((_, i) => (
            <animated.div
              key={i}
              className="bar"
              style={{
                width: scrollYProgress.to((scrollP) => {
                  const percentilePosition = (i + 1) / X_LINES;

                  return (
                    INITIAL_WIDTH / 4 +
                    40 *
                      Math.cos(
                        ((percentilePosition - scrollP) * Math.PI) / 1.5
                      ) ** 32
                  );
                }),
              }}
            />
          ))}
        </animated.div>
        <animated.div className="bar-container-inverted">
          {({ length: X_LINES }).map((_, i) => (
            <animated.div
              key={i}
              className="bar"
              style={{
                width: scrollYProgress.to((scrollP) => {
                  const percentilePosition = 1 - (i + 1) / X_LINES;

                  return (
                    INITIAL_WIDTH / 4 +
                    40 *
                      Math.cos(
                        ((percentilePosition - scrollP) * Math.PI) / 1.5
                      ) ** 32
                  );
                }),
              }}
            />
          ))}
        </animated.div>
        <animated.div
          className="dot"
          style={{
            clipPath: scrollYProgress.to((val) => `circle(${val * 100}%)`),
          }}
        >
          <h1 className="title">
            <span>
              <animated.span style={textStyles}>Aha!</animated.span>
            </span>
            <span>
              <animated.span style={textStyles}>You found me!</animated.span>
            </span>
          </h1>
        </animated.div>
      </div>
    </div>
  );
};

export default WaveScrollAnimation;
