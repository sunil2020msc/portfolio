import React, { useRef, useState } from 'react'
import { useCreateProjectMutation, useGetProjectQuery, useUpdateProjectMutation } from '../../store/slices/projectSlice'
import ProjectList from './ProjectList'
const Project = () => {
    const headingRef = useRef()
    const descriptionRef = useRef()
    const logoInputRef = useRef()
    const linkRef = useRef()

    const [createProject] = useCreateProjectMutation();
    const { data: projects, isLoading } = useGetProjectQuery()
    const [updateProject] = useUpdateProjectMutation()
    const [primaryKey, setPrimaryKey] = useState("")


    console.log("projects", projects)

    const editHandler = (editData) => {
        console.log(editData)
        setPrimaryKey(editData._id);
        headingRef.current.value = editData.heading
        descriptionRef.current.value = editData.description
        linkRef.current.value = editData.link
    }

    const submitHandler = async (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('heading', headingRef.current.value)
        formData.append('description', descriptionRef.current.value)
        formData.append('link', linkRef.current.value)
        const filesInput = logoInputRef.current;
        for (let i = 0; i < filesInput.files.length; i++) {
            formData.append('logo', filesInput.files[i]);
        }

        if (primaryKey) {
            const result = await updateProject({ data: formData, id: primaryKey })
        }
        else {
            const result = await createProject(formData).unwrap();
        }

        headingRef.current.value = ''
        descriptionRef.current.value = ''
        logoInputRef.current.value = ''
        linkRef.current.value = ''
        setPrimaryKey('');
    }
    return (
        <>
            <div className='flex justify-center mt-10'>
                <h3 className=" top-24 uppercase tracking-[10px] text-[#f7AB0A] text-2xl">Project </h3>
            </div>

            <div className='flex justify-center mt-10'>

                <form className="flex flex-col space-y-2 w-fit mx-auto">

                    <label htmlFor="" className="text-gray-500">logo</label>
                    <input type="file" className='formInput' name="logo" ref={logoInputRef} />

                    <label htmlFor="" className="text-gray-500">Project Link</label>
                    <input type="text" className='formInput' name="link" ref={linkRef} />

                    <label htmlFor="" className="text-gray-500">Heading</label>
                    <input type="text" className='formInput' name="heading" ref={headingRef} />

                    <label htmlFor="" className="text-gray-500">Description</label>
                    <textarea name="Description" className="formInput" ref={descriptionRef} />

                    <br />
                    <button className="bg-[#f7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg" onClick={submitHandler}>Save</button>
                </form>
            </div>


            <div className='flex justify-center mt-10'>
                {isLoading && <p>LOADING...</p>}
                {projects && projects.length != 0 && <ProjectList list={projects} editFunc={editHandler} />}
            </div>

        </>
    )
}

export default Project