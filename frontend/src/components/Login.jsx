import { motion } from "framer-motion"
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/20/solid"

const Login = () => {
    return (
        <motion.div className="flex flex-col relative  h-screen md:text-left md:flex-row mx-w-7xl px-10 justify-evenly mx-auto items-center z-0 "

            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, }}
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">Login</h3>

            <div className="flex flex-col space-y-10 mt-20">

                <form className="flex flex-col space-y-2 w-fit mx-auto">
                    <label htmlFor="" className="text-gray-500">E-mail</label>
                    <input className="formInput" type="text" name="email" />
                    <label htmlFor="" className="text-gray-500">Password</label>
                    <input className="formInput " type="password" name="password" />
                    <br />
                    <button className="bg-[#f7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">Login</button>
                </form>

            </div>
        </motion.div >
    )
}

export default Login