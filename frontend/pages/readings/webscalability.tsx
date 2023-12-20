import Layout from "@/components/layout"
import Chapter from "@/components/blogcomponents/chapter"
import Subheader from "@/components/blogcomponents/subheader"
import Bullet from "@/components/blogcomponents/bulletpoints"
import { SlowBuffer } from "buffer"
import { Sign } from "crypto"



export default function TCPIPnotes() {
  return (
    <Layout> 
          <div className='w-3/5 mx-auto'>
          <div className="text-center mt-14">
                <h1 className="font-bold text-3xl inline-block border-b-2 border-purple  ">Web Scalability for startup engineers</h1>
                <h2>Notes</h2>
                <Chapter title="1 Core concepts"/>
                <Subheader title="Scalability"/>
                <p>Ability to handle more users without affecting the user experience</p>
                <p>Handling more data : Processing more and more data puts more pressure on system. How do you handle this ?</p>
                <p>Handling Higher conccurency levels : Concurrency causes many issues. More conccurency causes many many issues</p>
                <p>Handling higher interaction rates : How often do clients exchange information from your servers</p>
                <Subheader title="Single-Server Configuration"/>
                <p>Entire server runs on a single machine. This includes the application server and the database management system</p>
                <Subheader title="Making the Server Stronger: Scaling Vertically"/>
                <p>Vertical scalability is accomplished by upgrading the hardware
and/or network throughput.</p>
<p>Very expensive, grows exponentially and contains hard limits, and may need specialized operating systems</p>

<Subheader title="Isolation of Services"/>
<p>Handle the application server and database queries sepererately with their own dedicated machine</p>
<p>Divide your web application into smaller pieces and host them on seperate machines</p>
<Subheader title="Content Delivery Network: Scalability for Static Content"/>
<p>Global distribution of static files with the idea of offloading the web server</p>
<p>CDNs serve static content using data centers all over the world</p>
<Subheader title="Scalability for a Global Audience"/>
<p>Multiple edge-cache servers located around the world to reduce the network latency even further</p>
<Chapter title="2 Principles of Good
Software Design"/>
<Subheader title="Simplicity"/>
<p>Strive to build good abstractions that can make this much simpler.</p>
<p>Learn from already great software available and avoid overengineering</p>
<Subheader title="Loose Coupling"/>
<p>Coupling measures how dependent two components are. High coupling could mean changing code in once component means changing code in another component</p>
<p>Low coupling keeps complexity localized. Make your components have narrow functinality</p>

<p>A good example is the UNIX command line programs, where each process gets three open files that it can read and write from</p>
<Subheader title="Don’t Repeat Yourself (DRY)"/>
<p>Copy and pasting programming requires higher maintanence costs</p>

<Subheader title="More design principles are described in the book but I will skip those"/>
<Chapter  title="3 Building the Front-End Layer"/>
<p>Front-end applications are fairly easy to scale through horizontal scaling</p>
<Subheader title="Managing State"/>
<p>Statelessness is the idea that requests do not hold any data. This allows for copies of servers to serve the same data no matter where the request came from</p>
<Subheader title="Components of the Scalable Front End"/>
<p>

  ,
</p>
            </div>
            </div>
   </Layout>
  )
}
