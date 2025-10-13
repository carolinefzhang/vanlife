import aboutImage from '../assets/about-image.png'
import Button from '../components/Button.tsx'

const About = () => {
  return (
    <>
      <img className="about-image" src={aboutImage} />
      <div className="p-4">
        <h1 className="heading">Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p className="subheading">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
        <p className="subheading">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        <div className="feature">
          <div className="text-lg font-bold mt-5 mb-5">Your destination is waiting. Your van is ready.</div>
          <Button className="dark-button">Explore our vans</Button>
        </div>
      </div>
    </>
  )
}

export default About
