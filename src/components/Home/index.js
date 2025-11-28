import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
// import LogoTitle from '../../assets/images/logo-s.png'
// import Logo from './Logo'
import myPicture from '../../assets/images/me.jpg'
import './index.scss'
import Loader from 'react-loaders'
const Home = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ','N','g','u','y','e','n',' ','(','J','u','l','i','a','n',')']
    const jobArray = [
        's',
        'o',
        'f',
        't',
        'w',
        'a',
        'r',
        'e',
        ' ',
        'e',
        'n',
        'g',
        'i',
        'n',
        'e',
        'e',
        'r'
    ]

    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _1`}>i</span>
                    <span className={`${letterClass} _2`}>,</span>       
                    <br />
                    <span className={`${letterClass} _3`}>I</span>    
                    <span className={`${letterClass} _4`}>'</span>  
                    <span className={`${letterClass} _5`}>m</span>    
                    {/* <img src={LogoTitle} alt="developer" /> */}
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={6}
                    />
                    <br />
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={22} 
                    />
                </h1>
                <h2>a Computer Science student who is passionate about programming, especially using it to solve problem in life</h2>
                <a
                    href="/mkn-react-portfolio/Khoi_Nguyen_Mai_Resume.pdf"
                    download="Nguyen_Julian_CV.pdf"
                    className='flat-button'
                >
                    DOWNLOAD CV
                </a>
            </div>
            {/* <Logo /> put image here */}
            {/* <img src={myPicture} alt="tui"/> */}

        </div>
        <div className='picture-container'>
            <div className='image-wrapper'>
                <img src={myPicture} alt='me'></img>
                <div className='dot dot-1'></div>
                <div className='dot dot-2'></div>
                <div className='dot dot-3'></div>
            </div>
        </div>
        <Loader type='ball-clip-rotate-multiple' />
        {/* <Loader type='cube-transition' /> */}
        {/* <Loader type='line-scale-pulse-out' /> */}
        </>
    )
}

export default Home