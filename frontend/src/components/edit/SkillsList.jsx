import React from 'react'
import { useDeleteSkillMutation } from '../../store/slices/skillSlice';
const SkillsList = (props) => {
    const skills = props.list
    const [deleteSkill] = useDeleteSkillMutation();
    const deleteHandler = async (id) => {
        await deleteSkill(id);
    }

    return (
        <div className='flex justify-center mt-10'>
            <table className=' text-gray-500'>
                <tr>
                    <th>#</th>
                    <th>Skill</th>
                    <th>Rating</th>
                    <th>Direction</th>
                    <th>Action</th>
                </tr>

                {
                    skills.map((skill, index) => (

                        < tr >
                            <td>{index + 1}</td>

                            <td>
                                <img src={`/api/${skill.skill.replace(/\\/g, '/')}`} alt="" className='imageIcon' />
                            </td>
                            <td>
                                {skill.rating}
                            </td>
                            <td>
                                {skill.direction == 1 ? "Right" : "Left"}
                            </td>
                            <td>
                                <button type="button" onClick={() => deleteHandler(skill._id)}>
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

export default SkillsList