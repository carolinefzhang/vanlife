import Button from '../components/Button'

const NotFound = () => {
  return (
    <div className='h-screen flex items-center justify-center flex-col gap-6'>
      <h1 className='heading'>Sorry, the page you were looking for was not found.</h1>
      <Button className="dark-button w-xl" onClick={() => window.location.href = "/"}>Return to home</Button>
    </div>
  )
}

export default NotFound
