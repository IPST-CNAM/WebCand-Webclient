import React, { useState } from 'react';
import download from 'downloadjs';

import './watchVideoInterview.css'; 
import ReactPlayer from 'react-player';

function WatchVideoInterview() { 
  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  const [videoFileName, setVideoFileName] = useState('video.mp4');

  const handleVideoDownload = () => {
    download(videoUrl, videoFileName, 'video/mp4');
  };

  return (
    <div className="App">
      <main>
        <div className="video-and-text-container">
          <div className="text-container">
            <div className="text-item">
              <p>Nom Prénom</p>
            </div>
            <div className="text-item">
              <a href="/cv">Télécharger le CV</a>
            </div>
            <div className="text-item">
              <a href="/lettre">Télécharger lettre de motivation</a>
            </div>
            <div className="text-item">
              <a href="/evaluation">Evaluer le candidat</a>
            </div>
          </div>
          <div className="video-container">
            <ReactPlayer
              url={videoUrl}
              controls={true}
              width="100%"
              height="75vh"
            />
            <div className="bottom-left-text">
              <a href="#" onClick={handleVideoDownload}>Télécharger la vidéo</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WatchVideoInterview; 
