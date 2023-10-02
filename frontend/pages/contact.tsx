import Layout from "@/components/layout"
import Link from "next/link"



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
    <li className="flex md:-mx-4 ">
      <Link className="shadow p-1.5 link hover:bg-gray-200" href="">
        <div className="px-4 flex items-center gap-2">
        <div><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg></div>
          <h3 className="text-3xl font-semibold">LinkedIn</h3>
        </div>
      </Link>
    </li>
    <li className="flex md:-mx-4">
      <Link className="shadow p-1.5 link hover:bg-gray-200" href="https://github.com/cakuang1">
        <div className="px-4 flex items-center gap-2">
          <div><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584c.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076c-.343-.93-.881-1.175-.881-1.175c-.734-.489.048-.489.048-.489c.783.049 1.224.832 1.224.832c.734 1.223 1.859.88 2.3.685c.048-.538.293-.88.489-1.076c-1.762-.196-3.621-.881-3.621-3.964c0-.88.293-1.566.832-2.153c-.05-.147-.343-.978.098-2.055c0 0 .685-.196 2.201.832c.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832c.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915c.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0Z" clip-rule="evenodd"/></svg></div>
          <h3 className="text-3xl font-semibold">Github</h3>
        </div>
      </Link>
    </li>
    <li className="flex md:-mx-4  ">
      <Link className="shadow p-1.5 link hover:bg-gray-200" href="">
        <div className="px-4 flex items-center gap-2">
          <div><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"/></svg></div>
            <h3 className="text-3xl font-semibold">Twitter</h3>
        </div>
      </Link>
    </li>


  </ul>
</div>

                </div>
                <div className="contact">
                <h2 className="text-purple  text-xl font-bold">Email </h2>
                <h3 className="text-gray-500 text-lg mt-4 mb-4">Send over an Email, I am quick to respond!</h3>
                <div className="w-full lg:w-1/2 px-0 sm:px-8">
                      <li className="flex md:-mx-4  ">
            <Link className="shadow p-1.5 link hover:bg-gray-200" href="">
              <div className="px-4 flex items-center gap-2">
                <div><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/></svg></div>
                                  <h3 className="text-3xl font-semibold">Twitter</h3>
              </div>
            </Link>
    </li>
                </div>
                </div>
                </div>

          </div>
   </Layout>

  )
}
