import { skills } from "../assets/constants"

const Skills = () => {
  return (
    <div name="Skills" className="bg-[#0a192f] w-full h-screen ">
        {/*container */}
        <div className=" flex justify-center items-center flex-col py-5 w-full h-full" >
            <div>
                <p className="text-4xl font-bold border-b-2 border-pink-600 text-gray-400 mx-[30px]">Experience </p>
                <p className=" text-gray-400 mt-6"> // These are the technologies I've worked with </p>
            </div>
            <div className=" w-full grid grid-cols-2 sm:grid-cols-3 items-center gap-4 text-center py-8 ">
                {skills.map((item) => (
                    <div className=" flex flex-col justify-center items-center py-8 px-4 mx-3 sm:mx-8 shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
                        <img src={item.icon} width={50} height={50}/>
                        <p className="text-xl text-gray-400 mt-4 "> {item.label} </p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}   

export default Skills