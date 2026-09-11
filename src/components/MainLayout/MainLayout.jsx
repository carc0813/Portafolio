import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Skills from "../../Sections/Skills/Skills";
import Projects from "../../Sections/Projects/Projects";
import Experiencia from "../../Sections/Experiencia/Experiencia";
import Titles from "../../Sections/Titles/Titles";
import Services from "../../Sections/Services/Services";
import Contacto from "../../Sections/Contacto/Contacto";
import Footer from "../Footer/Footer";


function MainLayout(){

    return(

        <>

            <Navbar/>

            <Hero/> 
 
            <About/>

             <Skills/>
               <Titles />

            <Services />

            <Projects/>

            <Experiencia/>

            <Contacto/>   

            <Footer/>

        </>

    )

}

export default MainLayout;