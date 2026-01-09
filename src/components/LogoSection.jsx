import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  // Special sizing for specific logos
  const getSizeClass = (name) => {
    if (name === "Bosch" || name === "Axon") return "h-8 w-auto"; // Small for Bosch and Axon
    if (name === "Genetec") return "h-8 w-auto"; // Small for Genetec
    if (name === "Ring") return "h-12 w-auto"; // Larger for Ring
    if (name === "Axis Communications") return "h-20 w-auto"; // Extra large for Axis
    if (name === "Avigilon" || name === "Milestone Systems" || name === "Verkada" || name === "Motorola") {
      return "h-16 w-auto"; // Larger for Avigilon, Milestone, Verkada, Motorola
    }
    return "h-12 w-auto"; // Default size
  };

  const getPaddingClass = (name) => {
    if (name === "Ring") return "px-2"; // Less horizontal padding for Ring
    return ""; // Default padding
  };

  return (
    <div className={`flex-none flex-center marquee-item ${getPaddingClass(icon.name)}`}>
      <img 
        src={icon.imgPath} 
        alt={icon.name} 
        className={getSizeClass(icon.name)}
      />
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;