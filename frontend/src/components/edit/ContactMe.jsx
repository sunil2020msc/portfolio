import React from 'react'
import { useGetContactQuery } from '../../store/slices/contatcSlice';
const ContactMe = (props) => {
    const { data: contacts, isLoading } = useGetContactQuery();


    console.log("conatcts", contacts)

    if (isLoading) {
        return <p>Loading</p>
    }

    return (
        <div className='flex justify-center mt-10'>
            <table className=' text-gray-500'>
                <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Message</th>
                </tr>

                {
                    contacts && contacts.length > 0 && contacts.map((contact, index) => (
                        < tr >
                            <td>{index + 1}</td>
                            <td>{new Date(contact.createdAt).toISOString()}</td>
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.email}</td>
                            <td>{contact.message}</td>
                        </tr>

                    ))
                }

            </table>
        </div >
    )


}

export default ContactMe