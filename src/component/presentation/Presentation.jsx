import './Presentation.css'
import { HiOutlineMail } from "react-icons/hi";

function Presentation() {
    return (
        <div className='lg:text-7xl border-r border-[#71717A] h-fit w-[100%]'>
            <div className='md:ml-[60px] lg:ml-[0px] flex flex-col items-center'>
                <div className='flex justify-between items-center w-[82%] top mt-[50px]'>
                    <div className='flex items-center border border-[#474747] rounded-[15px] pl-[7px] pr-[7px] pt-[1px] pb-[2px]'>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <p className='text-xs text-[#A1A1AA] ml-[5px]'>HUB CENTRAL</p>
                    </div>
                    <p className='text-xs text-[#A1A1AA]'>V. 0.1</p>
                </div>

                <h1 className='mt-[100px] lg:text-6xl md:text-5xl text-4xl'>Alderamin</h1>
                <p className='text-lg text-[#A1A1AA] w-[93%] mt-[30px]'>L'entité faîtière regroupant nos filiales numériques, créatives et technologiques. Un écosystème conçu pour l'innovation et l'excellence opérationnelle.</p>

                <div className='border border-[#71717A] w-[80%] mt-[40px]'></div>

                <div className='flex w-[80%]'>
                    <div>
                        <p className='text-[#F4F4F5] text-3xl mt-[40px] vyne'>04</p>
                        <p className='text-[#A1A1AA] text-xs mt-[10px]'>PROJETS</p>
                    </div>
                    <div className='ml-[40px]'>
                        <p className='text-[#F4F4F5] text-3xl mt-[40px] vyne'>01</p>
                        <p className='text-[#A1A1AA] text-xs mt-[10px]'>EMPLOYE</p>
                    </div>
                </div>

                <div className="flex w-[80%] items-center mt-[80px] text-[#A1A1AA] hover:text-white cursor-pointer group">
                    <p className="text-sm">CONTACT</p>
                    <HiOutlineMail
                        size={16}
                        className="ml-[5px] stroke-current group-hover:stroke-white"
                    />
                </div>
            </div>
        </div>
    )
}

export default Presentation