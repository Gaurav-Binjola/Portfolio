import {HiArrowNarrowRight} from 'react-icons/hi'


const Hero = () => {
  return (
    <div name="home" className=" bg-[#0a192f] h-screen w-full " >
     {/* container */}

     <div className=" max-w-[1000px] mx-auto my-auto flex flex-col justify-center px-8 h-full">

      <p className="text-pink-600"> Hi my Name is </p>
      <h1 className=" sm:text-7xl text-4xl font-bold text-[#ccd6f6]"> Gaurav </h1>
      <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]"> I'm a Web Developer </h2>
      <p className="text-[#8892b0] max-w-[700px] py-4"> I'm a Web Developer specializing in building exceptional digital experiences, I'm focused on building high-quality websites and identify opportunities to enhance the user experience. </p>

      <div>
        <button className="text-white group border-2 px-6 py-3 flex flex-row items-center gap-4 my-2 hover:bg-pink-600 hover:border-pink-600"> <span> View Work </span> <HiArrowNarrowRight className="group-hover:rotate-90 duration-300" /></button>
      </div>
     </div>


    </div>
  )
}

export default Hero