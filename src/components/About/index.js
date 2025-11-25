import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

// Your skills data with colors
const skills = [
  { name: 'Python', color: '#3776AB' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'Java', color: '#ED8B00' },
  { name: 'C', color: '#A8B9CC' },
  { name: 'C++', color: '#00599C' },
  { name: 'HTML', color: '#E34F26' },
  { name: 'CSS', color: '#1572B6' },
  { name: 'R', color: '#276DC3' },
  { name: 'Machine Learning', color: '#FF6B6B' },
  { name: 'Computer Vision', color: '#4ECDC4' },
  { name: 'Full-stack Dev', color: '#45B7D1' },
  { name: 'App Development', color: '#96CEB4' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Node.js', color: '#339933' },
  { name: 'TensorFlow', color: '#FF6F00' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'OpenCV', color: '#5C3EE8' },
  { name: 'SQL', color: '#4479A1' },
  { name: 'Git', color: '#F05032' },
  { name: 'Spring Boot', color: '#6DB33F' },
  { name: 'Keras', color: '#D00000' },
  { name: 'Qt', color: '#41CD52' },
];

// Calculate 3D positions using Fibonacci sphere
function calculatePositions(count, radius) {
  const positions = [];
  const phi = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = phi * i;

    positions.push({
      x: Math.cos(theta) * radiusAtY * radius,
      y: y * radius,
      z: Math.sin(theta) * radiusAtY * radius,
    });
  }
  return positions;
}

const SkillsSphere = () => {
  const [rotation, setRotation] = useState({ x: -15, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const [autoRotate, setAutoRotate] = useState(true);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const radius = 280;
  const positions = calculatePositions(skills.length, radius);

  // Auto rotation
  useEffect(() => {
    if (!autoRotate || isDragging) return;

    const interval = setInterval(() => {
      setRotation((prev) => ({
        ...prev,
        y: prev.y + 0.3,
      }));
    }, 30);

    return () => clearInterval(interval);
  }, [autoRotate, isDragging]);

  // Mouse handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setAutoRotate(false);
    setLastPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastPos.x;
    const deltaY = e.clientY - lastPos.y;

    setRotation((prev) => ({
      x: Math.max(-60, Math.min(60, prev.x - deltaY * 0.3)),
      y: prev.y + deltaX * 0.3,
    }));

    setLastPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setAutoRotate(true), 3000);
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setAutoRotate(false);
    const touch = e.touches[0];
    setLastPos({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];

    const deltaX = touch.clientX - lastPos.x;
    const deltaY = touch.clientY - lastPos.y;

    setRotation((prev) => ({
      x: Math.max(-60, Math.min(60, prev.x - deltaY * 0.3)),
      y: prev.y + deltaX * 0.3,
    }));

    setLastPos({ x: touch.clientX, y: touch.clientY });
  };

  // Calculate card position with rotation
  const getTransform = (pos) => {
    const rad = (angle) => (angle * Math.PI) / 180;
    const rotX = rad(rotation.x);
    const rotY = rad(rotation.y);

    // Apply Y rotation
    let x = pos.x * Math.cos(rotY) - pos.z * Math.sin(rotY);
    let z = pos.x * Math.sin(rotY) + pos.z * Math.cos(rotY);
    let y = pos.y;

    // Apply X rotation
    const newY = y * Math.cos(rotX) - z * Math.sin(rotX);
    const newZ = y * Math.sin(rotX) + z * Math.cos(rotX);

    return { x, y: newY, z: newZ };
  };

  const styles = {
    container: {
      width: '50%',
      height: '100%',
      top: 0,
      paddingTop: '5%',
      marginLeft: 0,
      position: 'absolute',
      right: 0,
      overflow: 'hidden',
      cursor: isDragging ? 'grabbing' : 'grab',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    scene: {
      width: '600px',
      height: '600px',
      position: 'relative',
      perspective: '1000px',
    },
    sphere: {
      width: '100%',
      height: '100%',
      position: 'relative',
      transformStyle: 'preserve-3d',
    },
    centerSphere: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: '50px',
      height: '50px',
      marginLeft: '-25px',
      marginTop: '-25px',
      borderRadius: '50%',
      background: 'radial-gradient(circle at 30% 30%, #ff999c, #ED6165, #d14548)',
      boxShadow: `
        0 0 60px rgba(237, 97, 101, 0.6),
        0 0 100px rgba(237, 97, 101, 0.4),
        inset 0 0 30px rgba(255, 255, 255, 0.1)
      `,
      zIndex: 1000,
    },
    skillCard: (pos, skill, isHovered) => ({
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: `translate(-50%, -50%) translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px)`,
      padding: '8px 14px',
      borderRadius: '0',
      background: isHovered ? skill.color : 'transparent',
      border: `1px solid ${skill.color}`,
      boxShadow: isHovered
        ? `0 0 20px ${skill.color}66`
        : 'none',
      color: isHovered ? '#333' : skill.color,
      fontSize: '11px',
      fontWeight: '400',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      zIndex: Math.round(pos.z) + 500,
      opacity: pos.z < -100 ? 0.3 : 1,
      fontFamily: 'sans-serif',
      letterSpacing: '2px',
      textTransform: 'uppercase',
    }),
    connection: (pos) => {
      const length = Math.sqrt(pos.x ** 2 + pos.y ** 2);
      const angle = Math.atan2(pos.y, pos.x) * (180 / Math.PI);

      return {
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: `${length}px`,
        height: '1px',
        background: `linear-gradient(90deg, rgba(99, 102, 241, 0.6), rgba(99, 102, 241, 0.1))`,
        transformOrigin: '0 50%',
        transform: `rotate(${angle}deg)`,
        zIndex: 1,
        opacity: pos.z < -100 ? 0.1 : 0.4,
      };
    },
  };

  return (
    <div
      style={styles.container}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* 3D Scene */}
      <div style={styles.scene}>
        <div style={styles.sphere}>
          {/* Connection lines */}
          {skills.map((_, index) => {
            const pos = getTransform(positions[index]);
            return (
              <div
                key={`line-${index}`}
                style={styles.connection(pos)}
              />
            );
          })}

          {/* Skill cards */}
          {skills.map((skill, index) => {
            const pos = getTransform(positions[index]);
            const isHovered = hoveredSkill === index;

            return (
              <div
                key={skill.name}
                style={styles.skillCard(pos, skill, isHovered)}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {skill.name}
              </div>
            );
          })}

          {/* Center sphere */}
          <div style={styles.centerSphere}></div>
        </div>
      </div>
    </div>
  );
};

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                        />
                    </h1>
                    <p>I build AI stuff that (hopefully) makes people's lives a bit easier. Currently wrapping up my
                    Computer Science degree at the University of Adelaide and actively searching for my next
                    software engineering role.</p>

                    <p>My tech journey began at Hanoi - Amsterdam High School for the Gifted, where I studied in the
                    specialised IT class and led our school's robotics team. After moving to Adelaide for
                    university, I recently finished working at Creart Digital Media where I built projects like Mira
                    (an AI Streamer for Mirror XR at Adelaide Fringe) and Clevart (an AI chatbot that reduced response
                    times by 90%). I've developed a strong passion for machine learning and computer vision, especially
                    after creating a Vietnamese sign language translator that won third place at a national science fair.</p>

                    <p>I'm comfortable working across the entire stack. Whether it's training ML models with Pytorch, TensorFlow,
                    building APIs with Spring Boot, developing frontends with React, or creating mobile apps, I work
                    mainly in Python, Java, C++, and JavaScript depending on what the project needs.</p>
                </div>

                <SkillsSphere />
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About