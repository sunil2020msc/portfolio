import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { useGetWorkExperienceQuery } from '../store/slices/workExpSlice'
const WorkExperience = () => {

    const { data: workExperiences, isLoading } = useGetWorkExperienceQuery();

    console.log(workExperiences)

    return (
        <motion.div className="flex flex-col relative  h-screen md:text-left md:flex-row mx-w-7xl px-10 justify-evenly mx-auto items-center"

            initial={{
                opacity: 0
            }}

            whileInView={{
                opacity: 1
            }}

            transition={{
                duration: 1.2,
            }}
        >
            <h3 className="absolute top-24 uppercase tracking-[24px] text-gray-500 text-2xl">Work Experience</h3>

            <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-40">

                {isLoading && <p>Loading...</p>}

                {workExperiences && workExperiences.length > 0 && workExperiences.map(experience => <ExperienceCard experience={experience} />)}
                {/* experienceCard */}

            </div>

        </motion.div>
    )
}

export default WorkExperience