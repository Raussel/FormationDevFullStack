import Hero from '../Components/Hero'
import ServiceCard from '../Components/ServiceCard'
import Footer from '../Components/Footer'

const Home = () => {
  const services = {
    langues: {
      titre: 'Langues',
      description: 'Anglais, Français, Allemand, Italien — niveaux A1 à C1',
    },
    coursVacances: {
      titre: 'Cours de vacances',
      description: 'Programme intensif pendant les vacances scolaires',
    },
    autoEcole: {
      titre: 'Auto-école',
      description: 'Catégories de permis, promotions temporaires',
    },
  }

  return (
    <div>
      <Hero />
      <div className="services-section">
        <p className="services-titre">Nos services</p>
        <div className="services-grid">
          <ServiceCard titre={services.langues.titre} description={services.langues.description} />
          <ServiceCard titre={services.coursVacances.titre} description={services.coursVacances.description} />
          <ServiceCard titre={services.autoEcole.titre} description={services.autoEcole.description} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home