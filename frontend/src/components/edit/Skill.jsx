import React, { useRef } from 'react'
import { useAddSkillMutation, useGetSkillsQuery, useDeleteSkillMutation } from '../../store/slices/skillSlice';
import SkillsList from './SkillsList';
const Skill = () => {

    const skillRef = useRef();
    const ratingRef = useRef();
    const directionRef = useRef();
    const [createSkill] = useAddSkillMutation();
    const { data: skills, isLoading } = useGetSkillsQuery();

    const submitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        const skillInput = skillRef.current;
        formData.append('rating', ratingRef.current.value)
        formData.append('direction', directionRef.current.value)


        for (let i = 0; i < skillInput.files.length; i++) {
            formData.append('skill', skillInput.files[i]);
        }
        const result = await createSkill(formData);

        skillRef.current.value = ''
        ratingRef.current.value = ''

    }

    return (
        <>
            <div className='flex justify-center mt-10'>
                <h3 className=" top-24 uppercase tracking-[10px] text-[#f7AB0A] text-2xl">Skills </h3>
            </div>

            <div className='flex justify-center mt-10'>

                <form className="flex flex-col space-y-2 w-fit mx-auto">
                    <label htmlFor="" className="text-gray-500">Skill</label>
                    <input type="file" className='formInput' name="skill" ref={skillRef} />

                    <label htmlFor="" className="text-gray-500">Rating</label>
                    <input type="text" className='formInput' name="rating" ref={ratingRef} />

                    <label htmlFor="" className="text-gray-500">Direction</label>
                    <select className='formInput' name="direction" ref={directionRef} >
                        <option value="1">Right</option>
                        <option value="2">Left</option>
                    </select>

                    <br />
                    <button className="bg-[#f7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg" onClick={submitHandler}>Save</button>
                </form>
            </div>

            <div className='flex justify-center mt-10'>
                {isLoading && <p>Loading...</p>}

                {skills && skills.length > 0 && <SkillsList list={skills} />}

            </div>
        </>
    )
}

export default Skill