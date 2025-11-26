const StarBackground = () => {
  const styles = {
    container: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: -1,
      background: 'var(--gradient)',
    },
    star: () => {
      const moveX = (Math.random() - 0.5) * 100;
      const moveY = (Math.random() - 0.5) * 100;
      const duration = 10 + Math.random() * 20;
      const size = Math.random() * 3;

      return {
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        background: 'var(--starColor)',
        borderRadius: '50%',
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.8 + 0.2,
        animation: `float-${Math.floor(Math.random() * 10)} ${duration}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 5}s`,
        boxShadow: `0 0 ${size * 2}px var(--starGlow)`,
        '--move-x': `${moveX}px`,
        '--move-y': `${moveY}px`,
      };
    },
  };

  return (
    <>
      <style>{`
        @keyframes float-0 {
          0%, 100% { transform: translate(0, 0); opacity: 0.2; }
          25% { transform: translate(20px, -30px); opacity: 0.8; }
          50% { transform: translate(-10px, -60px); opacity: 1; }
          75% { transform: translate(30px, -40px); opacity: 0.6; }
        }
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(-30px, 20px); opacity: 0.9; }
          50% { transform: translate(-50px, -10px); opacity: 1; }
          75% { transform: translate(-20px, 30px); opacity: 0.5; }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0); opacity: 0.2; }
          25% { transform: translate(15px, 40px); opacity: 0.7; }
          50% { transform: translate(-20px, 70px); opacity: 1; }
          75% { transform: translate(10px, 35px); opacity: 0.6; }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0); opacity: 0.4; }
          25% { transform: translate(-25px, -20px); opacity: 0.8; }
          50% { transform: translate(30px, -45px); opacity: 1; }
          75% { transform: translate(-15px, -25px); opacity: 0.7; }
        }
        @keyframes float-4 {
          0%, 100% { transform: translate(0, 0); opacity: 0.2; }
          25% { transform: translate(40px, 15px); opacity: 0.9; }
          50% { transform: translate(60px, -20px); opacity: 1; }
          75% { transform: translate(35px, 10px); opacity: 0.5; }
        }
        @keyframes float-5 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(-15px, 35px); opacity: 0.8; }
          50% { transform: translate(20px, 55px); opacity: 1; }
          75% { transform: translate(-10px, 40px); opacity: 0.6; }
        }
        @keyframes float-6 {
          0%, 100% { transform: translate(0, 0); opacity: 0.2; }
          25% { transform: translate(25px, -25px); opacity: 0.7; }
          50% { transform: translate(-30px, -50px); opacity: 1; }
          75% { transform: translate(20px, -30px); opacity: 0.6; }
        }
        @keyframes float-7 {
          0%, 100% { transform: translate(0, 0); opacity: 0.4; }
          25% { transform: translate(-35px, 10px); opacity: 0.9; }
          50% { transform: translate(-60px, -15px); opacity: 1; }
          75% { transform: translate(-40px, 5px); opacity: 0.7; }
        }
        @keyframes float-8 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(10px, 45px); opacity: 0.8; }
          50% { transform: translate(-25px, 80px); opacity: 1; }
          75% { transform: translate(5px, 50px); opacity: 0.5; }
        }
        @keyframes float-9 {
          0%, 100% { transform: translate(0, 0); opacity: 0.2; }
          25% { transform: translate(-20px, -35px); opacity: 0.7; }
          50% { transform: translate(35px, -55px); opacity: 1; }
          75% { transform: translate(-15px, -40px); opacity: 0.6; }
        }
      `}</style>
      <div style={styles.container}>
        {Array.from({ length: 200 }).map((_, index) => (
          <div key={index} style={styles.star()} />
        ))}
      </div>
    </>
  );
};

export default StarBackground;
