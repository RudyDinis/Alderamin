import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Splash from './component/splash/Splash'
import Presentation from './component/presentation/Presentation'
import Activite from './component/activite/Activite'

function App() {
	const [showMain, setShowMain] = useState(false);

	return (
		<>
			{!showMain && (
				<div className="flex justify-center items-center h-screen">
					<Splash onFinish={() => setShowMain(true)} />
				</div>
			)}

			{showMain && (
				<div className="flex justify-center h-screen">
					<div className='w-full md:w-[1080px] flex flex-col md:flex-row'>
						<div className='w-full md:w-[40%] flex'>
							<Presentation />
						</div>

						<div className='w-full md:w-[60%] flex'>
							<Activite />
						</div>

					</div>
				</div>
			)}
		</>
	)
}

export default App
