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
DNS : Third party DNS providers are typically  used to convert domain names to an IP address. This IP address would be the load balancer closest to the client
</p>
<p>Load Balancers : Entry point to Web service endpoints, allowing scaling your web servers. There are many benefits to using a load balancer, hidden server maintenance, Increasing capacity, failure management, automatic scaling</p>
<p>Load balancers are also provided through third party services, or one which can be self-managed, using an open source one</p>
<p>Web Servers typically contain your application and business logic which do most of the actaul processing </p>
<p>Caching reduces the amount of recurrent processing your web services have to do. A CDN is an example of a cache that stores static pages so your server dosen't need to continue serving static pages</p>
<p>However, the more personalized or dynamic your application is, the harder it is to design caches</p>
<p>Auto Scaling : Automating infrastructure so that new virtual servers are added dependent of server load</p>
<p>Auto scaling is great for unexpected spikes in traffic patterns. The most easiest way to implement it is using a third party provider</p>

<Chapter title="4 Web Services"/>
<Subheader title="Designing Web Services"/>
<p>API first approach became much more common as new user interfaces arose. This allows all clients to use the same API, independent of what 
  medium the client is using.
</p>
<p>Pragmatic Approach would be a combination. </p>
<Subheader title="Pragmatic Approach"/>
<p>Function centric services : Call functions on remote machines without the need to know how these functions or objects are implemented</p>
<p>Resource-Centric Services : Focused on developing webservices on the concept of a resource instead of a function. Resources can be treated as an object with limited amounts of operations performed. Typically use JSON due to it simplicity</p>
<Subheader title="Scaling REST Web Services"/>
<p>Keep Service Machines stateless  : Make all of your web service machines stateless, pushing your service dependent data into shared data stores</p>
<p>Stateless web services provides loads of benefits, including load balancing compatibility, scalability, avaialbility by adding redundant servers, etc</p>
<p>Caching Service Responses by HTTP protocol caching, as GET methods can be cached. If GET handlers are read only, this is fairly easy, as any resource should not change</p>
<Subheader title="Functional Partitioning"/>
<p>Split large systems into a set of smaller, loosely coupled parts so that they can run across more machiens rather than having ot run on a single machine. This allows for independent scaling .</p>
<p>Main challenge when starting functional partitioning is doing it too early or creating too many paritions</p>
<Chapter title="5 Data Layer"/>
<Subheader title="Scaling with MySQL"/>
<p>MySQL uses the master slave pattern, where applications can send reads to the slaves, but only modify data through the master. These changes from the master are stored in logs, which can be sent to slave servers</p>
<p>This is an asynchronous process, which means that the master does not wait for the slaves to </p>
            </div>
            </div>
   </Layout>
  )
}
