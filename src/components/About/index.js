import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid, faCss3, faHtml5, faJava, faJsSquare, faPython } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     },3000)
    // }, [])

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

                <div className="stage-cube-cont">
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faJava} color="#D0A384" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faPython} color="#306998" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faAndroid} color="#3DDC84" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About