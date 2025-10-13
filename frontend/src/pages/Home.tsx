import Button from '../components/Button.tsx'

const Home = () => {
  return (
    <div className="home-container flex flex-col justify-center items-center text-center">
      <h1>You got the travel plans, we got the travel vans.</h1>
      <div className="subheading">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</div>
      <Button className="yellow-button w-xl">Find your van</Button>
    </div>
  )
}

export default Home
