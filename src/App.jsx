/** 
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone . 
 * Toute reproduction, utilisation ou diffusion, partielle ou totale, 
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

/**
 * Node Modules
 */
import { useState } from "react";


/**
 * Components
 */
import Header from "./components/layout/Header";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Services from "./components/home/Services";
import Projects from "./components/home/Projects";
import Review from "./components/home/Review";
import Contact from "./components/home/Contact";
import CtaBanner from "./components/home/CtaBanner";
import Footer from "./components/layout/Footer";
import ProjectModal from "./components/home/cards/ProjectModal";


/**
 * Hooks
 */
import { NavBarContextProvider } from "./hooks/use_navbar";


const App = () => {

    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    return (
        <NavBarContextProvider>
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Projects setShowModal={setShowModal} setModalContent={setModalContent}/>
                {/*<Review />*/}
                <Contact />
            </main>
            <CtaBanner />
            <Footer />
            <ProjectModal isVisible={showModal} onClose={() => setShowModal(false)} content={modalContent}/>
        </NavBarContextProvider>
    )
}

export default App;