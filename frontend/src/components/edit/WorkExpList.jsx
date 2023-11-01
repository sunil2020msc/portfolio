import React from 'react'
import { useDeleteWorkExperienceMutation } from '../../store/slices/workExpSlice';
const WorkExpList = (props) => {
    const workExps = props.list

    const [deleteWorkExp] = useDeleteWorkExperienceMutation();
    const deleteHandler = async (id) => {
        await deleteWorkExp(id);
    }
    let newPath;

    return (
        <div className='flex justify-center mt-10'>
            <table className=' text-gray-500'>
                <tr>
                    <th>#</th>
                    <th>logo</th>
                    <th>Role</th>
                    <th>Project</th>
                    <th>Tecch Used</th>
                    <th>Summary</th>
                    <th>Action</th>
                </tr>

                {
                    workExps.map((workExp, index) => (

                        < tr >
                            <td>{index + 1}</td>
                            <td>
                                <img src={`/api/${workExp.logo.replace(/\\/g, '/')}`} alt="" className='imageIcon' />
                            </td>
                            <td>{workExp.role}</td>
                            <td>{workExp.project}</td>
                            <td style={{ display: "flex" }}>
                                {workExp.tech.map(techItem =>
                                    <img src={`/api/${techItem.replace(/\\/g, '/')}`} alt="" className='techIcon' />
                                )}
                            </td>

                            <td >
                                {workExp.summary.map(summaryItem =>
                                    <li>{summaryItem}</li>
                                )}
                            </td>

                            <td>
                                <button type="button" onClick={() => deleteHandler(workExp._id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>

                                </button>
                            </td>
                        </tr>

                    ))
                }

            </table>
        </div >
    )
}

export default WorkExpList