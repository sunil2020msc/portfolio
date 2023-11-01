import React from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import { useGetSocialIconsQuery } from '../store/slices/socialIconApiSlice'
const Header = () => {

    const { data: socialIcons } = useGetSocialIconsQuery();
    const scrollHandler = (link) => {
        window.location = (`/#${link}`)
    }
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div className="flex flex-row items-center"
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: .5
                }}

                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}

                transition={{
                    duration: 1.5
                }}
            >
                {/* social icons */}

                {socialIcons && socialIcons.map(si => (
                    <SocialIcon url={si.socialLink} fgColor="gray" bgColor="transparent" />

                ))}

            </motion.div>

            <motion.div className='flex flex-row items-center text-gray-300 cursor-pointer'
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: .5
                }}

                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}

                transition={{
                    duration: 1.5
                }}
            >
                <SocialIcon className='cursor-pointer' network="email" fgColor="gray" bgColor="transparent" onClick={() => scrollHandler("contactMe")} />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-4' onClick={() => scrollHandler("contactMe")}>Get In Touch</p>
            </motion.div>

        </header>
    )
}

export default Header