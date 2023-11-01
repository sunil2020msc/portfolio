import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SocialIcons from '../components/edit/SocialIcons';
import Typo from '../components/edit/Typo';
import About from '../components/edit/About';
import WorkExp from '../components/edit/WorkExp';
import Skill from '../components/edit/Skill';
import Project from '../components/edit/Project';
import ContactMe from '../components/edit/ContactMe';

const EditPage = () => {
    const [section, setSection] = useState("");
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">

            <div className='flex justify-center mt-10'>
                <h3 className=" top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Edit Portfolio</h3>

            </div>

            <div className='flex justify-center mt-10'>
                <form className="flex flex-col space-y-2 w-fit mx-auto">
                    <label htmlFor="" className="text-gray-500">Section</label>
                    <select className="formInput" value={section} onChange={(e) => setSection(e.target.value)}>
                        <option value="">Select Section</option>
                        <option value="1">Social links</option>
                        <option value="2">Typo</option>
                        <option value="3">About</option>
                        <option value="4">Work Experience</option>
                        <option value="5">Skills</option>
                        <option value="6">Projects</option>
                        <option value="7">Contact Me</option>
                    </select>

                </form>
            </div>

            {section == "1" && <SocialIcons />}
            {section == "2" && <Typo />}
            {section == "3" && <About />}
            {section == "4" && <WorkExp />}
            {section == "5" && <Skill />}
            {section == "6" && <Project />}
            {section == "7" && <ContactMe />}


        </div>
    )
}

export default EditPage