import Layout from "@/components/layout"
import Chapter from "@/components/blogcomponents/chapter"
import Subheader from "@/components/blogcomponents/subheader"
import Bullet from "@/components/blogcomponents/bulletpoints"

export default function Databaseinternals() {
  return (
    <Layout> 
          <div className='w-3/5 mx-auto'>
          <div className="text-center mt-14">
                <h1 className="font-bold text-3xl inline-block border-b-2 border-purple  ">DataBase Internals</h1>
                <h2>High level overview of the chapters I decided to read</h2>
            </div>
            
            <div>
                <Chapter title="CHAPTER 1: SCALE FROM ZERO TO MILLIONS OF USERS"/>
                <Subheader title="Single server setup"/>
                <p>Users access websites by finding IP addresses in a DNS lookup and HTTP requests are sent directly to your webserver</p>
                <Subheader title="Vertical vs Horizontal Scaling"/>
                <p>Vertical : Adding more computing power and memory to your machine</p>
                <p>Horizontal : Adding more servers. For larger apps, this is prefered.</p>
                <Subheader title="Load balancer"/>
                <p>Evenly distributes requests to replicated servers. Exposes a public IP address to connect to the load balancer directly, which then distributes requests to your private IP servers</p>
                <p>This provides better security as only servers in the same network are able to access your web servers.</p>
                <Subheader title="Database Replication"/>
                <p>Master-Slave architecture : Master only supports write operations. Slaves get copies from the master node, and only supports read operations</p>
                <p>Advantages of Master-Slave architecture</p>
                <Bullet bullets={["Better Performance : More queries to be processed in parallel", "Reliability : If one dies, you still have many more. Data loss is protected","High Availability : Site remains operational even if a database is offline, similar to how your webserver distributes loads"]}/>
                <Subheader title="Cache" />
                <p>Stores the results of expensive or frequent responses in memory so subsequent requests are served quickly. Here is what the general request looks like :</p>
                <Bullet bullets={["Request gets sent to the webserver" , "First checks if the cache contains response", "If the cache contains the request, the response is returned. Else, it queries the database for the request."]}/>
                <p>Caches considerations : </p>
                <Bullet bullets={["When should you use the cache : Queries that read a lot, and not write a lot. Memory is very volitile relative to disk", "Expiration policy : Include an expiration policy for cached items. Permanent cached data = bad",
            "Consistency : Involves keeping the data in cache and database in sync." , "Mitigating failures : Scale cache servers. Overprovision cache servers", "Eviction policy : If cache full what do you do? Need an eviction policty"]}/>
                <Subheader title="CDN"/>
                <p>Geographically dispersed servers used to deliver static content.Similar to a webserver cache.</p>
                <p>Considerations for using CDNS</p>
                <Bullet bullets={["Third party providers, can be expensive. Useless if infrequently used content is cached",
            "Determine a good cache expiry time. Too long? Cached items no longer reflect static content from origin server",
            "CDN Fallback : CDN failure? Clients should be able to detect this and grab files from origin",
            "Invalidating files: You are able to invalidate static content from CDNs even before expiration. For example, if you have updated your website recently, but the old state is still cached in the CDN"]}/>
            <Subheader title="Stateless web tier"/>
            <p> Statelful Architecture : Server is responsible for remembering client data from past requests. However, this means that clients must send requests to the same webserver, whichis hard to scale</p>
            <p> Statless Architecture : HTTP requests can be sent to any webserver. Data is stored in a shared data store. These are much more robust and scalable.</p>
            <Subheader title="Data centers"/>
            <p>Load balancer then distributes requests to data centers. However in a multi datacenter setup, their are new challenges.</p>
            <Bullet bullets={["Traffic Redirection : If a datacenter is down, we need effective tools such as GeoDNS to direct traffic to the nearest data center",
        "Data Synchronization : Users from different regions could be using different databases"]}/>
            <Subheader title="Message Queue"/>
            <p>Component stored in memory that support asynchronous communication. Its a buffer that distributes asynchronous requests. </p>
            <p>Producers can post a message to the queue so that the consumer can process the message even if the consumer is not available</p>
            <p>This allows both the producers and consumers to be scaled independently. If the queue becomes too large, consumer nodes can be increased, or if the queue is empty, we reduce the amount of nodes</p>
            <Subheader title="Logging, metrics, automation"/>
            <p>Logging : Monitoring error logs identifies errors in the system</p>
            <p>Metrics : Collecting different metrics help gain business insights and understand the health status of the system</p>
            <p>Automation : Improve productivity using automation. CI/CD for example.</p>
            <Subheader title="Database scaling"/>
            <p>Vertical Scaling : Increasing CPU,RAM etc. Hardware limits and greater risks in points of failure.</p>
            <p> Horizontal Scaling : Also called sharding. Data stored on each shard is unique. Hash functions are used to determine which shard the query needs to look in.</p>
            </div>
            </div>
   </Layout>
  )
}
