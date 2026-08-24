import logo from '../assets/logo.png'

const Navbar = ({ onNavigate }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="F&B Openmind Academy" className="logo-img" />
        <span className="logo-blanc">Openmind Academy</span>
      </div>
      <div className="navbar-links">
        <span onClick={() => onNavigate('accueil')}>Accueil</span>
        <span onClick={() => onNavigate('localisation')}>Localisation</span>
        <span>Langues</span>
        <span>Cours de vacances</span>
        <span>Auto-école</span>
        <span>Contact</span>
      </div>
    </nav>
  )
}

export default Navbar