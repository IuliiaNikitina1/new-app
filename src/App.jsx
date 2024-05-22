import NavBar from "./components/NavBar";
import './App.css';
import SectionAboutMe from './components/SectionAboutMe';
import SectionEducation from './components/SectionEducation';
import SectionProjects from './components/SectionProjects';
import SectionMain from './components/SectionMain';
import Footer from './components/Footer';

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

function App() {

    return (
    <>
    
    <SectionMain>
    </SectionMain>
    <SectionAboutMe></SectionAboutMe>
    <SectionEducation></SectionEducation>
    <SectionProjects></SectionProjects>
    <Footer></Footer>
    </>
  );
}

export default App;