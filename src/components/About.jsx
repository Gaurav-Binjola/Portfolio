

const About = () => {
  return (
    <div name="About" className="w-full h-screen bg-[#0a192f] text-gray-300 ">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 px-4">
                    <p className="text-4xl font-bold border-b-4 border-pink-600">About</p>
                </div>
                <div></div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
                <div className=" sm:text-right pb-8 px-4">
                    <p className="text-4xl font-bold ">
                        Hi. I'm Gaurav, nice to meet you. Please take a look around.
                    </p>
                </div>
                <div className="pb-8 px-4">
                    <p>
                    I am an enthusiastic and motivated front-end developer in the early stages of my web development career. With a strong passion for creating visually engaging and user-friendly web interfaces, I am dedicated to expanding my skills and contributing to the world of digital experiences.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About