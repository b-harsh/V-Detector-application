import './Footer.css';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaPhoneVolume } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="footer">
      <div className="element">Contact Me</div>
      <div className="links">
        <a href="https://github.com/b-harsh" className="github">
        <FaGithub />
        Github
        </a>
        <a className="phone">
          <FaPhoneVolume />
          9258080924
        </a>
        <a href="https://x.com/habB154" className="X">
          <FaSquareXTwitter />
          Twitter
        </a>
        <a href="21JE0378@iitism.ac.in" className="email">
          <MdEmail />
          Email
        </a>
      </div>
    </div>
  );
};

export default Footer;
