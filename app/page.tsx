import Hero from "./components/Hero";
import About from "./components/About";
import CaseStudyList from "./components/CaseStudyList";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Documents from "./components/Documents";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Page() {
    return (
        <>
            <Hero />
            <About />
            <CaseStudyList />
            <Skills />
            <Tools />
            <Documents />
            <Contact />
            <Footer />
        </>
    );
}
