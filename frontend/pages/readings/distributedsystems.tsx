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
                <h2>Summarizing Grokking algorithms so I can pass these interviews</h2>
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
                <Chapter title="Chapter 5 APIs"/>
                <p>Servers use an adapter to translate messages received from the communication link to interface calls implemented by its business logic</p>
                <p>Direct communication : Both processes are up and running for the communication to succeed.</p> 
                <p>Indirect communication : </p>             

                </div>  
            </div>
   </Layout>
  )
}
