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
    
    if (window.innerWidth <= 600) {
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
                        <span className={`${letterClass} _6`}> </span>
                        <span className={`${letterClass} _7`}>N</span>
                        <span className={`${letterClass} _8`}>g</span> 
                        <span className={`${letterClass} _9`}>u</span>  
                        <span className={`${letterClass} _10`}>y</span>  
                        <span className={`${letterClass} _11`}>e</span>  
                        <span className={`${letterClass} _12`}>n</span>  
                        <br />
                        <span className={`${letterClass} _13`}>(</span>  
                        <span className={`${letterClass} _14`}>J</span>  
                        <span className={`${letterClass} _15`}>u</span>  
                        <span className={`${letterClass} _16`}>l</span>  
                        <span className={`${letterClass} _17`}>i</span>  
                        <span className={`${letterClass} _18`}>a</span>  
                        <span className={`${letterClass} _19`}>n</span>  
                        <span className={`${letterClass} _20`}>)</span>                         
                        <br />
                        <span className={`${letterClass} _21`}>S</span>  
                        <span className={`${letterClass} _22`}>o</span>  
                        <span className={`${letterClass} _23`}>f</span>  
                        <span className={`${letterClass} _24`}>t</span>  
                        <span className={`${letterClass} _25`}>w</span>  
                        <span className={`${letterClass} _26`}>a</span>  
                        <span className={`${letterClass} _27`}>r</span>  
                        <span className={`${letterClass} _28`}>e</span>   
                        <br />
                        <span className={`${letterClass} _29`}>E</span>  
                        <span className={`${letterClass} _30`}>n</span>  
                        <span className={`${letterClass} _31`}>g</span>  
                        <span className={`${letterClass} _32`}>i</span>  
                        <span className={`${letterClass} _33`}>n</span>  
                        <span className={`${letterClass} _34`}>e</span>  
                        <span className={`${letterClass} _35`}>e</span>  
                        <span className={`${letterClass} _36`}>r</span>   

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