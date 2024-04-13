import React from 'react'
import ProjectSlider from '../ProjectSlider/ProjectSlider'
import useInfo from '@/hooks/useSetting'
import useSetting from '@/hooks/useSetting';

const Project = () => {

  const detailSetting = useSetting();

  return (
    <section className='w-full py-10' id='projects'>
      <div className="container mx-auto">
      {detailSetting?.attributes?.Info?.nameProject ? 
                        <h2 className="  text-black text-4xl md:text-5xl text-center">{detailSetting.attributes?.Info?.nameProject}</h2>
                    :
                    <div className='w-full flex flex-col gap-4 z-30'>
                        <div className=" z-30 w-full h-10 rounded-lg bg-zinc-800 animate-pulse"></div>
                    </div>
        }
        <div className="w-full flex justify-center items-center cursor-pointer">
            <ProjectSlider />
        </div>
      </div>
    </section>
  )
}

export default Project
