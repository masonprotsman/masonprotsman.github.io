import LogoShowcase from "./components/LogoSection"
import NavBar from "./components/NavBar"
import Contact from "./sections/Contact"
import Experience from "./sections/ExperienceSection"
import FeatureCards from "./sections/FeatureCards"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <LogoShowcase />
            <FeatureCards />
            <Experience />
            <TechStack />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default App
