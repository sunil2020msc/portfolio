import { motion } from "framer-motion"
import { ToastContainer, toast } from 'react-toastify';
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/20/solid"

import { useCreateContactMutation } from "../store/slices/contatcSlice";

import { useRef } from "react";
const ContactMe = () => {

    const [createContact] = useCreateContactMutation();

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const submitHandler = async (e) => {
        e.preventDefault();
        // toast("Thank You!")

        const data = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
        }

        if (firstNameRef.current.value == '') {
            firstNameRef.current.focus()
            toast("First Name required")
            return;
        }
        if (lastNameRef.current.value == '') {
            lastNameRef.current.focus()
            toast("Last Name required")
            return;
        }
        if (emailRef.current.value == '') {
            emailRef.current.focus()
            toast("E-mail required")

            return;
        }
        if (messageRef.current.value == '') {
            messageRef.current.focus()
            toast("Message required")
            return;
        }

        const result = await createContact(data)
        toast("Thank You!")
        firstNameRef.current.value = ''
        lastNameRef.current.value = ''
        emailRef.current.value = ''
        messageRef.current.value = ''
    }

    return (
        <motion.div className="flex flex-col relative  h-screen md:text-left md:flex-row mx-w-7xl px-10 justify-center mx-auto items-center z-0 "

            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, }}
        >

            {/* <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
        > */}

            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">Contact</h3>

            <div className="flex flex-col space-y-10 mt-20">
                <h4 className="text-4xl font-semibold text-center">I have got just what you need. <span className="underline decoration-[#f7AB0A]/50">Lets Talk.</span> </h4>

                <div className="space-y-10 ">

                    <div className="flex items-center space-x-5 justify-between">
                        <PhoneIcon className="text-[#f7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">+91-9066344714</p>
                    </div>

                    <div className="flex items-center space-x-5 justify-between">
                        <MapIcon className="text-[#f7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">Bangalore</p>
                    </div>

                    <div className="flex items-center space-x-5 justify-between">
                        <EnvelopeIcon className="text-[#f7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">sunil2020msc@gmail.com</p>
                    </div>

                </div>

                <form className="flex flex-col space-y-2 w-fit mx-auto" onSubmit={submitHandler}>
                    <div className="flex space-x-2" >
                        <input className="contactInput" type="text" placeholder="First Name" ref={firstNameRef} />
                        <input className="contactInput" type="text" placeholder="Last Name" ref={lastNameRef} />
                    </div>
                    <input className="contactInput" type="text" placeholder="E-mail" ref={emailRef} />

                    <textarea className="contactInput" placeholder="Message" ref={messageRef} />

                    <button className="bg-[#f7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg" >Submit</button>
                </form>

            </div>
            {/* </div> */}
            <ToastContainer />
        </motion.div >
    )
}

export default ContactMe