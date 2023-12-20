import Layout from "@/components/layout"
import Chapter from "@/components/blogcomponents/chapter"
import Subheader from "@/components/blogcomponents/subheader"
import Bullet from "@/components/blogcomponents/bulletpoints"



export default function DistributedSystems() {
  return (
    <Layout> 
          <div className='w-3/5 mx-auto'>
          <div className="text-center mt-14">
                <h1 className="font-bold text-3xl inline-block border-b-2 border-purple  ">Grokking Algorithms</h1>
                <h2>The book "Understanding Distributed Systems" by Roberto Vitillo</h2>
            </div>  
            <div>
                <Chapter title="Introduction"/>
                <p>Book tackles fundamental challenges of introduced when designing,building, and operating distributed systems</p>
                <Subheader title="1.1 Communication"/>
                <p>Nodes need to communicate with each other over the network. Need to understand how the network stack works</p>
                <Subheader title="1.2 Coordination"/>
                <p>When trying to synchronize nodes to work towards a shared objective, failures get in the way</p>
                <p>Two generals problem is the analogy used in the book</p>
                <Subheader title="1.3 Scalability"/>
                <p>Describes how efficiently it can handle load. Many ways of measuring load such as the number of concurrent users or the ratio or writes to reads</p>
                <p>Performance is measured in terms of throughput and response time</p>
                <Subheader title="1.4 Resiliency"/>
                <p>Each nodes has a probability of failing. One node failure can lead to other node failures</p>
                <p>Availability describes the percentage of time the</p>
                <Subheader title="1.5 Maintainability"/>
                <p>Majority of the cost of software is spent after its initial development</p>
                <Subheader title="1.6 Anatomy of a distributed system"/>
                <p> Distributed systems is a group of software processes that communicate via IPC mechanisms like HTTP</p>
                <p>Outbound adapters grant business logic to external services</p>
                <Chapter title="Chapter 2 Reliable Links"/>
                <p>Two components for communicating between nodes : A way to address nodes, and a mechanism to route packets</p>
                <p>IP/TCP. Addressing is handled by the IP protocol.IP header metadata needed to route datagrams from node a to node b. TCP enables datagrams are sent without gaps,duplication or corruption</p>
                <Subheader title="2.1 Reliability"/>
                <p>TCP partitions byte streams into segments, which are numbered, allowing the receiver to detect holes. When holes are detected, segments are retransmitted. To ensure data has not been corrupted, we use a checksum</p>
                <Subheader title="2.2 Connection lifecycle"/>
                <p>Connections need to be opened before any application data is transmitted. Operating system manages the connection through a socket, allowing state tracking during the entire connection</p>
                <p>TCP three way handshake</p>
                <Subheader title="2.3 Flow control"/>
                <p>Backoff mechanism that TCP implements to prevent the sender from overwhelming the receiver. THis is done by allowing the reciever to communicate the size of the buffer to the sender whenever a segment is acknoledged</p>
                <Subheader title="2.4 Congestion control"/>
                <p>Prevents flooding the underlying network, done by the sender maintaining a congestion window, which is the maximum number of bytes that can be in flight</p>
                <p>The reciever adjusts this window by sending back acknoledgements that packets have been lost</p>
                <Chapter title="Chapter 3 Secure links"/>
                <p>An extra protocol is needed to secure transfer of bytes from one process over the network</p>
                <p>TLS runs on top of TCP and encrypts communication channels</p>
                <Subheader title="3.1 Encryption"/>
                <p>Data on the channel can be read only by the communicating procceses</p>
                <p>TLS connection is opened by the client and server sharing an encryption secret</p>
                <Subheader title="3.2 Authentication"/>
                <p>Authentication is also needed to ensure the server who it claims to be</p>
                <p>Done using certificates</p>
                <Subheader title="3.3 Integrity"/>
                <p>Tampering with communication data is also common. This is solved by the end server needing to recompute the digest of the message</p>
                <Chapter title="Coordination"/>
                <Chapter title="Chapter 6 System models Introduction  "/>
                <p>System models encodes expectations about the behavior of processes,communication links, and timing </p>
                <Chapter title="Chapter 7 Failure Detection"/>
                <p>Many things can go wrong when a client sends a request to a server. Best case it that the request concludes a response</p>
                <p>However, a process dosen't need to wait to send a message to find out that the destination is not reachable, insead ping a server</p>
                <p>Pings determine if a server is still available, and the process expects a response within a specific time frame</p>
                <p>Hearbeats are messages that a process periodically sends to another. If the server is down, it will trigger a timeout and considers the process unavailable</p>
                <p>If the process comes back up, then the heartbeat will catch a response and the server is marked alive</p>
                <Chapter title="Chapter 8 Time"/>
                <p>In a distributed system, time is an essential concept. No shared global clock that all processes agree on that can be used to order operations.</p>
                <Subheader title="8.1 Physical clocks"/>
                <p>Different types of Physical clocks(quartz and atomic). These can be synchronized by applying the Network time protocol, which can cause problems with timestamps</p>
                <p>There are also monotonic clocks that are dependent on the operating system, but they are also machine dependent, thus synchronization dosen't work</p>
                <p>Logical clocks believe in relationships between events.</p>
                <Subheader title="8.2 Logical clocks"/>
                <p>Time in terms of logical operations. The simplest possible form is a counter that increments when an operation is executed</p>
                <p>Lamport clock : Messages between processes create synchronization points. The idea is that the maximum of the time stamps is the one that is kept</p>
                <Subheader title="8.3 Vector clocks"/>
                <p>Array of counters, one for each process in the system. Each process has its own copy</p>
                <p>Initially, all the clocks are set to zero -> Every time, an Internal event occurs in a process, the value of the processes’s logical clock in the vector is incremented by 1 -> every time a process sends a message, the value of the processes’s logical clock in the vector is incremented by 1.</p>
                <Chapter title="Chapter 9 Leader election"/>
                <p>Leaders are elected among a set of candidate processes. This algorithm needs to guarentee that there is at most one leader at any given time, and an election eventually completes even in presence of failures</p>
                <Subheader title="9.1 Raft leader election"/>
                <p>Three types of state machines in this raft algorithm</p>
                <Bullet bullets={["Follower : Process recognizes another one as the leader", "Candidate : Process starts a new election proposing itself as a leader" , "Leader : Process is the leader"]}/>
                <p>What triggers an election ? Leaders must send heartbeats. If a follower dosen't receiver a heartbeat within a certain period, a timeout fires and the leader is presumed dead </p>
                <p>Followers become candidates and an election fires. Candidate wins the election if the majority of processes in the system vote for it. The new leader then starts sending heartbeats</p>

<Chapter title="Chapter 10 Replication"/>
<p>Replication is important for increase of availability and also to increase scalability and performance</p>
<p>Implementing replication is challenging because we need to keep all replication consistent</p>
<p>The raft protocol states that a leader must broadcast operations that change its state to other processes.</p>
<Subheader title="10.1 State machine replication"/>
<p>Leader contains a local log, which stores the sequence of oepations that alter that state into a local log</p>
<p>Replication of the log is what allows the state to be kept in sync across processes</p>
<p>When a leader wants to apply an operation to its local state, it appends a new entry to the log, and sends an appendentry reqeuest to each follwoer with the new entry to be added</p>
<p>If the new entry is acknoledged, the entry is commited and executes the operation on its local state.</p>
<Subheader title="10.3.1 Strong consistency"/>
<p>Clients send writes and reads to the leader. Linearlizabilty is a specific form of strong consistency that provides a global ordering of opertaions </p>
<Subheader title="10.3.2 Sequential consistency"/>
<p>Followers are allowed to handle read requests, but will not always be fully updated</p>
<Subheader title="10.3.3 Eventual consistency"/>
<p>Eventually all followers will converge to the final state if writes stop happening</p>
<p>Querying different nodes results in different outcomes</p>
<Subheader title="10.3.4 The CAP theorem"/>
<p>Network partitions happen. How do you deal with them ? </p>
<p>Clients may no longer be able to reach the leader, thus the system has two choices, allow clients to query followers that are reachable, or fail reads that can't reach the leader</p>
<p>Typically, the stronger the consistency is the higher the latency</p>
<Subheader title="10.4 Chain replication"/>
<p>Chain replication, processes are arranged in a chain, where the leftmost process is referred to as the chain's head, while the rightmost one is the chain's tail</p>
<p>Clients right exculsively to the head, which updates it local state and forwards the update to the next process, until it reaches the tail</p>
<p>Client reads can be handled by any node in the chain. Any node can become the head.</p> 
<Chapter title="Chapter 11 Coordination avoidance"/>
<Subheader title="11.1 Broadcast protocols"/>
<p>Reliable broadcast : Each process retransmit the message to the rest of the group the first time it is delivered.</p>
<p>Gossip protocol : Number of messages can be reduced by sending to only a subset of processes</p>
<p>Total order broadvase is a reliable broadcast abstraction that builds upon the guarenteses offered by the reliable protocol</p>
<Subheader title="11.3 Dynamo-style data stores"/>
 <p>Every replicat can accept write and read requests. When a client writes, it sends the request to all N replicas in parallel but waits for only W replicas for acknoledgement</p>
  <p>This is similar with reads, where we need R acknoledgements. </p>
  <Chapter title="Chapter 12 Transactions"/>
  <p>Single data store is simple. Distributed, not so much</p>
  <p>Need distributed transactions, which is a lot more challenging to implement</p>
  <Subheader title="12.1 ACID"/>
  <p>Transactions are groups of operations for which the database guarantees a set of properties known as ACID</p>
  <Subheader title="12.2 Isolation"/>
  <p>Running transactions serially would be extremely inefficient</p>
  <p>Serializability is the only isolation level that isolates against all possible race conditions</p>
<Subheader title="12.3 Atomicity"/>
<p>Write ahead logs must be persisted on disk before applying changes</p>
<p>However, we need to ensure that all transactions succeed on all replications</p>
<p> Two phase commit does this which splits into two phases, prepare and commit. Coordinator orchestrates the actions of the other processes called participants</p>
<p>Two round trips are made, the prepare message, and then the commit message</p>
<Chapter title="Chapter 13 Asynchronous transactions"/>
<p>2PC is a blocking protocol. Aynschrounous transactions give up the consistency of 2PC for more availability</p>
<Subheader title="13.1 Outbox pattern"/>
<p>The "Outbox Pattern" is a design pattern used in distributed systems to achieve reliable and consistent event-driven communication between microservices</p>
<p className="font-bold">Scalability</p>
<p>As the number of requests grow, the application server will require more resources.</p>
<p>Simpleest and quickest way to increase the capacity is to scale up the machine hosting the application</p>
<p>Increase threads running simultaneously by provisoining more processors or cores, in crease disk throughput by adding more disks, increase network throughput by provisioning more NICs, reduce disk access latency</p>
<Chapter title="Chapter 14 HTTP caching"/>
<p>GET request for a resource that hasen't been accessed before. The local cache intercepts the request and it can't find it, thus needs to fetch from the orgin server</p>
<p>Cache control header defines for how long to cache the resource (TTL)</p>
<Subheader title="14.1 Reverse proxies"/>
<p>Server-side proxy that intercepts all communication with clients. A typical use case is a cache to store static resources which will be returned by the server</p>
<p>Also do a lot more, such as authentication.</p>
<Chapter title="Chapter 15 Content delivery networks"/>
<p>When a CDN server receives a requets, it checks whether the requested resource is cached locally, else it goes to origin server</p>
<Subheader title="15.1 Overlay network"/>
<p>Reduces rroudn trip time of network calls for clients and hte load for the origin server</p>
<Subheader title="15.2 Caching"/>
<p>CDNs can have multiple caching layers. The higher the number of edge clusters, the more geographically disperesed clients they can serve.</p>
<Chapter title="Chapter 16 Partitioning"/>
<p>Application data grows enough so that the volume will become large enough that if can't fit on a single machine</p>
<p>Gate way service is needed to route requests. Data acorss partitions must be pulled from multiple partitions and aggregated</p>
<p></p>
                </div>  
            </div>
   </Layout>
  )
}
