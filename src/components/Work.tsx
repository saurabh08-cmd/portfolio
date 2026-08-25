import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Short-form Content</h4>
                  <p>Video Editing</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Clean cuts, Pacing, Captions, Transitions, Sound Effects</p>
            </div>
            <WorkImage image="/images/shortform.webp" alt="Short-form Content" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Talking Head Videos</h4>
                  <p>Video Editing</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Jump Cuts, B-roll, Text Elements, Music, Sound Effects</p>
            </div>
            <WorkImage image="/images/talkinghead.webp" alt="Talking Head Videos" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Advertisement Videos</h4>
                  <p>Video Editing</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Typography, Music, Sound Effects, Pacing, Visual Presentation</p>
            </div>
            <WorkImage image="/images/advertisement.webp" alt="Advertisement Videos" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>Motion Graphics</h4>
                  <p>After Effects</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Text Animation, Shape Animation, Transitions, Motion Design</p>
            </div>
            <WorkImage image="/images/motiongraphics.webp" alt="Motion Graphics" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
