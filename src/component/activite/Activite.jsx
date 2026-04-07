import Footer from '../footer/Footer';
import './Activite.css'
import { HiOutlineMail } from "react-icons/hi";

function Activite() {
    return (
        <div className='ml-[60px] w-full min-h-screen flex flex-col'>
            
            <div className='flex-grow'>
                <p className='title vyne text-[#A1A1AA] text-xl mt-[100px]'>
                    SECTEURS D'ACTIVITÉ
                </p>
            </div>

            <Footer />
        </div>
    )
}

export default Activite;
