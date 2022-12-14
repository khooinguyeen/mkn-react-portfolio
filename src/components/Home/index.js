import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
// import LogoTitle from '../../assets/images/logo-s.png'
// import Logo from './Logo'
import myPicture from '../../assets/images/tui.jpg'
import './index.scss'
import Loader from 'react-loaders'
const Home = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ','N','g','u','y','e','n']
    const jobArray = [
        'w',
        'e',
        'b',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
    ]

    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <span className={`${letterClass} _13`}>,</span>       
                    <br />
                    <span className={`${letterClass} _14`}>I</span>    
                    <span className={`${letterClass} _15`}>'</span>  
                    <span className={`${letterClass} _16`}>m</span>    
                    {/* <img src={LogoTitle} alt="developer" /> */}
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={17}
                    />
                    <br />
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={22} 
                    />
                </h1>
                <h2>a Vietnamese high school student who is passionate about programming, especially AI</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            {/* <Logo /> put image here */}
            {/* <img src={myPicture} alt="tui"/> */}

        </div>
        <div className='picture-container'>
            <div className='h-shape'></div>
            <img src={myPicture} alt='me'></img>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Home