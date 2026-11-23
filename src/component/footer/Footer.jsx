import './Footer.css'

function Footer() {
    return (
        <div className='text-[#A1A1AA] border-t border-[#71717A]'>
            <div className='flex justify-between items-center mt-[25px] mb-[50px]'>
                <p>© 2026 Alderamin. Tous droits réservés.</p>
                <a className='hover:text-white cursor-pointer'>Mentions Légales</a>
            </div>
        </div>
    )
}

export default Footer