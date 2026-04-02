import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Splash from './component/splash/Splash'

function App() {
	return (
		<>
			<div class="flex justify-center items-center h-screen">
				<Splash></Splash>
			</div>
		</>
	)
}

export default App
