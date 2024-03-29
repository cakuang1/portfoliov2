import Layout from "@/components/layout"
import Link from "next/link";

const BlogComponent: React.FC<BlogProps> = ({ title, description, link ,categories}) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
<div className="border mt-3 p-6 rounded-lg transition duration-300 ease-in-out hover:bg-gray-50 ">
      <h2 className="text-xl">{title}</h2>
      <p className="text-gray-400">{description}</p>
      <div className="flex mt-2 ">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 16h8v-2H6v2Zm0-4h12v-2H6v2Zm-2 8q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20H4Zm0-2h16V8h-8.825l-2-2H4v12Zm0 0V6v12Z"/></svg>
      <div>            {categories.map((category, index) => (
              <span key={index} className="mr-2">
                {category}
              </span>
            ))} </div>
      </div>
    </div>
</Link>
  );
};

interface BlogProps {
  title :string,
  description :string,
  link : string
  categories : string[]
}


const operating = {
  title: "Operating Systems : Three Easy Pieces",
  description: "The operating systems textbook to fill in some of the lower level stuff I wanted to learn about",
  link:"/readings/ostep",
  categories  : ["Operating Systems Concurency","Virtualization"]
}

const java = {
  title: "Java Roadmap",
  description: "Understanding the Java language through roadmap.sh",
  link:"/readings/java",
  categories : ["Programming Languages", "Java"]
}

const algorithms = {
  title: "Grokking Algorithms",
  description: "Fun intuitive book about common algorithms and data structures. Rereference before interviews",
  link:"/readings/grokkingalgorithms",
  categories : ["Algorithms","Data Structures","Interview Prep"]
}
const databaseinternals = {
  title: "DataBase Internals",
  description: "Understanding concepts behind modern database and storage engine internals",
  link:"/readings/databaseinternals",
  categories: ['Databases',"Indexes"]
}
const hpbn = {
  title: "High Performance Browser Networking",
  description: "Wanted to learn more about TCP/IP and HTTP. Skipped a majority of the book",
  link:"/readings/hpbn",
  categories : ["Networking"]
}
const systemdesign = {
  title: "System Design Interview - An Insider's Guide Volume 1",
  description: "System Design ",
  link:"/readings/systemdesign",
  categories : ["System Design"]
}

const webscale = {
  title: "Web Scalability for Startup Engineers",
  description: "More system design",
  link:"/readings/webscalability",
  categories : ["System Design"]
}
export default function Blog() {
  return (
    <Layout> 
          <div className='w-3/5 mx-auto'>
          <div className=" mt-14">
          <h1 className="font-bold text-3xl  text-center"><span className="border-b-2 border-purple">Readings</span></h1>
                <h2 className="text-lg text-center  mt-4"> Notes at a high level. Some notes are still in progress </h2>
                  <BlogComponent {...operating}/>
                  <BlogComponent {...algorithms}/>
                  <BlogComponent {...java}/>
                  <BlogComponent {...databaseinternals}/>
                  <BlogComponent {...hpbn}/>
                  <BlogComponent {...systemdesign}/> 
                  <BlogComponent {...webscale}/> 
                <div>
                </div>
            </div>
            </div>
   </Layout>
  )
}



