import '../styles/App.css';
import Footer from './Footer';
import './Header'
import Header from './Header';
import Introduction from './Introduction';
import MesExperiencesPro from './MesExperiencesPro';
import MesFormations from './MesFormations';
import MesProjetsPerso from './MesProjetsPersoWeb';
import MesSkills from './MesSkills';
import Test from './Test';

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <MesSkills />
      <MesExperiencesPro />
      <MesProjetsPerso />
      <MesFormations />
      <Footer />
    </div>
  );
}

export default App;
