import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faList, faRocket } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../contexts/ThemeContext';
import "./index.scss";

const Portfolio = () => {
    const { theme } = useTheme();
    const [letterClass, setLetterClass] = useState('text-animate');
    const [currentView, setCurrentView] = useState('galaxy');
    const [selectedTech, setSelectedTech] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);
    const [hoveredPlanet, setHoveredPlanet] = useState(null);
    const [isPaused, setIsPaused] = useState(false);

    // Hardcoded portfolio projects
    const portfolio = [
        {
            name: "Maptek Block Model Compression",
            shortName: "Maptek WeEight",
            description: "Advanced compression algorithm for mining block model data, optimizing storage and processing efficiency for large-scale geological datasets.",
            url: "https://github.com/Tuanminhngo/Maptek-SEP-WeEight.git",
            github: "https://github.com/Tuanminhngo/Maptek-SEP-WeEight.git",
            technologies: ["Python", "Data Compression", "Mining Engineering", "Algorithm Design"],
            image: "https://opengraph.githubassets.com/1/Tuanminhngo/Maptek-SEP-WeEight",
            features: [
                "Efficient block model compression algorithm",
                "Optimized for large geological datasets",
                "Reduces storage requirements significantly",
                "Maintains data integrity and precision"
            ]
        },
        {
            name: "GreenAction Volunteer Website",
            shortName: "GreenAction",
            description: "Community-driven platform connecting volunteers with environmental initiatives and sustainability projects.",
            url: "https://github.com/khooinguyeen/GreenAction.git",
            github: "https://github.com/khooinguyeen/GreenAction.git",
            technologies: ["React", "JavaScript", "Web Development", "Community Platform"],
            image: "https://opengraph.githubassets.com/1/khooinguyeen/GreenAction",
            features: [
                "Volunteer registration and management",
                "Event creation and tracking",
                "Community engagement features",
                "Environmental impact tracking"
            ]
        },
        {
            name: "Food Management System",
            shortName: "FoodMS",
            description: "Comprehensive system for managing food inventory, orders, and supply chain logistics with real-time tracking capabilities.",
            url: "https://github.com/khooinguyeen/FoodManagementSystem.git",
            github: "https://github.com/khooinguyeen/FoodManagementSystem.git",
            technologies: ["Java", "Database Management", "Backend Development", "System Design"],
            image: "https://opengraph.githubassets.com/1/khooinguyeen/FoodManagementSystem",
            features: [
                "Real-time inventory tracking",
                "Order management system",
                "Supply chain optimization",
                "Analytics and reporting dashboard"
            ]
        },
        {
            name: "Look & Tell Sign Language Translation",
            shortName: "Look & Tell ML",
            description: "Deep learning model for translating Vietnamese sign language to text in real-time, enhancing accessibility for the deaf community.",
            url: "https://github.com/khooinguyeen/Vietnamese-Sign-Language-Translation.git",
            github: "https://github.com/khooinguyeen/Vietnamese-Sign-Language-Translation.git",
            technologies: ["Python", "TensorFlow", "Computer Vision", "Deep Learning", "NLP"],
            image: "https://opengraph.githubassets.com/1/khooinguyeen/Vietnamese-Sign-Language-Translation",
            features: [
                "Real-time sign language recognition",
                "Vietnamese language support",
                "High accuracy translation model",
                "Accessibility-focused design"
            ]
        },
        {
            name: "Look & Tell Android App",
            shortName: "Look & Tell App",
            description: "Mobile application bringing sign language translation to Android devices, making communication accessible on-the-go.",
            url: "https://github.com/khooinguyeen/LookandTell-OfficialApp.git",
            github: "https://github.com/khooinguyeen/LookandTell-OfficialApp.git",
            technologies: ["Android", "Java", "Mobile Development", "TensorFlow Lite", "ML Kit"],
            image: "https://opengraph.githubassets.com/1/khooinguyeen/LookandTell-OfficialApp",
            features: [
                "Cross-platform mobile application",
                "Real-time camera integration",
                "Offline translation capabilities",
                "User-friendly interface"
            ]
        },
        {
            name: "GART Robot Vision System",
            shortName: "GART Vision",
            description: "Computer vision system for FRC Team 6520 robot, enabling autonomous object detection and targeting for competitive robotics.",
            url: "https://github.com/khooinguyeen/GARTVISION.git",
            github: "https://github.com/khooinguyeen/GARTVISION.git",
            technologies: ["Python", "OpenCV", "Robotics", "Computer Vision", "Real-time Processing"],
            image: "https://opengraph.githubassets.com/1/khooinguyeen/GARTVISION",
            features: [
                "Real-time object detection and tracking",
                "Autonomous targeting system",
                "FRC competition optimized",
                "Low-latency processing pipeline"
            ]
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    // Extract unique technologies from all projects
    const getAllTechnologies = () => {
        const techSet = new Set();
        portfolio.forEach(project => {
            if (project.technologies) {
                project.technologies.forEach(tech => techSet.add(tech));
            }
        });
        return ['all', ...Array.from(techSet)];
    };

    // Filter projects by selected technology
    const filteredPortfolio = selectedTech === 'all'
        ? portfolio
        : portfolio.filter(project =>
            project.technologies && project.technologies.includes(selectedTech)
          );

    // Galaxy View - Solar System with orbiting planets
    const renderGalaxyView = (projects) => {
        const planetData = [
            { size: 52, orbitRadius: 140, orbitSpeed: 35, rings: false },
            { size: 58, orbitRadius: 200, orbitSpeed: 45, rings: false },
            { size: 48, orbitRadius: 260, orbitSpeed: 55, rings: false },
            { size: 65, orbitRadius: 330, orbitSpeed: 70, rings: true },
            { size: 44, orbitRadius: 400, orbitSpeed: 85, rings: false },
            { size: 55, orbitRadius: 470, orbitSpeed: 100, rings: false }
        ];

        // Generate theme-aware planet colors
        const generatePlanetColors = () => {
            const primary = theme.colors.primary;
            const secondary = theme.colors.secondary;
            const accentLight = theme.colors.accentLight;
            const accentDark = theme.colors.accentDark;

            return [
                { primary: '#8B4513', light: '#CD853F', dark: '#654321' }, // Brown planet
                { primary: secondary, light: accentLight, dark: accentDark }, // Theme secondary
                { primary: primary, light: accentLight, dark: accentDark }, // Theme primary
                { primary: '#00CED1', light: '#E0FFFF', dark: '#008B8B' }, // Cyan planet (with rings)
                { primary: '#9370DB', light: '#E6E6FA', dark: '#4B0082' }, // Purple planet
                { primary: theme.colors.starColor, light: accentLight, dark: accentDark } // Theme star color
            ];
        };

        const planetColors = generatePlanetColors();

        return (
            <div className="solar-system-container">
                {/* The Sun (Center) */}
                <div
                    className="sun"
                    style={{
                        background: `radial-gradient(circle at 35% 35%, ${theme.colors.accentLight} 0%, ${theme.colors.primary} 20%, ${theme.colors.accentDark} 50%, ${theme.colors.primary} 100%)`,
                        boxShadow: `0 0 60px ${theme.colors.primary}, 0 0 120px ${theme.colors.accentDark}, 0 0 180px ${theme.colors.primary}`
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="sun-text" style={{ color: theme.colors.textPrimary }}></div>
                </div>

                {/* Planets with orbits */}
                {projects.map((project, idx) => {
                    const data = planetData[idx];
                    const color = planetColors[idx];
                    const isHovered = hoveredPlanet === idx;
                    const isSelected = selectedProject?.name === project.name;

                    return (
                        <div key={idx} className="orbit-container">
                            {/* Orbit path */}
                            <div
                                className={`orbit orbit-${idx + 1}`}
                                style={{
                                    width: `${data.orbitRadius * 2}px`,
                                    height: `${data.orbitRadius * 2}px`,
                                    borderColor: isSelected ? `${theme.colors.primary}80` : `${theme.colors.cardBorder}`
                                }}
                            >
                                {/* Planet wrapper that rotates */}
                                <div
                                    className={`planet-orbit-wrapper ${isPaused ? 'paused' : ''}`}
                                    style={{
                                        animationDuration: `${data.orbitSpeed}s`
                                    }}
                                >
                                    {/* Planet */}
                                    <div
                                        className="planet"
                                        style={{
                                            width: `${data.size}px`,
                                            height: `${data.size}px`,
                                            background: `radial-gradient(circle at 30% 30%, ${color.light} 0%, ${color.primary} 40%, ${color.dark} 100%)`,
                                            boxShadow: `
                                                0 0 ${isHovered || isSelected ? '40px' : '20px'} ${color.primary}80,
                                                inset -8px -8px 20px rgba(0,0,0,0.6),
                                                inset 5px 5px 15px rgba(255,255,255,0.1)
                                            `,
                                            transform: `translate(-50%, -50%) scale(${isHovered || isSelected ? 1.3 : 1})`
                                        }}
                                        onMouseEnter={() => setHoveredPlanet(idx)}
                                        onMouseLeave={() => setHoveredPlanet(null)}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedProject(project);
                                        }}
                                    >
                                        {/* Rings for special planets */}
                                        {data.rings && (
                                            <div className="planet-rings" style={{
                                                width: `${data.size * 1.8}px`,
                                                height: `${data.size * 1.8}px`,
                                                borderColor: `${color.primary}66`
                                            }} />
                                        )}

                                        {/* Planet label */}
                                        {(isHovered || isSelected) && (
                                            <div
                                                className="planet-name-tag"
                                                style={{
                                                    color: color.primary,
                                                    borderColor: `${color.primary}50`
                                                }}
                                            >
                                                {project.shortName || project.name}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    // Grid View - Card layout
    const renderGridView = (projects) => {
        return (
            <div className="grid-container">
                {projects.map((project, idx) => (
                    <div
                        className="project-card"
                        key={idx}
                        onClick={() => setSelectedProject(project)}
                    >
                        <div className="card-image">
                            <img src={project.image} alt={project.name} />
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">{project.name}</h3>
                            <p className="card-description">{project.description}</p>
                            {project.technologies && (
                                <div className="card-tags">
                                    {project.technologies.slice(0, 3).map((tech, i) => (
                                        <span key={i} className="tag">{tech}</span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="tag">+{project.technologies.length - 3}</span>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    // List View - Table format
    const renderListView = (projects) => {
        return (
            <div className="list-container">
                <table className="projects-table">
                    <thead>
                        <tr>
                            <th>Project</th>
                            <th>Description</th>
                            <th>Technologies</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project, idx) => (
                            <tr key={idx} onClick={() => setSelectedProject(project)}>
                                <td className="project-name">
                                    <div className="name-with-image">
                                        {project.image && (
                                            <img src={project.image} alt={project.name} className="list-thumbnail" />
                                        )}
                                        <span>{project.name}</span>
                                    </div>
                                </td>
                                <td className="project-description">{project.description}</td>
                                <td className="project-tech">
                                    {project.technologies && project.technologies.slice(0, 3).join(', ')}
                                    {project.technologies && project.technologies.length > 3 && '...'}
                                </td>
                                <td className="project-action">
                                    <button
                                        className="view-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(project.url);
                                        }}
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    // Project Details Modal
    const renderModal = () => {
        if (!selectedProject) return null;

        return (
            <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>

                    <div className="modal-header">
                        <h2>{selectedProject.name}</h2>
                        {selectedProject.image && (
                            <img src={selectedProject.image} alt={selectedProject.name} className="modal-image" />
                        )}
                    </div>

                    <div className="modal-body">
                        <div className="modal-section">
                            <h3>About</h3>
                            <p>{selectedProject.description}</p>
                        </div>

                        {selectedProject.technologies && (
                            <div className="modal-section">
                                <h3>Technologies</h3>
                                <div className="tech-badges">
                                    {selectedProject.technologies.map((tech, i) => (
                                        <span key={i} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {selectedProject.features && (
                            <div className="modal-section">
                                <h3>Key Features</h3>
                                <ul>
                                    {selectedProject.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="modal-footer">
                        {selectedProject.url && (
                            <a
                                href={selectedProject.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-button primary"
                            >
                                View Project
                            </a>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="container portfolio-page">
                <div className="portfolio-header">
                    <h1 className="page-title">
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"Portfolio".split("")}
                            idx={15}
                        />
                    </h1>

                    <div className="controls">
                        {/* View Toggle */}
                        <div className="view-toggle">
                            <button
                                className={`view-btn ${currentView === 'galaxy' ? 'active' : ''}`}
                                onClick={() => setCurrentView('galaxy')}
                                title="Galaxy View"
                            >
                                <FontAwesomeIcon icon={faRocket} />
                            </button>
                            <button
                                className={`view-btn ${currentView === 'grid' ? 'active' : ''}`}
                                onClick={() => setCurrentView('grid')}
                                title="Grid View"
                            >
                                <FontAwesomeIcon icon={faThLarge} />
                            </button>
                            <button
                                className={`view-btn ${currentView === 'list' ? 'active' : ''}`}
                                onClick={() => setCurrentView('list')}
                                title="List View"
                            >
                                <FontAwesomeIcon icon={faList} />
                            </button>
                        </div>

                        {/* Technology Filter */}
                        <div className="tech-filter">
                            <select
                                value={selectedTech}
                                onChange={(e) => setSelectedTech(e.target.value)}
                                className="filter-select"
                            >
                                {getAllTechnologies().map((tech, idx) => (
                                    <option key={idx} value={tech}>
                                        {tech === 'all' ? 'All Technologies' : tech}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="portfolio-content">
                    {currentView === 'galaxy' && renderGalaxyView(filteredPortfolio)}
                    {currentView === 'grid' && renderGridView(filteredPortfolio)}
                    {currentView === 'list' && renderListView(filteredPortfolio)}
                </div>

                {renderModal()}
            </div>
            <Loader type='ball-clip-rotate-multiple' />
        </>
    )
}

export default Portfolio;
