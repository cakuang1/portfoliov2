import Layout from "@/components/layout"



export default function Contact() {
  return (
    <Layout> 
          <div className='w-3/5 mx-auto'>
          <div className="text-center mt-14">
                <h1 className="font-bold text-3xl inline-block border-b-2 border-purple  ">Contact</h1>
              </div>
                <div>
                    <h1 className="text-2xl text-center mt-8">Get In Touch. My inbox is always open.</h1>
                </div>
                <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="links text-center">
                    <div className="flex ">
                    <h2 className="text-purple  text-xl font-bold">Links </h2>
                    </div>
                    <div>
                        <div className="github button flex">

                        </div>
                        <div className="Linkedin button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg>
                            <h1 className="">LinkedIn</h1>
                        </div>
                        <div className=" button"></div>
                    </div>
                </div>
                <div className="contact">
                <h2 className="text-purple  text-xl font-bold">Email </h2>
                </div>
                </div>

          </div>
   </Layout>

  )
}
