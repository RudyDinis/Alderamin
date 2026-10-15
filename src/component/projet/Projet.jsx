import './Projet.css'
import {
    HiOutlineArrowLeft,
    HiOutlineCode,
    HiOutlineCube,
    HiOutlineDesktopComputer,
    HiOutlineExternalLink,
    HiOutlineLightningBolt,
    HiOutlineRefresh,
} from 'react-icons/hi';

function Projet({ onBack }) {
    return (
        <main className='project-page'>
            <button className='project-page__back' onClick={onBack} type='button'>
                <HiOutlineArrowLeft size={18} aria-hidden='true' />
                Retour aux activités
            </button>

            <div className='project-page__hero'>
                <div className='project-page__mark' aria-hidden='true'>
                    <HiOutlineCube size={50} />
                </div>
                <div>
                    <p className='project-page__kicker'>PROJET · 2026</p>
                    <h1>Orangery</h1>
                    <p className='project-page__lead'>
                        Un launcher Minecraft desktop conçu pour transformer le lancement d&apos;un modpack en une expérience claire, fiable et accueillante.
                    </p>
                </div>
            </div>

            <div className='project-page__grid'>
                <section className='project-page__intro'>
                    <p className='project-page__label'>L&apos;INTENTION</p>
                    <h2>Plus qu&apos;un jeu, une aventure.</h2>
                    <p>
                        Orangery réunit dans une seule interface le compte joueur, l&apos;installation de Minecraft, la gestion du modpack et le lancement du serveur. L&apos;objectif : supprimer les étapes techniques pour laisser la communauté entrer directement dans son monde.
                    </p>
                    <p>
                        Le projet est pensé comme un produit de bureau, avec une identité visuelle chaleureuse, une navigation sans friction et des retours d&apos;état précis pendant les téléchargements et la mise à jour.
                    </p>
                </section>

                <aside className='project-page__facts'>
                    <div>
                        <span>VERSION</span>
                        <strong>0.0.10</strong>
                    </div>
                    <div>
                        <span>CIBLE</span>
                        <strong>Windows · macOS · Linux</strong>
                    </div>
                    <div>
                        <span>STACK</span>
                        <strong>Electron · TypeScript</strong>
                    </div>
                    <a href='https://github.com/RudyDinis/L-orangery' target='_blank' rel='noreferrer' className='project-page__github'>
                        Voir le code source
                        <HiOutlineExternalLink size={18} aria-hidden='true' />
                    </a>
                </aside>
            </div>

            <section className='project-page__features'>
                <p className='project-page__label'>CE QUE FAIT ORANGERY</p>
                <div className='project-feature-grid'>
                    <article className='project-feature'>
                        <HiOutlineDesktopComputer size={25} aria-hidden='true' />
                        <h3>Lancer sans friction</h3>
                        <p>Authentification Microsoft, installation de NeoForge 1.21.1 et démarrage du jeu depuis une seule action.</p>
                    </article>
                    <article className='project-feature'>
                        <HiOutlineCode size={25} aria-hidden='true' />
                        <h3>Un modpack vivant</h3>
                        <p>Catalogue de mods avec recherche, catégories, versions et descriptions pour comprendre ce qui compose l&apos;instance.</p>
                    </article>
                    <article className='project-feature'>
                        <HiOutlineLightningBolt size={25} aria-hidden='true' />
                        <h3>Des réglages utiles</h3>
                        <p>Contrôle de la mémoire RAM, dossier de jeu accessible et paramètres persistants adaptés à chaque machine.</p>
                    </article>
                    <article className='project-feature'>
                        <HiOutlineRefresh size={25} aria-hidden='true' />
                        <h3>Prêt à évoluer</h3>
                        <p>Progression de téléchargement, extraction, installation et mises à jour automatiques pour garder le launcher à jour.</p>
                    </article>
                </div>
            </section>

            <section className='project-page__stack'>
                <p className='project-page__label'>ARCHITECTURE</p>
                <div className='project-stack-list'>
                    <span>Electron 44</span>
                    <span>TypeScript 7</span>
                    <span>minecraft-java-core</span>
                    <span>minecraft-server-util</span>
                    <span>electron-updater</span>
                </div>
            </section>
        </main>
    )
}

export default Projet