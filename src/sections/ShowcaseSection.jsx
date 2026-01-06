import { useRef } from "react";
import { getAssetPath } from "../utils/getAssetPath";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <a href="https://masonprotsman.github.io/Ecommerce-App/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <img src={getAssetPath("/images/project1.png")} alt="Ryde App Interface" />
              </a>
            </div>
            <div className="text-content">
              <h2>
                AI Coding Assistant for Developers, Built with React Native.
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB] p-0">
                <a href="https://masonprotsman.github.io/Weather-Forecast-Pro/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <img
                    src={getAssetPath("/images/project2.png")}
                    alt="Library Management Platform"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
              <h2>Advanced Weather App Delivering Accurate Five-Day Forecasts</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB] p-0">
                <a href="https://masonprotsman.github.io/react-real-estate/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <img 
                    src={getAssetPath("/images/project3.png")} 
                    alt="YC Directory App"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
              <h2>Professional Real Estate Marketing Platform Showcasing Properties and Driving Engagement</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;