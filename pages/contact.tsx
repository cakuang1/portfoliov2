import Layout from "@/components/layout"

export default function Contact() {
  return (
    <Layout> 
          <div className='w-3/5 mx-auto'>
                <div>
                    <h1 className="font-bold text-4xl text-center">Get In Touch</h1>
                </div>
                <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="links">
                    <div className="flex">
                    <h2>Links </h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M17.74 2.76a4.321 4.321 0 0 1 0 6.1l-1.53 1.52c-1.12 1.12-2.7 1.47-4.14 1.09l2.62-2.61l.76-.77l.76-.76c.84-.84.84-2.2 0-3.04a2.13 2.13 0 0 0-3.04 0l-.77.76l-3.38 3.38c-.37-1.44-.02-3.02 1.1-4.14l1.52-1.53a4.321 4.321 0 0 1 6.1 0zM8.59 13.43l5.34-5.34c.42-.42.42-1.1 0-1.52c-.44-.43-1.13-.39-1.53 0l-5.33 5.34c-.42.42-.42 1.1 0 1.52c.44.43 1.13.39 1.52 0zm-.76 2.29l4.14-4.15c.38 1.44.03 3.02-1.09 4.14l-1.52 1.53a4.321 4.321 0 0 1-6.1 0a4.321 4.321 0 0 1 0-6.1l1.53-1.52c1.12-1.12 2.7-1.47 4.14-1.1l-4.14 4.15c-.85.84-.85 2.2 0 3.05c.84.84 2.2.84 3.04 0z"/></svg>
                    </div>
                    <div>
                        <div className="github button"></div>
                        <div className="Linkedin button"></div>
                        <div className=" button"></div>
                    </div>
                </div>
                <div className="contact">
                    <h2>Email</h2>
                </div>
                </div>

          </div>
   </Layout>

  )
}
