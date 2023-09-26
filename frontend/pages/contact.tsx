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
                <div className="links r">
                    <div className="">
                    <h2 className="text-purple text-xl font-bold">Links </h2>
                    <h3 className="text-gray-500 text-lg mt-4 mb-4">Feel free to check me out using the links below</h3>
                    </div>
                    <div className="w-full lg:w-1/2 px-0 sm:px-8">
  <ul className="space-y-6">
    <li className="flex md:-mx-4">
      <a
        className="rounded-full shadow p-1.5 link"
        aria-label="LinkedIn"
        href=""
        target="_blank"
      >
        <div className="px-4 flex items-center">
          <h3 className="text-xl font-semibold">LinkedIn</h3>
        </div>
      </a>
    </li>
    <li className="flex md:-mx-4">
      <a
        className="rounded-full shadow p-1.5 link"
        aria-label="Github"
        href=""
        target="_blank"
      >
        <div className="px-4 flex items-center">
          <h3 className="text-xl font-semibold">Github</h3>
        </div>
      </a>
    </li>
    <li className="flex md:-mx-4">
      <a
        className="rounded-full shadow p-1.5 link"
        aria-label="Twitter"
        href=""
        target="_blank"
      >
        <div className="px-4 flex items-center">
          <h3 className="text-xl font-semibold">Twitter</h3>
        </div>
      </a>
    </li>

  </ul>
</div>

                </div>
                <div className="contact">
                <h2 className="text-purple  text-xl font-bold">Email </h2>
                <h3 className="text-gray-500 text-lg mt-4 mb-4">Send over an Email, I am quick to respond!</h3>
                </div>
                </div>

          </div>
   </Layout>

  )
}
