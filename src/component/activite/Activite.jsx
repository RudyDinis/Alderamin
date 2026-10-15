import Footer from '../footer/Footer';
import './Activite.css'
import { HiOutlineCube, HiOutlineExternalLink } from "react-icons/hi";

function Activite({ onOpenProject }) {
    return (
        <div className='ml-0 md:ml-[30px] w-full min-h-screen flex flex-col px-5 md:px-0'>
            
            <div className='flex-grow'>
                <p className='title vyne text-[#A1A1AA] text-xl mt-[100px]'>
                    SECTEURS D'ACTIVITÉ
                </p>

                <article className='project-card mt-[35px] mr-0 md:mr-[30px]'>
                    <div className='project-card__icon' aria-hidden='true'>
                        <HiOutlineCube size={32} />
                    </div>
                    <div className='project-card__body'>
                        <div className='flex items-start justify-between gap-4'>
                            <div>
                                <p className='project-card__eyebrow'>LOGICIEL & GAMING</p>
                                <h2 className='project-card__title'>Orangery</h2>
                            </div>
                            <span className='project-card__year'>2026</span>
                        </div>
                        <p className='project-card__description'>
                            Launcher Minecraft desktop pour l'univers Orangery, pensé pour rendre chaque lancement simple, rapide et vivant.
                        </p>
                        <div className='flex flex-wrap gap-2 mt-5'>
                            <span className='project-tag'>Electron</span>
                            <span className='project-tag'>TypeScript</span>
                            <span className='project-tag'>Minecraft</span>
                        </div>
                        <button className='project-card__link' onClick={onOpenProject} type='button'>
                            Découvrir le projet
                            <HiOutlineExternalLink size={18} aria-hidden='true' />
                        </button>
                    </div>
                </article>
            </div>

            <Footer />
        </div>
    )
}

export default Activite;
