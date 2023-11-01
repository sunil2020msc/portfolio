import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { useGetSkillsQuery } from '../store/slices/skillSlice'
const Skills = () => {

    const { data: skills, isLoading } = useGetSkillsQuery();


    return (
        <motion.div className="flex flex-col relative  h-screen md:text-left md:flex-row mx-w-7xl px-10 justify-evenly mx-auto items-center"

            initial={{
                opacity: 0
            }}

            whileInView={{
                opacity: 1
            }}

            transition={{
                duration: 1.5,
            }}
        >

            <h3 className="absolute top-24 uppercase tracking-[24px] text-gray-500 text-2xl">Skills</h3>

            <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm mb">Hover over a skill  for currency profeciency.</h3>

            <div className="grid grid-cols-4 gap-5 mt-20">

                {skills && skills.map(skill => <Skill skill={skill} key={skill._id} directionLeft={skill.direction === "left"} />)}


            </div>

        </motion.div>
    )
}

export default Skills