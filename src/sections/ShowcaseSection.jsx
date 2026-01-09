import { useRef, useState } from "react";
import { getAssetPath } from "../utils/getAssetPath";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const [showMore, setShowMore] = useState(false);
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);
  const extraProjectsRef = useRef(null);

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
                <img src={getAssetPath("/images/project-7.png")} alt="Ryde App Interface" />
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
                    src={getAssetPath("/images/project-8.png")}
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
                    src={getAssetPath("/images/project-9.png")} 
                    alt="YC Directory App"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
              <h2>Professional Real Estate Marketing Platform Showcasing Properties and Driving Engagement</h2>
            </div>
          </div>
        </div>

        {/* Additional Projects - Hidden by Default */}
        <div className={`transition-all duration-700 ease-in-out overflow-hidden ${
          showMore ? 'max-h-[3000px] opacity-100 pt-10' : 'max-h-0 opacity-0'
        }`}>
          <div className="showcaselayout">
            <div className="project-list-wrapper overflow-hidden">
              <div className="project">
                <div className="image-wrapper bg-[#E0F7FA] p-0">
                  <a href="https://masonprotsman.github.io/Movie-Search-Project/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    <img
                      src={getAssetPath("/images/project-6.png")}
                      alt="Project 5"
                      className="w-full h-full object-cover"
                    />
                  </a>
                </div>
                <h2>A real-time movie discovery platform with TMDb integration and personalized favorites.</h2>

              </div>

              <div className="project">
                <div className="image-wrapper bg-[#F3E5F5] p-0">
                  <a href="https://masonprotsman.github.io/mason-portfolio/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    <img 
                      src={getAssetPath("/images/project-5.png")} 
                      alt="Project 6"
                      className="w-full h-full object-cover"
                    />
                  </a>
                </div>
                <h2>Interactive React portfolio website showcasing projects, skills, and dynamic user experiences.</h2>
              </div>
            </div>

            <div className="first-project-wrapper">
              <div className="image-wrapper">
                <a href="https://masonprotsman.github.io/restaurant-website/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <img src={getAssetPath("/images/project-3.png")} alt="Project 4" />
                </a>
              </div>
              <div className="text-content">
                <h2>
                  A modern, responsive restaurant website with elegant design and seamless online ordering.
                </h2>
                <p className="text-white-50 md:text-xl">
                  Intuitive restaurant website featuring polished design, seamless navigation, and integrated online ordering for a smooth customer experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* See More Button - Full Width */}
        <div className="w-full relative flex items-center justify-center mt-10 mb-10 px-5 md:px-10">
          <div className="absolute w-full h-px bg-white opacity-20"></div>
          <button
            onClick={() => setShowMore(!showMore)}
            className="relative px-6 py-2 bg-black-200 text-white font-semibold hover:bg-black-300 transition-all duration-300 z-10"
          >
            {showMore ? 'Show Less' : 'See More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;