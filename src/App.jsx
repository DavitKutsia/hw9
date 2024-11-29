import { useState, useRef } from 'react';
import './App.css';

function App() {
  // Timer state
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null); // Reference to store the interval ID

  // Start the timer
  const startTimer = () => {
    if (intervalRef.current) return; // Prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1); // Add count every second
    }, 1000);
  };

  // Stop the timer
  const stopTimer = () => {
    clearInterval(intervalRef.current); // Clear the interval
    intervalRef.current = null;
  };

  // Reset the timer
  const endTimer = () => {
    clearInterval(intervalRef.current); // Clear the interval
    intervalRef.current = null;
    setCount(0); // Reset count to 0
  };

  // Image zoom on hover
  const imageRef = useRef(null);

  const zoomIn = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = 'scale(1.2)'; // Zoom in the image
    }
  };

  const zoomOut = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = 'scale(1)'; // Reset zoom
    }
  };

  // Video play/pause functionality
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Play video
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause video
    }
  };

  return (
    <div className="App">
      <div className="timer">
        <h1>Timer: {count} seconds</h1>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={endTimer}>End</button>
      </div>

      <div className="image-zoom">
        <h2>Hover to zoom</h2>
        <img
          ref={imageRef}
          src="/assets/photo.jpeg" width={100}
          alt=""
          onMouseEnter={zoomIn}
          onMouseLeave={zoomOut}
          style={{ transition: 'transform 0.3s ease' }}
        />
      </div>

      <div className="video-player">
        <video ref={videoRef} width="320" height="240" controls>
        <source src="/assets/video.mp4" type="video/mp4" />
        </video>
        <div>
          <button onClick={playVideo}>Start</button>
          <button onClick={pauseVideo}>Stop</button>
        </div>
      </div>
    </div>
  );
}

export default App;

