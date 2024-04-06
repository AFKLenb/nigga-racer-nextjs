import React from 'react'
import ProjectSlider from '../ProjectSlider/ProjectSlider'

const Project = () => {
  return (
    <section className='w-full py-10' id='hero'>
      <div className="container mx-auto">
        <h2 className=" text-black h2 text-center">Наши проекты</h2>
        <div className="w-full flex justify-center items-center cursor-pointer">
            <ProjectSlider />
        </div>
      </div>
    </section>
  )
}

export default Project
