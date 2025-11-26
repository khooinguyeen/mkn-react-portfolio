import './TemplateBlog.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

const TemplateBlog = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <div className="container blog-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['T', 'e', 'm', 'p', 'l', 'a', 't', 'e', ' ', 'b', 'l', 'o', 'g']}
                        idx={15}
                        />
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <p>Fusce porttitor justo nec tortor condimentum blandit.</p>
                    <p>Fusce lacus turpis, viverra vitae tristique non, sagittis nec massa.</p>
                </div>
            </div>
            <Loader type='ball-clip-rotate-multiple' />
        </>
    )
} 

export default TemplateBlog