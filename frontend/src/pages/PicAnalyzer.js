import '../styles/PicAnalyzer.css';
import Navbar from '../Navbar.js';
import Footer from '../Footer.js';
import { React, useState } from 'react';
import img from '../assets/cloud.webp';

const PicAnalyzer = () => {
  const [image, setImage] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (image) {
      console.log('Image Uploaded :', image);
    } else {
      console.log('No image selected');
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      displayImage(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      displayImage(file);
    }
  };
  const displayImage = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <Navbar />
      <div
        className="pic"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        style={{
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center',
          cursor: 'pointer',
        }}
      >
        <h2>Image Upload</h2>
        <label htmlFor="imageUpload" style={{ cursor: 'pointer' }}>
          <form onSubmit={handleFormSubmit} className="uploadInput">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={img}
                style={{
                  width: '159px',
                  height: 'auto',
                  paddingLeft: '12rem ',
                }}
                alt="Preview"
                onMouseOver={(e) => (e.currentTarget.style.filter = 'none')}
                onMouseOut={(e) =>
                  (e.currentTarget.style.filter = 'grayscale(50%)')
                }
              />
            </div>

            <input
              type="file"
              accept="image/*"
              id="imageUpload"
              onChange={handleImageChange}
            />
          </form>
        </label>
        {image && (
          <div>
            <h3 style={{ textAlign: 'left', paddingLeft: '180px' }}>
              Preview:
            </h3>
            <img
              src={image}
              alt="Uploaded"
              style={{
                maxWidth: '30%',
                height: 'auto',
                float: 'left',
                borderRadius: '20px',
              }}
            ></img>
          </div>
        )}{' '}
      </div>
      <button
        style={{
          width: '300px',
          height: '75px',
          position: 'absolute',
          top: '77%',
          left: '40%',
          color: 'blue',
          fontSize: '40px',
          borderRadius: '10px',
        }}
      >
        Process
      </button>
      
      <Footer />
    </div>
  );
};

export default PicAnalyzer;
