import { useEffect, useState } from 'react'
import './App.css'
import Splash from './component/splash/Splash'
import Presentation from './component/presentation/Presentation'
import Activite from './component/activite/Activite'
import Projet from './component/projet/Projet'

function App() {
	const [showMain, setShowMain] = useState(false);
	const [showProject, setShowProject] = useState(() => window.location.hash === '#orangery');

	useEffect(() => {
		const handleHashChange = () => setShowProject(window.location.hash === '#orangery');
		window.addEventListener('hashchange', handleHashChange);
		return () => window.removeEventListener('hashchange', handleHashChange);
	}, []);

	const openProject = () => {
		window.location.hash = 'orangery';
		setShowProject(true);
	};

	const closeProject = () => {
		window.history.pushState({}, '', window.location.pathname + window.location.search);
		setShowProject(false);
	};

	return (
		<>
			{!showMain && (
				<div className="flex justify-center items-center h-screen">
					<Splash onFinish={() => setShowMain(true)} />
				</div>
			)}

			{showMain && (
				<div className="flex justify-center min-h-screen">
					<div className='w-full md:w-[1080px] flex flex-col md:flex-row'>
						{showProject ? (
							<Projet onBack={closeProject} />
						) : (
							<>
								<div className='w-full md:w-[40%] flex'>
									<Presentation />
								</div>

								<div className='w-full md:w-[60%] flex'>
									<Activite onOpenProject={openProject} />
								</div>
							</>
						)}

					</div>
				</div>
			)}
		</>
	)
}

export default App
