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
            <p> What is sharding?  Sharding seperates a large database into smaller more managed parts called shards. These shards contain subsets of the larger database and are typically mutually exclusive. Here are a few considerations : </p>
            <Bullet bullets={["Choice of sharding key. Consists of one or more fields in a table. A hashing function is typically applied,and the value maps to a shard. Choosing an important sharding key is important for even distribution of data",
        "Resharding data: Occurs when a single shard can no longer hold data or certain shards experience shard exhaustion. This is fixed using consistent hashing.","Celebrity Problem : Shard is overwhelmed/Certain shards are outliers. Thus, we should allocate seperate shards for those who have a large number of read operations",
        "Join and Denormalize : Join operations are hard once the database has been sharded. We must denormalize the database so queries are perfomed in a single table"]}/>
            <Subheader title="Millions of users and beyond"/>
            <p>Key ideas for scaling your  application</p>
            <Bullet  bullets={["Keep web tiers stateless" ,  "Build Redundancy at every tier" ,  "Cache data as much as you can" , "Support multiple data centers", "Host Static assets in CDN" , "Scale your data tier by sharding",
            "Split tiers into individual services" , "Monitor your system and use automation tools"]}
            ></Bullet>
            <Chapter title="CHAPTER 2: BACK-OF-THE-ENVELOPE ESTIMATION"/>
            Read if you want quick overview of esimations, will not go over it here
            <Chapter title="CHAPTER 3: A FRAMEWORK FOR SYSTEM DESIGN

INTERVIEWS"/>

        <Subheader title="A 4-step process for effective system design interview"/>
        <p>Step 1 : Understand the problem and establish design scope</p>
        <Bullet bullets={["Ask the right questions, make the proper assumptions, and gather information", "Ask questions about what features are we planning to build? Users ? How fast does the company anticipate scale up ? Technology stack?"]}/>
        <p>Step 2 : Propose high level design and get buy-in</p>
        <Bullet bullets={["Come up with initial blue print for design", "Draw box diagrams on board (Clients,APIS,webservers,data stores,cache,CDN,message queues)", "Do back of the envelope calculations to evauluate if your blueprint fits the constraints"]}/>
        <p>Step 3 : Design deep dive</p>
        <Bullet bullets={["Identify and prioritize components","Some examples might be focusing on the bottlenecks and resource estimations, where the interviewer likes focusing on high-level design"]}/>
        <p>Step 4 : Wrap Up</p>
        <p>Interviewer might ask follow-up questions or give you the freedom to discuss final points</p>
        
        <Subheader title="Dos and Donts"/>
        <p>Dos</p>
        <Bullet bullets={["Ask for clarification", "Understand the requirments " , "Communicate with recruiter",  "Suggest multiple approaches if possible", "Once you agree with your interviewer on the blueprint, go into details on each component. Design the most crtitical components first",  "Bounce ideas to interviewer"]}/>
        <p>Don'ts</p>
        <Bullet bullets={["Be unprepared for typicail interview questions", "Dont jump into a solution without clarifying requirements and assumptions", "Ask for feedback often", "You are not done until your inteviewer says your done"]}/>
        <Chapter title="CHAPTER 4: DESIGN A RATE LIMITER"/>
        <p> What is a rate limiter ? </p>
        <p>A rate limiter limits the number of client requests allowed to be sent over a period of time.</p>
        <Subheader title="Step 1 - Understand the problem and establish design scope"/>
        <p> Requirements</p>
        <Bullet bullets={["Accurate", "Low latency, Should not slow down HTTP response time","Use as little memory as possible", "Distributed rate limiting, Shared across multiple servers", "Exception handling,user should be notified if their requests have been throttled"," High fault tolerance,what happends if the rate limiter goes offline,it should not affect the entire system"]}/>
        <Subheader title="Step 2 - Propose high-level design and get buy-in"/>
        <p>Where should you put the rate limiter?</p>
        <p>Client side is a bad idea.Easily forged and manipulated by malacious actors</p>
        <p>Server side implementation is better</p>
        <p>Alternative way, creating a api rate limiter middleware, which throttles requests before it reaches API servers. Cloud microservices typically offer this within a component called an API gateway. An API gateway can provide more than just rate limiting, but for now we only going to be talking about rate limiting.</p>
        <p>No absolute answers, but here is a general guidelines from the book</p>
        <Bullet bullets={["Evaluate current technology stack . If you choose to implement rate limiting server-side, make sure your programming language is efficient in do so"
        ,"Choose a rate limiting algorithm that fits your business needs",
        "Using a microservice architecture using an API gateway? Simply add on the rate limiter",
        "Rate limiters generally take a while to build. If not enough engineering resources, mayby opt for a commerical API gateway that provides built-in rate limiting capabilities"
        ]}/>
        <p>Here are a few of the algorithms used to create rate limiters</p>
        <p>Token Button algorithm</p>
        <p>Amazon and Stripe use this according to the book</p>
        <Bullet bullets={["Token Bucket has a predefined capacity. Tokens are put into the bucket at preset rates periodically. Once bucket is full, extra tokens overflow. The two parameters for this algorithm is the bucket size and refill rate",
        " Each Request consumes one token","If no tokens, the request gets dropped"]}/>
        <p>How would you use this algorithm in your system?</p>
        <Bullet bullets={["Bucket for each API endpoint if you want to rate-limit b","Throttle based on IP? Each IP address would need a bucket",  "Global bucket if entire system needs to be rate-limited"]}/>
        <Subheader title="Leaking Bucket Algorithm"/>
        <p>Similar to the token bucket,except requests are processed at a fixed rate</p>
        <Bullet bullets={["FIFO queue data structure that we called a leaking bucket","Bucket has fixed capacity and requests fill the queue" , "Requests leave the queue at a fixed rate determined by developer"]}/>   
        <Subheader title="Fixed window counter algorithm"/>
        <p>Divides timeline into fized time windows, assigning a counter for each window. Once counter exceeds pre-defined threshhold, requests are dropped </p>
        <Subheader title="Sliding window log algorithm"/>
        <p>Fixes the problem with edges of fixed time windows</p>
        <Bullet bullets={["Algorithm keeps track of timestamps, stored in a cache", "When a new request comes in, remove outdated time stamps, which are those that are older than the current time window", "Add the time stamp to the current request", "If log size is the same or lower than the allowed count, the the request goes through, else its dropped"]}/>
        <Subheader title="High-level architecture"/>
        <p>Algorithms are simple and easy to implement. But where should we store counters?</p>
        <p>A database is not a good idea, as disk reponses are very slow. An in-memory cache is a much better idea.</p>
        <Bullet bullets={["Something like redis is good here","Client sends a request","Middleware fetches counter, if the limit is reached, request rejected,else counter is incremented and saved in redis"]}/>
        <Subheader title="Step 3 - Design deep dive"/>
        <p>Rate limiting rules are written in confguration files. They determine the </p>     
        <p>Client exceeds limit and is being throttled? How do you respond? Http response headers returned to the client</p>
        <Bullet bullets={["X-Ratelimit-Remaining: The remaining number of allowed requests within the window." , "X-Ratelimit-Limit: It indicates how many calls the client can make per time window", 
        "X-Ratelimit-Retry-After: The number of seconds to wait until you can make a request again without being throttled."]}/>
        <p>Scaling a rate-limiter using a distributed enviornment. We need to scale the system to support multiple servers and conccurent threads.There are mainly two issues here. Race conditions and synchronization issues. How do we solve these issues?</p>
        <p>Locks can work, but significantly slow things down. The book describes two common approaches. Lua scripts and the sorted sets data structure in redis.</p>
        <p>For synchronization issues, one can use sticky sessions. If you have multiple rate limiters, clients will stick to one rate-limiter. This is not scalable so its not recommended. A better fix would be to use centralized data stores like redis</p>
        <p>Performance optimization : Multi-data center setup is crucial here. Latency is high for users further away. Synchronize data with an eventual consistency model.</p>
        <p>Monitoring : Once the rate limiter is put into place, it is important to check if the rate limiter is effective. That is, the algorthm chosen is effective, and the limiting rules are effective</p>
        <Subheader title="Step 4 - Wrap up"/>
        <p>There are other points to talk about</p>
        <p>Hard vs Soft rate limiting</p>
        <Bullet bullets={["Hard : Requests can't exceed threshhoold", "Soft : Requests can exceed threshhold for a short period"]}/>
        <p>Rate limiting at different levels</p>
        <Bullet bullets={["We have only talked about rate limiting at the application layer","It is possible to apply rate limiting to all other levels"]}/>
        <p>Avoid being rate limited, Design client with best practices</p>
        <Bullet bullets={["Use client cache to avoid making frequent api calls", "Understand the limit and do not send too many requests in a short time frame","Include code to catch errors so your client can succesfully recover from exceptions"]}/>
        <Chapter title="CHAPTER 5: DESIGN CONSISTENT HASHING"/>
        <p>For horizontal scaling, it is important to distribute requests efficiently and evenly. This is solved using consistent hashing.</p>
        <Subheader title="The rehashing problem"/>
        <p>If you have n cache servers, a common way to balance the load is to use a hashing function. Given a key, the serverIndex = hash(key) % n, where n is the number of servers</p> 
        <p>Problem arises when you have either added new servers or deleted existing server. Clients will connect to the wrong server.</p>
        <Subheader title="Consistent Hashing"/>
        <p>NOTE : Their are images in the book that help describe the process of consistent hashing which are not in this summary.</p>
        <p>Special kind of hashing such that when the hashtable is resized, only k/n number of keys need to be remapped on average, rather than nearly all keys need to be redistributed</p>
        <p>HashRing: A visual to describes the hash space. Since we are talking about SHA-1, the possible outputs are discrete value from 0 to 2^(160 - 1)</p>
        <p>HashServers : Mapping of server ips to values on the hash ring.</p>
        <p>Hash Keys: Hashed keys are set on the ring. To determine which server the key goes to, we choose the server that is closest clockwise from the key position.</p>
        <p>Adding a server : Only a fraction of the keys will be distributed. The new server will take a portion of the keys on the server closest clockwise. If we assume the keys are roughly evenly distributed, the number of keys redistributed would be less than the number of keys/number of servers</p>

        <p>Remove a server : Similarly. only a fraction of the keys would be distributed. The server closest clockwise to the deleted server takes over the deleted servers keys </p>
        <Subheader title="Two issues in the basic approach"/>
        <p>1.Impossible to keep the same size paritioning on the ring.Since servers are constantly being added and deleted, the hash space between servers.</p>
        <p>2.Non-uniform key distributions can occur</p>
        <p>Virtual nodes are used to solve these issues. The main idea is that servers now have multiple nodes that are spread throughout the ring instead. Adding more virtual nodes lowers the standard deviation for the distribution of keys in a server.</p>
        <p>How can you determine the affected nodes of a server shutdown ? Move anti clockwise from the deleted node until you hit a server. Then the range for the redistributed keys are the server you hit to your deleted node</p>
        <Chapter title="CHAPTER 6: DESIGN A KEY-VALUE STORE"/>
        <p>This chapter, we will be going over how to create a key-value store that supports the put and get operations</p>
        <Subheader title="Single server key-value store"/>
        <p>This can be easily done using built in hash tables. However, this is bottlenecked by trying to fit everything into memory. A key-value store needs to handle loads of data.</p>
        <Subheader title="Distributed key-value store"/>
        <p>A distributed KV-store has many servers and KV pairs are distributed across these servers.</p>
        <p>CAP theorem : It is impossible for a distributed system to provide more than two of these three guarantees. Consistency,Availability, Partition Tolerance</p>
        <p>Consistency : All clients see the same data, no matter what node they connect to</p>
        <p>Availability : Any client that sends a request gets a response, even if some nodes are down</p>
        <p>Partition tolerance : Communication break between two nodes continues to operate.</p>
        <p>Generally, partition tolerance is a must, so you must choose either Availablity and Consistency</p>
        <Subheader title="System components"/>
        <p>Core components of a KV store</p>
        <p>Data Partition</p>
        <Bullet bullets={["Must split data into smaller partitions and store them onto multiple servers", "Done using consistent hashing we described above"]}/>
        <p>Data replication</p>
        <Bullet bullets={["Developer chosen parameter N representing the number of servers the key will be replicated", "Work around for virtual nodes involves ignoring nodes of the same server"]}/>
        <p>Consistency</p>
        <Bullet bullets={["Data is replicated across multiple nodes, thus must be synchronized","Let N be the number of replicas,W is the write quorum size (Write operations must be acknowledged from W replicas),R is the read quorum size(Read operations must wait for responses from atleast R replicas)",
    "W,R and N are typically configured based on use case",
    ]}/>
    <p>Consistency models</p>
    <Bullet bullets={["Strong consistency : Any read operation returns a value corresponding to the most recent write data item. Clients never sees out of date data",
"Weak Consistency : Subsequent read operations may not see the most updated value", "Eventual Consistency : Form of weak consistency, Given enough time, all updates are propagated" ,"Strong consistency is typically not ideal as availablity is severly lowered. An enventual consistent model is highly adopted and what we will use"]}/>
        <p>Inconsistency resolution: versioning</p>
        <Bullet bullets={["Replication gives high availabilty but causes inconsistencies among replicas", "Vector clocks are [server,version] pair associated with a data item. Example D([S1,v1],[S2,v2])"]}/>

                    </div>
            </div>
   </Layout>
  )
}
