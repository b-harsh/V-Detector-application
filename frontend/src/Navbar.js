import img from './assets/Designer.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={img} href ="./Navbar.js"className="logo" alt="logo"></img>
      <a className="name" href="./Navbar.js">V-Detector</a>
      <div className="navbar-right">
        <div href="#element">Contact</div>
        <button>Sign Up</button>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
