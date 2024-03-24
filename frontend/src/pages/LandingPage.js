import Navbar from '../Navbar';
import '../styles/LandingPage.css';

import img from '../assets/Designer1.png';
import Footer from '../Footer';

function LandingPage() {
  const handleClick = () => {
    window.location.href = '/pic'; 
  };

  return (
    <div className="landing">
      <Navbar />
      <section className="middle">
        <div className="card">
          <h3 className="card-title">V-Detector </h3>
          <div className="card-content">
            <ul className="container">
              <li>
                • Facilitates the seamless upload of transportation-related
                images, including those captured by traffic cameras.
              </li>
              <li>
                • Users can easily perform object detection tasks on these
                images, allowing for the identification of various
                transportation elements.
              </li>
              <li>
                • The application offers a user-friendly interface for efficient
                image uploading and object detection analysis.
              </li>
              <li>
                • Through intuitive design and functionality, users can quickly
                upload images and obtain insightful object detection results.
              </li>
            </ul>
          </div>
          <img src={img} className="image"></img>
        </div>
      </section>
      <button className="GetStarted" onClick={handleClick}>
        Get Started
      </button>
      <Footer />
    </div>
  );
}

export default LandingPage;
