import React, { useRef, useState } from 'react'
import { useCreateAboutMutation, useGetAboutQuery } from '../../store/slices/aboutSlice'
import AboutList from './AboutList'
const About = () => {
    const headingRef = useRef()
    const descriptionRef = useRef()
    const fileInputRef = useRef()

    const [createAbout] = useCreateAboutMutation();
    const { data: abouts, isLoading } = useGetAboutQuery()
    const [primaryKey, setPrimaryKey] = useState("")

    console.log("abouts", abouts)

    const editHandler = (editData) => {
        console.log(editData)
        setPrimaryKey(editData._id);
    }

    const submitHandler = async (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('heading', headingRef.current.value)
        formData.append('description', descriptionRef.current.value)
        const filesInput = fileInputRef.current;
        for (let i = 0; i < filesInput.files.length; i++) {
            formData.append('fileInput', filesInput.files[i]);
        }

        if (primaryKey) {
            // const result = await updateTypo({ data: { text }, id: primaryKey })
        }
        else {
            const result = await createAbout(formData).unwrap();
        }

        headingRef.current.value = ''
        descriptionRef.current.value = ''
        fileInputRef.current.value = ''
        setPrimaryKey('');
    }
    return (
        <>
            <div className='flex justify-center mt-10'>
                <h3 className=" top-24 uppercase tracking-[10px] text-[#f7AB0A] text-2xl">About </h3>
            </div>

            <div className='flex justify-center mt-10'>

                <form className="flex flex-col space-y-2 w-fit mx-auto">
                    <label htmlFor="" className="text-gray-500">Heading</label>
                    <input type="text" className='formInput' name="heading" ref={headingRef} />
                    <label htmlFor="" className="text-gray-500">Description</label>

                    <textarea name="Description" className="formInput" ref={descriptionRef} />
                    <label htmlFor="" className="text-gray-500">File Input</label>
                    <input type="file" className='formInput' name="fileInput" ref={fileInputRef} />
                    <br />
                    <button className="bg-[#f7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg" onClick={submitHandler}>Save</button>
                </form>
            </div>


            <div className='flex justify-center mt-10'>
                {isLoading && <p>LOADING...</p>}
                {abouts && abouts.length != 0 && <AboutList list={abouts} editFunc={editHandler} />}
            </div>

        </>
    )
}

export default About