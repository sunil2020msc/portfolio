import React, { useRef, useState } from 'react'
import { useGetTypoQuery, useCreateTypoMutation, useUpdateTypoMutation } from '../../store/slices/typoSlice'
import TypoList from './TypoList'
const Typo = () => {
    const textRef = useRef()
    const { data: typos, isLoading } = useGetTypoQuery();
    const [createTypo] = useCreateTypoMutation();
    const [updateTypo] = useUpdateTypoMutation()

    const [primaryKey, setPrimaryKey] = useState("")

    const editHandler = (editData) => {
        console.log(editData)
        setPrimaryKey(editData._id);
        textRef.current.value = editData.text;
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        const text = textRef.current.value

        if (primaryKey) {
            const result = await updateTypo({ data: { text }, id: primaryKey })
        }
        else {
            const result = await createTypo({ text }).unwrap();
        }
        setPrimaryKey('');
        textRef.current.value = ''
    }
    return (
        <>
            <div className='flex justify-center mt-10'>
                <h3 className=" top-24 uppercase tracking-[10px] text-[#f7AB0A] text-2xl">Typo</h3>
            </div>

            <div className='flex justify-center mt-10'>

                <form className="flex flex-col space-y-2 w-fit mx-auto">
                    <label htmlFor="" className="text-gray-500">Text</label>
                    <input type="text" className='formInput' name="text" ref={textRef} />
                    <br />
                    <button className="bg-[#f7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg" onClick={submitHandler}>Save</button>
                </form>
            </div>

            <div className='flex justify-center mt-10'>
                {isLoading && <p>Loading..</p>}
            </div>

            {typos && typos.length != 0 && <TypoList list={typos} editFunc={editHandler} />}
        </>
    )
}

export default Typo