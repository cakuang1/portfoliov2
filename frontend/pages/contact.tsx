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
        <div><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 128 128"><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3z"/><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"/></svg></div>
          <h3 className="text-3xl font-semibold">LinkedIn</h3>
        </div>
      </Link>
    </li>
    <li className="flex md:-mx-4">
      <Link className="shadow p-1.5 link hover:bg-gray-200" href="">
        <div className="px-4 flex items-center gap-2">
          <div><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584c.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076c-.343-.93-.881-1.175-.881-1.175c-.734-.489.048-.489.048-.489c.783.049 1.224.832 1.224.832c.734 1.223 1.859.88 2.3.685c.048-.538.293-.88.489-1.076c-1.762-.196-3.621-.881-3.621-3.964c0-.88.293-1.566.832-2.153c-.05-.147-.343-.978.098-2.055c0 0 .685-.196 2.201.832c.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832c.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915c.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0Z" clip-rule="evenodd"/></svg></div>
          <h3 className="text-3xl font-semibold">Github</h3>
        </div>
      </Link>
    </li>
    <li className="flex md:-mx-4  ">
      <Link className="shadow p-1.5 link hover:bg-gray-200" href="">
        <div className="px-4 flex items-center gap-2">
          <div><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 128 128"><path fill="#1d9bf0" d="M114.896 37.888c.078 1.129.078 2.257.078 3.396c0 34.7-26.417 74.72-74.72 74.72v-.02A74.343 74.343 0 0 1 0 104.21c2.075.25 4.16.375 6.25.38a52.732 52.732 0 0 0 32.615-11.263A26.294 26.294 0 0 1 14.331 75.09c3.937.76 7.993.603 11.857-.453c-12.252-2.475-21.066-13.239-21.066-25.74v-.333a26.094 26.094 0 0 0 11.919 3.287C5.5 44.139 1.945 28.788 8.913 16.787a74.535 74.535 0 0 0 54.122 27.435a26.277 26.277 0 0 1 7.598-25.09c10.577-9.943 27.212-9.433 37.154 1.139a52.696 52.696 0 0 0 16.677-6.376A26.359 26.359 0 0 1 112.92 28.42A52.227 52.227 0 0 0 128 24.285a53.35 53.35 0 0 1-13.104 13.603z"/></svg></div>
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
