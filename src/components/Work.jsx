import { project } from "../assets/constants"



const Work = () => {
  return (
    <div name="Work" className=" bg-[#0a192f] w-full md:h-screen text-gray-300 ">
        <div className=" w-full h-full flex flex-col justify-center items-center ">
            <div>
                <p className="text-4xl font-bold border-b-4 border-pink-600 ">
                    Work 
                </p>
                <p className=" my-4 ">
                    // Check out some of my recent work 
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-full gap-4 sm:px-[80px] px-[40px] ">
                {project.map((item) => (
                    <div className=" work-div" style={{backgroundImage: `url("${item.imgUrl}")`}}>
                        <div className="shadow-lg shadow-[#040c16] group container w-full h-full rounded-md flex justify-center items-center hover:bg-gradient-to-r from-purple-500 to-pink-500">
                            <div className="opacity-0 group-hover:opacity-100  ">
                                <span className="text-3xl px-6 tracking-wider font-bold text-white ">
                                    {item.label}
                                </span>
                                <div className="pt-8 text-center flex justify-between ">
                                    <a href={item.demoUrl}>
                                        <button className="text-center rounded-lg px-12 py-6 m-2 bg-violet-300 text-gray-700 text-lg">
                                            DEMO
                                        </button>
                                        
                                    </a>
                                    <a href={item.codeUrl}>
                                        <button className="text-center rounded-lg px-12 py-6 m-2 bg-violet-300 text-gray-700 text-lg">
                                            CODE
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Work