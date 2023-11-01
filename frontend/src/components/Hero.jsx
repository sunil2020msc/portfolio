import React, { useState } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { Link, useNavigate } from 'react-router-dom';
import BackgroundCircles from './BackgroundCircles'
import { useGetTypoListQuery } from '../store/slices/typoSlice';
const Hero = () => {

    const { data: typos, isSuccess } = useGetTypoListQuery();

    // if (isSuccess) {
    //     setTypos(texts.map(textItem => textItem.text))
    // }


    const [text] = useTypewriter({
        words: typos,
        loop: true,
        delaySpeed: 2000
    })

    const navigate = useNavigate();
    const scrollHandler = (link) => {
        window.location = (`/#${link}`)
    }
    const editHandler = () => {
        navigate("/edit")
    }
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <img src="./images/sunil.jpeg" alt="profile" title="click to edit" className="relative rounded-full h-32 w-32 mx-auto object-cover" onClick={editHandler} />

            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>

                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span>
                        {text}
                    </span>
                    <Cursor cursorColor='#f7AB0A' />
                </h1>

                <div className="pt-5">

                    <Link onClick={() => scrollHandler("about")}>
                        <button className="heroButton">About</button>
                    </Link>
                    <Link onClick={() => scrollHandler("experience")}>
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link onClick={() => scrollHandler("skills")}>
                        <button className="heroButton">Skills</button>
                    </Link>

                    <Link onClick={() => scrollHandler("projects")}>
                        <button className="heroButton">Projects</button>
                    </Link>


                </div>

            </div>

        </div >

    )
}

export default Hero