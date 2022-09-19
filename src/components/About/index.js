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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <p>Fusce porttitor justo nec tortor condimentum blandit.</p>
                    <p>Fusce lacus turpis, viverra vitae tristique non, sagittis nec massa.</p>
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