import {useEffect} from 'react';
import Aos from 'aos';
import Logo from '../images/content/icon-120.png';

export default function SplashScreen() {
    useEffect(() => {
        Aos.init()
    },[])
  return (
    <section>
        <div className='container mx-auto min-h-screen '>
            <div className='flex flex-col items-center justify-center h-screen'>
                <div className='w-full md:w-4/12 text-center'>
                    <img src={Logo} 
                    alt="LuxSpace | Fullfill your house with beautiful furniture" 
                    className='mx-auto mb-12'
                    data-aos='zoom-in' 
                    />
                    <p className='mb-16 px-4 font-semibold text-3xl' data-aos='fade-right' data-aos-duration="1500">
                        Furniture for home 
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
