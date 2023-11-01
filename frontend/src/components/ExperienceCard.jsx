import React from 'react'
import { motion } from 'framer-motion'
const ExperienceCard = ({ experience }) => {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-500 md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity:40 cursor:pointer transition-opacity duration-200 overflow-hidden" >
            <motion.img
                className="w-32 h-32 rounded-full  xl:w-[200px] xl:h-[200px] object-cover object-top"
                src={`/api/${experience.logo.replace(/\\/g, '/')}`}

                initial={{
                    y: -100,
                    opacity: 0
                }}

                transition={{
                    duration: 1.2,
                }}

                whileInView={{
                    opacity: 1,
                    y: 0
                }}

                viewport={{
                    once: true
                }}
            />

            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light"> {experience.role}</h4>
                <p className="font-bold text-2xl mt-1">{experience.project}</p>
                <div className="flex space-x-2 my-2">

                    {experience.tech.map(techitem => <img
                        className="h-10 w-10 rounded-full"
                        src={`/api/${techitem.replace(/\\/g, '/')}`}
                        alt=""
                    />)}


                </div>

                {/* <p className='uppercase py-5 text-gray-500'>Started work ... ended</p> */}

                <ul className="list-disc space-y-4 ml-5 text-lg">
                    {experience.summary.map(summaryItem => <li>{summaryItem}</li>)}
                </ul>

            </div>

        </article>
    )
}

export default ExperienceCard