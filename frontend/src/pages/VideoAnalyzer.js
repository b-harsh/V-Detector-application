import '../styles/VideoAnalyzer.css';
import Navbar from '../Navbar.js';
import Footer from '../Footer.js';
import { React, useState } from 'react';
import videoIcon from '../assets/cloud.webp';


const VideoAnalyzer = () => {
  const [video, setVideo] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (video) {
      console.log('Video Uploaded :', video);
      processVideo(video);
    } else {
      console.log('No video selected');
    }
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideo(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setVideo(file);
    }
  };

  const processVideo = (video) => {
    console.log('Processing Video: ', video);
    const formData = new FormData();
    formData.append('video', video);
  
    fetch("/vehicle_detection", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        // If response is successful, download the processed video
        response.blob().then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'processed_video.mp4';
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        });
      } else {
        // If response is not successful, log error
       
        console.error('Failed to process video:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Error processing video:', error);
    });
  };
  

  return (
    <div>
      <Navbar />
      <div
        className="video"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        style={{
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center',
          cursor: 'pointer',
        }}
      >
        <h2>Video Upload</h2>
        <label htmlFor="videoUpload" style={{ cursor: 'pointer' }}>
          <form onSubmit={handleFormSubmit} className="uploadInput">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={videoIcon}
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
              accept="video/*"
              id="videoUpload"
              onChange={handleVideoChange}
            />
          </form>
        </label>
        {video && (
          <div>
            <h3 style={{ textAlign: 'left', paddingLeft: '180px' }}>
              Preview:
            </h3>
            <video
              controls
              src={URL.createObjectURL(video)}
              style={{
                maxWidth: '30%',
                height: 'auto',
                float: 'left',
                borderRadius: '20px',
              }}
            ></video>
          </div>
        )}{' '}
      </div>
      <button
        onClick={processVideo}
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

export default VideoAnalyzer;
