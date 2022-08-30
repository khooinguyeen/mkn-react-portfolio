import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p>Fusce porttitor justo nec tortor condimentum blandit.</p>
                <p>Fusce lacus turpis, viverra vitae tristique non, sagittis nec massa.</p>
            </div>
        </div>
    )
}

export default About