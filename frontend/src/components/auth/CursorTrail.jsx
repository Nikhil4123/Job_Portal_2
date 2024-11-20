/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react';

const CursorTrail = () => {
  const [trails, setTrails] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // Optimize trail update with useCallback
  const updateTrails = useCallback((x, y) => {
    setTrails(prevTrails => [
      ...prevTrails.slice(-25), // Increased number of trail particles
      {
        x,
        y,
        id: Date.now(),
        velocity: {
          x: x - (prevTrails[prevTrails.length - 1]?.x || x),
          y: y - (prevTrails[prevTrails.length - 1]?.y || y)
        }
      }
    ]);
  }, []);

  useEffect(() => {
    let rafId;
    let lastMousePos = { x: 0, y: 0 };
    let lastUpdateTime = Date.now();

    const handleMouseMove = (e) => {
      const currentTime = Date.now();
      lastMousePos = { x: e.clientX, y: e.clientY };
      
      // Update mouse position immediately for smooth cursor movement
      setMousePos(lastMousePos);

      // Use requestAnimationFrame for smoother trail updates
      if (!rafId) {
        rafId = requestAnimationFrame(updateFrame);
      }
    };

    const updateFrame = () => {
      const currentTime = Date.now();
      const timeDelta = currentTime - lastUpdateTime;
      
      // Only update trails if enough time has passed (smoother performance)
      if (timeDelta > 8) { // Increased update frequency
        updateTrails(lastMousePos.x, lastMousePos.y);
        lastUpdateTime = currentTime;
      }
      
      rafId = requestAnimationFrame(updateFrame);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [updateTrails]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* Main cursor */}
      <div
        className="fixed w-6 h-6 rounded-full bg-blue-400/40 
                   mix-blend-screen backdrop-blur-sm animate-pulse
                   shadow-lg shadow-blue-400/20"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.05s linear'
        }}
      />
      
      {/* Inner cursor */}
      <div
        className="fixed w-2 h-2 rounded-full bg-blue-500 
                   mix-blend-screen shadow-sm shadow-blue-500/50"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.02s linear'
        }}
      />
      
      {/* Trail particles */}
      {trails.map((trail, index) => {
        const progress = index / trails.length;
        const size = Math.max(1, 6 * (1 - progress)); // Larger initial size
        
        return (
          <div
            key={trail.id}
            className="absolute rounded-full mix-blend-screen"
            style={{
              left: trail.x,
              top: trail.y,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: `rgba(96, 165, 250, ${0.4 * (1 - progress)})`,
              boxShadow: `0 0 ${size * 2}px rgba(96, 165, 250, ${0.2 * (1 - progress)})`,
              transform: 'translate(-50%, -50%)',
              transition: 'all 0.08s linear',
              opacity: 1 - progress,
            }}
          />
        );
      })}
    </div>
  );
};

export default CursorTrail;