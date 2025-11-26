import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timer);
      }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_mkn1710',
                'template_mkn1710',
                refForm.current,
                'PXvgQw2wiXhDs5phz'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','m','e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        Thanks for stopping by! I'm a final-year Computer Science student actively looking 
for AI and software engineering roles in Australia. Interested in my work with AI/ML or 
full-stack development? Let's connect, I'd love to hear from you!
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Khoi Nguyen Mai
                    <br />
                    Adelaide
                    <br />
                    South Australia
                    <span>khoinguyenmai17102005@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[-34.92714490786211, 138.61093632276874]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[-34.92714490786211, 138.61093632276874]}>
                            <Popup>Feel free to come over for a cup of coffee :&gt;</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='ball-clip-rotate-multiple' />
        </>
    )
}

export default Contact