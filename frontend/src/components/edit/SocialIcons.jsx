import React, { useRef, useState } from 'react'

import { useCreateSocialIconMutation, useGetSocialIconsQuery, useUpdateSocialIconMutation } from '../../store/slices/socialIconApiSlice';
import SocialIconsList from './SocialIconsList';
const SocialIcons = () => {
    const socialLinkRef = useRef();
    const [createSocialLink, { isLoading, isSuccess }] = useCreateSocialIconMutation();
    const { data: socialIcons, isLoading: iconsLoading, isSuccess: iconsLoadingSuccess }
        = useGetSocialIconsQuery();

    const [updatSocialIcon] = useUpdateSocialIconMutation();

    const [primaryKey, setPrimaryKey] = useState("")

    const editHandler = (editData) => {
        console.log(editData)
        setPrimaryKey(editData._id);
        socialLinkRef.current.value = editData.socialLink;
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const socialLink = socialLinkRef.current.value;
        try {

            if (primaryKey) {
                console.log("key", primaryKey)

                const editData = { data: { socialLink }, id: primaryKey }
                const res = await updatSocialIcon(editData).unwrap();
            }
            else {
                const res = await createSocialLink({ socialLink }).unwrap();
            }
            socialLinkRef.current.value = ''
            setPrimaryKey("");
        }
        catch (e) {
            console.log("err", e)
        }

    }

    if (iconsLoadingSuccess) {

        console.log("socialIcons", socialIcons)
    }

    return (
        <>
            <div className='flex justify-center mt-10'>
                <h3 className=" top-24 uppercase tracking-[10px] text-[#f7AB0A] text-2xl">Social Icon</h3>
            </div>

            <div className='flex justify-center mt-10'>

                <form className="flex flex-col space-y-2 w-fit mx-auto">
                    <label htmlFor="" className="text-gray-500">Link</label>
                    <input type="text" className='formInput' name="iconLink" ref={socialLinkRef} />
                    <br />
                    <button className="bg-[#f7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg" onClick={submitHandler}>Save</button>
                </form>
            </div>

            <div className='flex justify-center mt-10'>
                {iconsLoading && <p>Loading..</p>}
            </div>

            {socialIcons && <SocialIconsList list={socialIcons} editFunc={editHandler} />}
        </>

    )
}

export default SocialIcons