import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useGetAboutQuery } from '../store/slices/aboutSlice'
const About = () => {
    const { data: abouts, isLoading } = useGetAboutQuery()



    let aboutHeading = 'Here is a little background';
    let aboutImage = '/images/sunil.jpeg';
    let aboutDesc = `I'm Sunil.Here's little bit about me... I've been coding for over 2.5 and years now. As a Full Stack developer I've worked  with startups to help build & scale their companies...`;

    if (abouts && abouts.length) {
        aboutHeading = abouts[abouts.length - 1].heading;
        aboutImage = abouts[abouts.length - 1].description;
        const imageInput = `/api/${abouts[abouts.length - 1].fileInput.replace(/\\/g, '/')}`;
        aboutImage = imageInput;
    }




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

            <h3 className="absolute top-24 uppercase tracking-[24px] text-gray-500 text-2xl">About</h3>

            <motion.img src={aboutImage}

                initial={{
                    x: -200,
                    opacity: 0
                }}

                whileInView={{
                    x: 0,
                    opacity: 1
                }}

                transition={{
                    duration: 1.2,
                }}

                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
            // className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover "
            />

            <div className="space-y-10 px-10 md:px-10">
                <h4 className="text-4xl font-semibold">{aboutHeading}</h4>
                <p className="text-base">
                    {aboutDesc}
                </p>
            </div>

        </motion.div>
    )
}

export default About