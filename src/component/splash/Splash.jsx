import './Splash.css'

function Splash({ onFinish }) {
  return (
    <p className="lg:text-7xl text-3xl splash" onAnimationEnd={onFinish}>
      Alderamin
    </p>
  )
}

export default Splash
