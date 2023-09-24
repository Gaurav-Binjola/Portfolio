

const Contact = () => {
  return (
    <div name="Contact" className="w-full h-screen bg-[#0a192f] text-gray-400 flex justify-center items-center p-4">
        <form method="POST" action="https://getform.io/f/cb097cd2-a1d0-4e73-9a84-af8f664672c3" className="flex flex-col max-w-[600px] w-full ">
            <div className="pb-8">
                <p className="text-4xl font-bold border-b-4 border-b-pink-600 ">Contact</p>
                <p className="text-lg p-4 "> //  Submit the form below or send me an email- gauravsom9266@gmail.com </p>
            </div>
            <input className="bg-[#ccd6f6] text-center p-2" type="text" placeholder="name" name="name"  />
            <input className="my-4 p-2 bg-[#ccd6f6] text-center" type="text" placeholder="email" name="email"  />
            <textarea className="bg-[#ccd6f6] p-2" name="message" placeholder="message" rows="10"></textarea>
            <button className="bg-gray-300 hover:bg-pink-600 hover:border-pink-600 border-1 my-4 mx-auto py-3 px-8 rounded-[10px] "> submit </button>
        </form>
    </div>
  )
}

export default Contact