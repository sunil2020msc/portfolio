import React, { useRef, useState } from 'react'
import { useAddWorkExperienceMutation, useGetWorkExperienceQuery } from "../../store/slices/workExpSlice"
import WorkExpList from './WorkExpList';
const WorkExp = () => {

    const logoRef = useRef();
    const roleRef = useRef();
    const projectRef = useRef();
    const techRef = useRef();

    const [addWorkExp] = useAddWorkExperienceMutation()

    const { data: workExp, isLoading } = useGetWorkExperienceQuery()



    const [summaryInputValues, setSummaryInputValues] = useState([{ name: '', value: '' }]);

    const handleInputChange = (index, event) => {
        const newInputValues = [...summaryInputValues];
        newInputValues[index] = { ...newInputValues[index], value: event.target.value };
        setSummaryInputValues(newInputValues);
    };

    const handleAddInput = () => {
        setSummaryInputValues([...summaryInputValues, { name: '', value: '' }]);
    };

    const handleRemoveInput = (index) => {
        const newInputValues = [...summaryInputValues];
        newInputValues.splice(index, 1);
        setSummaryInputValues(newInputValues);
    };


    const submitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();


        let summaryData = []

        summaryInputValues.map((summary) => {
            if (summary.value) {
                summaryData.push(summary.value)
            }
        })

        summaryData = JSON.stringify(summaryData)



        formData.append('role', roleRef.current.value)
        formData.append('project', projectRef.current.value)
        formData.append('summary', summaryData)


        const logoInput = logoRef.current
        for (let i = 0; i < logoInput.files.length; i++) {
            formData.append('logo', logoInput.files[i]);
        }

        const techInput = techRef.current
        for (let i = 0; i < techInput.files.length; i++) {
            formData.append('tech', techInput.files[i]);
        }


        for (let entry of formData.entries()) {
            console.log("inhere")
            console.log(entry[0] + ": " + entry[1]);
        }

        const result = await addWorkExp(formData);


        logoRef.current.value = ''
        roleRef.current.value = ''
        projectRef.current.value = ''
        techRef.current.value = ''

        setSummaryInputValues([{ name: '', value: '' }])


        // console.log("result", formData)

    }

    return (
        <>
            <div className='flex justify-center mt-10'>
                <h3 className=" top-24 uppercase tracking-[10px] text-[#f7AB0A] text-2xl">Work Experience </h3>
            </div>

            <div className='flex justify-center mt-10'>

                <form className="flex flex-col space-y-2 w-fit mx-auto">
                    <label htmlFor="" className="text-gray-500">Logo</label>
                    <input type="file" className='formInput' name="logo" ref={logoRef} />

                    <label htmlFor="" className="text-gray-500">Role</label>
                    <input type="text" className='formInput' name="role" ref={roleRef} />

                    <label htmlFor="" className="text-gray-500">Project Name</label>
                    <input type="text" className='formInput' name="project" ref={projectRef} />

                    <label htmlFor="" className="text-gray-500">Tech Used</label>
                    <input type="file" multiple className='formInput' name="tech" ref={techRef} />

                    <label htmlFor="" className="text-gray-500">Summary <button type="button" className='actionBtn' onClick={handleAddInput}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </button></label>
                    <div>

                        {summaryInputValues.map((input, index) => (
                            <div key={index}>
                                <input
                                    type="text"
                                    name={`input-${index}`}
                                    value={input.value}
                                    className='formInput'

                                    onChange={(e) => handleInputChange(index, e)}
                                />
                                &nbsp;
                                <button type="button" className='actionBtn' onClick={() => handleRemoveInput(index)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                </button>
                            </div>
                        ))}

                    </div>


                    <br />
                    <button className="bg-[#f7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg" onClick={submitHandler}>Save</button>
                </form>
            </div>

            <div className='flex justify-center mt-10'>
                {isLoading && <p>Loading...</p>}

                {workExp && workExp.length != 0 && <WorkExpList list={workExp} />}

            </div>
        </>
    )
}

export default WorkExp