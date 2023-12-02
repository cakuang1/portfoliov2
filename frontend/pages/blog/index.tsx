import Layout from "@/components/layout"


interface Blogprops {
  title :string,
  description :string,
  image:string,
  link : string
}


const databaseinternals = {
  title: "DataBase Internals",
  description: "Understanding concepts behind modern database and storage engine internals",
  image: "blogimages/ddia.jpeg",
  link:"ddia"
}




export default function Blog() {
  return (
    <Layout> 
          <div className='w-3/5 mx-auto'>
          <div className="text-center mt-14">
                <h1 className="font-bold text-3xl inline-block border-b-2 border-purple  ">Blog</h1>
                <h1 className="text-lg text-center mt-8"> I enjoy reading and learning new things, so I write these 'blogs' as a way of retaining and reviewing what I have learned.</h1>
                <div>
                </div>
            </div>
            </div>
   </Layout>
  )
}


