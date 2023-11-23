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
                  <Chapter title="Chapter 1. Introduction and Overview" />
                  <p>Multiple types of DBMS(Database Management Systems) that serve different purposes. Your job is to know when to know which one fits your problem.</p>
                  <Subheader title="DBMS Architecture" />
                  <p>DBMS use the client/server model, in which system nodes act as the servers and applications act as clients</p>
                  <p>Transport subsystem is responsible for client-server and server-server(clustered system) communication. Here are the general components:</p>
                  <Bullet bullets={["Query Processor: Parses the query, handles checks etc", 
                  "Query Optimizer : Eliminates redundancies in parts of query and finds the most efficient way of handling query. Responsible for finding an execution plan",
                  "Execution Engine : Excutes the chosen plan",
                  "Storage Engine : Contains multiple components. Helps with concurrency control and cache mangagement" ]}/>
                  <Subheader title="Memory- Versus Disk-Based DBMS" />
                  <p>Memory Databases : Store data in memory and use the disk for recovery and logging</p>
                  <Bullet bullets={['Faster performance, usually magnitudes faster','Typically easier to deal with memory allocation ']}/>
                  <p>Disk Databases : Store data in disk and use memory for caching disk contents or as a temporary storage</p>
                  <Bullet bullets={['Safer, less prone to data loss due to software/hardware failures','Easier to maintain and much cheaper']}/>
                  <p>In order to handle durability in memory based DBMS, logs and backups are typically stored on disk. On recovery, these logs and backups are used</p>
                  <Subheader title="Column- Versus Row-Oriented DBMS"/>
                  <p>Row oriented Databases : Horizontally parsable  (storing values belonging to the same row together)</p>
                  <Bullet bullets={["Works when several fields are read together(Identifying a unique record(s))","Useful when accessing rows of data which improves spatial locality"]}/>
                  <p>Column Oriented Databases: Fields of the same type are stored together</p>
                  <Bullet bullets={["Great for analytical workloads (Aggregations)"]}/>
                  <Subheader title="Data Files and Index Files"/>
                  <p>Why DBMS? Why not just use the OS file system? The primary goal of a DBMS is to store data, and have efficient access to the content.</p>
                  <Bullet bullets={['Storage Efficiency : Files are organized in a way that minimizes storage overhead per stored data record',
                  "Access Efficiency : Records can accessed in the least possible steps","Update Efficiency : Record updates can be performed in a away that minimizes the nunmber of changes on disk" ]}/>
                  <p>Database systems use indexes to efficiently search for certain records. Indexes are stored in different files from data files, and contain metadata</p>
                  <p>Data Failes : Contain actual data information</p>
                  <p>Index Files : Contain pointers to segments in the datafiles so scanning throughout the entire datafile isn't needed</p>
                  <Subheader title="Buffering, Immutability, and Ordering"/>
                  <p>Optimization in Database systems are related to these three concepts</p>
                  <Bullet bullets={['Buffering: Storage structure stores some amount of data before making changes on disk',"Mutability: Determining whether or not updates mutate in the same location vs appending","Ordering : Determining if the data records are stored in key ordering. Records that match closely are stored on contiguous segmnets on disk"]}/>
                  <Chapter title="Chapter 2. B-Tree Basics"/>
                  <p>Binary Search Tree : In-Memory data structure that is similar to B trees but are too inefficient for Disk based storage</p>
                  <p>B-Trees : Build upon the foundation of binary search trees, except higher fanout and samller heights</p>
                  <p>Here is the analogy in the book "you first have to pick the correct cabinet, then the correct shelf in that cabinet, then the correct drawer on the shelf, and then browse through the cards in the drawer to find the one you’re searching for. "</p>
                  <p>Book goes in depth about how certain operations affect the data structure but I will not go over it here </p>
                  <Chapter title="Chapter 3. File Formats"/>
                  <Subheader title="Motivation"/>
                  <p> Disk Management considerations</p>
                  <Bullet  bullets={["Create disk files are similar to dealing with languages with an unmanaged memory model(Like C)","For a disk structure to be efficient, it must use an efficient data structure","Implementing on disk structures require more attention and has more pitfalls"]}/>
                  <Subheader title="Binary Encoding"/>
                  <p>This section goes over how primitive types are stored (ints,floats,strings etc). Will not go over</p>
                  <Subheader title="General Principles"/>
                  <p> DataBase files consists of multiple parts including a header and trailer.</p>
                  <Subheader title="Page Structure"/>
                  <p>Data records are stored in data and index files, which are partitioned into fixed sized units called pages (Typically range 4kb-16kb)</p>
                  <p>B-trees nodes are either leaves or non-leaves. Leaves hold key and data record pairs. Nonleaf nodes hold keys and pointers to other nodes.</p>
                  <Subheader title="Slotted Pages"/>
                  <p>How do you deal with variable sized records?</p>
                  <Bullet bullets={['Solution 1 : Split pages into fixed size segments. However, if the record size is not a multiple of the segment size , one of the blocks will be partially filled','Solution 2: Slotted pages. Header contains an array data structure that points to different parts of the page']}/>
                  <Subheader title="Cell Layout"/>
                  <p>What are cells and what are they composed of? How can we then combine cells into pages and compose a tree out of the pages?</p>
                  <p>Key Cells : These cells hold a separator key and a pointer to the page between two neighboring pointers. They are used in the context of organizing data in a tree structure, where the keys help in navigating the structure efficiently.</p>
                  <p>Key-Value Cells:These cells hold both keys and data records associated with them. The key identifies the record, and the data record contains the actual information or payload associated with that key.</p>
                  <Subheader title="Combining Cells into Slotted Pages"/>
                  <p>To 'create' a page, the slotted page technique comes to play. Cells are appended to the right side of the page and the slot array is on the other end</p>
                  <Subheader title="Managing Variable-Size Data"/>
                  <p>What happens when you deleted a cell? </p>
                  <Bullet bullets={['Cell is marked as deleted instead of shifting other cells to reoccupy space',"In-memory availability list is updated to represent this","Next insert finds the best fit, which is a segment that leaves the remainder the smallest","If a page dosen't contain a cell that is big enough,defragmentation occurs","If after defragmentation there is not enought space,we would have to create an overflow page"]}/>
                  <Chapter title="Chapter 4. Implementing BTrees"/>
                  <p> This chapter will contain how to establish relationships between keys and pointers and how to implement headers and links between pages. Also a bit on binary searching from root to leaf nodes</p>
                  <Subheader title="Page Header"/>
                  <p>What is a page header? What is its purpose and what does it contain?</p>
                  <Bullet bullets={['The page header contains the metadata of the page which can be used for navigation,maintenance, and optimizations',"Magic Number: Pages contain a magic number, a multibyte block, a constant value that specifies a page,kind, and version","Sibling Links : Pointers to the left and right sibling pages. Note : This can add complexity when dealing with splits and merge"]}/> 
                  <Subheader title="Compression"/>
                  <p>Storing raw data induces significant overhead. Larger compression ratios decrease data size allowing more data to be fetched, but also require more Ram and CPU. </p>
                  <Subheader title="Vacuum and Maintenance"/>
                  <p>Operations happen in parallel with queries to maintain storage integrity,reclaim space, and reduce overhead</p>
                  <p>Slotted pages requires maintenance to be performed on pages to maintain good shape</p>                  
                  <p>Rewrites must occur when fragmentation occurs due to updates or deletes. This is called page defragmentation</p>
                  <Chapter title="Chapter 5. Transaction Processing and Recovery"/>
                  <p>Done with storage structures. Time to talk about higher level components</p>
                  <p>Transactions : indivisible logical unit of work in a DBMS allowing you to represent multiple operations in a single step.These transactions have to preserve ACID</p>
                  <Bullet bullets={["Atomicity : All operations in the transaction are done successfully or none of them do. Either commit fully to it or do nothing at all","Consistency : Database transactions should bring the database from a valid state to another valid state.",
                "Concurrent transactions should be able to run without interference, as if there were no other transactions being done","Durability : Once a trasaction is commited, outages should not affect the persited data"]}/>
                  <Subheader title="Buffer Management"/>
                  <p>DBMS use both memory and disk. Pages are cached in memory and acts as a virtual disk. Uncached pages are paged if they are requested from disk</p>
                  <p>This cache is very similar to OS caches, in which data is cached in hardware caches until they are evicted. When the data/page is evicted,if their is a dirty flag, the new page will be persisted and be in sync with the database</p>
                  <p>What happends if your system crashes? How would you recover pages in memory that have not been flushed?</p>
                  <Bullet bullets={['We use a write-ahead log(WAL), which stores a log of all operations',"This allows for durability even if the persisted data is not up to date as lost memory can be reconstrcuted"]}/>

                  <Subheader title="Concurrency Control" />
                  Transaction managers and lock managers work together to handle conccurency control. There are three general techniques to handling concurrecy:
                  <Bullet bullets={['Optimistic conccurency control(OCC):Allow for conccurent transactions to be combined if serializable. Else only accept one', "Multiversion Concurrency Control(MVCC) : Multiple time stamped versions of the records to be allowed", "Pessimistic concurrency control: Allow lock and nonlocking approaches, can result in deadlocks, where multiple transactions are waiting for each other "]}/>
                  <p>Schedule : A list of operations required to execute a set of transactions from the database</p>
                  <p>Schedules are serial when transactions are completed independently without any interleaving. However, running transactions one by one is highly inefficient. Thus we need conccurent transactions.</p> 
                  <Chapter title="Chapter 7. Log-Structured Storage"/>
                  <p>LSM is an immutable, append only storage structure. Optimal for write performance</p>
                   <p>Not going over the rest</p>
                   <Chapter title="Chapter 8. Introduction and Overview"/>
                   <Subheader title="Concurrent Execution"/>
                   <p>Conccurent programs are have properties similar to a distributed system. Threads read and write to shared states.</p>
                   <p>The main difference is that in concurrent computing, we are dealing with shared memory, while in a distributed system, we are dealing with states in sepereate machines and communicating through messages.</p>
                    <Subheader title="Fallacies of Distributed Computing"/>
                    <p>Latency and proccessing should be considered when dealing with remote machines</p>
                    <p>Process-level Queues and use-cases</p>
                    <Bullet bullets={['Decoupling : Processsing is done asycnhronously. Happend independently',
                    "Pipelining : Requests are handled independently"]}/>
                  <Subheader title="Failure Models"/>
                  <p> A failure model decribes exactly how  processes can crash in a distributed system, and how algorithms are developed using these assumptions</p>
                  <p> Crash Fault : Stopping execution of the process and stops sending message to other processes</p>
                 
                 <p> Ommision Fault : Process skips some steps,not able to execute steps,execution is not visible to other participants, or it can't receive messages to and from participants</p>
                  <Chapter title="Chapter 9. Failure Detection"/>
                  <p>Failures must be detected in a timely manner</p>
                  <p>Faulure detector is a subsystem within a distributed system to indentify dead or unreachable processes. Accuracy and efficiency trade offs in these types of algorithms.</p>
                  <Subheader title="Heartbeats and Pings" />
                  <p>Pinging processes, checking if they respond and respond within a specified time period. Heartbeats are different, where the process itself notifies its peers</p>
                  <p>Many different other algorithms work but I will not go over them</p>
                  <Chapter title="Chapter 10. Leader Election"/>  
                  <p>Preventing synchronization overhead,a leader process is introduced, and responsible for executing or coordinating steps of a distributed algorithm</p>
                  <p>In this chapter we dicuss different algorithms for leader elections</p>
                  <Subheader title="Bully Algorithm"/>
                  <p>Uses process ranks to determine new leader(Highest rank gets the leader role). This one is very simple.</p>
                  <p>Can cause split brain, where processes in a distributed system can be split into two or more functioning leaders</p>
                  <Subheader title="Next-In-Line Failover"/>
                  <p> Elected leaders provides a list of failover nodes. If any of the failover nodes are alive, the one with the highest rank is elected leader</p>
                  <Chapter title="Chapter 11. Replication and Consistency"/>
                  <p> Consistency models explain the behavior of the system in the presence of multiple copies of the data</p>
                  <p>Fault tolerance refers to a property of a distributed system such that when a component fails,the system can continue to operate</p>
                  <p>Thus redundancy is needed, so when one compoenent fails, the others can act as failover</p>
                  <p>Data replication is a way of doing this, but maintaining multiple copies of the data within the system. However this introduces new problems, as copies need to be updated accordingly</p>
                  <Subheader title="Achieving Availability"/> 
                  <p>System availability is an extremely important property. Lack of availablity can mean losing potential customers or money.</p>
                  <Subheader title="Infamous CAP"/>
                  <p>Availability measures the ability of the system to respond to clients on every request</p>
                  <p>Consistency ensures that all clients see the same data at once. In order for a write to succeed it must be propogated throughout other nodes</p>
                  <p>Partition tolerance ensures the system continues to run even with system failure. Communication break within the system</p>
                </div>
            </div>
   </Layout>
  )
}
