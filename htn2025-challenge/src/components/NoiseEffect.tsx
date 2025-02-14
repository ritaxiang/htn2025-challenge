const NoiseEffect = () => {
    return (
      <>
        <section></section>
        <svg width="0" height="0">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9 0.9">
              <animate
                attributeName="baseFrequency"
                dur="1.5s"
                values="0.9 0.9; 0.85 0.85; 0.9 0.9"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="60"></feDisplacementMap>
          </filter>
        </svg>
      </>
    );
  };
  
  export default NoiseEffect;
  