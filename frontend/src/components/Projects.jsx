import { motion } from "framer-motion"
import { useGetProjectQuery } from "../store/slices/projectSlice"
const Projects = () => {
    const { data: projects, isLoading } = useGetProjectQuery()
    return (
        <motion.div className="flex flex-col relative  h-screen md:text-left md:flex-row mx-w-7xl px-10 justify-evenly mx-auto items-center z-0"

            initial={{
                opacity: 0
            }}

            whileInView={{
                opacity: 1
            }}

            transition={{
                duration: 1.5,
            }}
        >
            <h3 className="absolute top-24 uppercase tracking-[24px] text-gray-500 text-2xl">Projects</h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">

                {
                    projects && projects.length != 0 && projects.map((project, index) => (
                        <div className="w-screen flex-shrink-0 snap-center  flex flex-col space-y-5 items-center justify-center p-20 md:44 h-screen">
                            <motion.img
                                initial={{ y: -300, opacity: 0 }}
                                transition={{ duration: 1.2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="h-24 w-24" src={"/api/" + project.logo.replace(/\\/g, '/')} alt="logo" />

                            <div className="space-y-10 px-0 md:px-10 mx-w-6xl">
                                <h4 className="text-4xl font-semibold text-center">
                                    <span className="underline decoration-[#f7AB0A] hover:text-[#f7AB0A] transition-all ">

                                        <a href={project.link} target="_blank" title="click to view">
                                            {project.heading}
                                        </a>

                                    </span>

                                </h4>
                                <p className="text-lg text-center md:text-left ">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))
                }

            </div>

            <div className="w-full absolute top-[30%] bg-[#f7AB0A]/10 left-0 h-[500px] -skew-y-12" />



        </motion.div >
    )
}

export default Projects