import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='#e2cbff'/>
                <Spotlight className='top-20 -left-60 h-[80vh] w-[50vw]' fill='white'/>
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='#64748b'/>
                <div className='origin-center rotate-[118deg] absolute z-10 hidden md:block '>
                    <Spotlight className='top-2 h-[100vh] w-[50vw] relative right-[7rem]' fill='#e2cbff'/>
                    <Spotlight className='top-20 h-[100vh] w-[50vw] absolute -left-80' fill='#64748b'/>
                </div>

            </div>
            
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute flex items-center justify-center top-0 left-0">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
        <div className='relative flex justify-center my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:maw-w-[60vw] flex flex-col items-center justify-center'>
                <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                    Product UX/UI designer / developer
                </h2>
                <TextGenerateEffect 
                className='text-center text-[40px] md:text-5xl lg:text-6xl'
                words='Transforming Concepts into Seamless User Experiances'
                />
                <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Hi I&apos;m Danny, a Product UX/UI designer <br/> who loves to code</p>
                <a href="#about">
                    <MagicButton 
                    title="See my work"
                    icon={<FaLocationArrow />}
                    position='right'
                    />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero