import Layout from "@/components/layout"
import Chapter from "@/components/blogcomponents/chapter"
import Subheader from "@/components/blogcomponents/subheader"
import Bullet from "@/components/blogcomponents/bulletpoints"
import { SlowBuffer } from "buffer"



export default function TCPIPnotes() {
  return (
    <Layout> 
          <div className='w-3/5 mx-auto'>
          <div className="text-center mt-14">
                <h1 className="font-bold text-3xl inline-block border-b-2 border-purple  ">High Performance Browser Networking</h1>
                <Chapter title="1 Primer on Latency and Bandwidth"/>
                <Subheader title="Speed Is a Feature"/>
                <p>Speed is a feature.Faster sites lead to better user engagement,user retention, and higher conversions</p>
                <p>Latency : Time from the source sending a packet to the destination receiving it </p>
                <p>Bandwidth : Maximum throughput of a logical or physical communication path</p>
                <Subheader title="The Many Components of Latency"/>
                <p>Propagation delay : Amount of time taken for a message to travel from the sender to receiver</p>
                <p>Transmission delay : Amount of time taken to push all the packets into the link</p>
                <p>Processing delay : Amount of time required to process the packet header,check for errors, and determine packets destination</p>
                <p>Queuing Delay : Amount of time the packet is waiting in the queue until it can be processed</p>
                <p>Total latency is the sum of all these delays</p>
                <Subheader title="Last-Mile Latency"/>
                <p>Typically the last few steps that introduce the most significant latency. e</p>
                <Chapter title="2 Building Blocks of TCP"/>
                <Subheader title="Three Way Handshake"/>

                <p>Before application data is sent, a TCP connection needs to be made. This is called the three way handshake</p>
                <p>SYN : Client picks a random sequence of numbers and sends and SYN packet</p>
                <p>SYN ACK : Server increments this sequence by 1 and sends its own sequence of numbers back</p>
                <p>ACK : Clients increments both sequences, and completes the handshake by dispatching the final packet</p>
                
                <Subheader title="Congestion Avoidance and Control
"/>
<p>Congestion control is a crucial aspect of network management that involves monitoring and regulating the flow of data in a network to prevent congestion, which occurs when the demand for network resources exceeds its capacity.</p>
<p>Many mechanisms were implemented in TCP to govern the rate with which the data can be sent in both directions</p>
<p>Flow Control</p>
<p>Mechanism to prevent the sender overwhelming the receiver with data it may not be able to process</p>
<p>Each side of the TCP connection advertises its own receive window, which communicates the size of available buffer space to hold the incoming data</p>
<p>If this window reaches zero, no more data should be sent until the esisting data in the buffer has been cleared by the application layer </p> 
<p>Throughout the lifecycle of the TCP connection, each ACK packet carries the latest rwnd value for each side</p> 
<p>Slow Start</p>
<p>Flow control prevented the sender from overwhelming the receiver but didn't precent either side from overwhelming the underlying network. The available bandwidth needs to be estimated and adapted as conditions are changing within the network</p>
<p>Slow Start is a mechanism employed by the Transmission Control Protocol (TCP) to dynamically control the amount of data that can be in transit in the network.</p> 
<p>Introduces the congestion window size variable, which is created per tcp connection. This variable is maintained by the server </p>
<p>The only way to measure available capacity in the network is to estimate by sending over packets.</p>
<p>Congestion Avoidance</p>
<p>Packet loss as a feedback mechanism. Assumes packet loss implies congested link or router, thus we must adjust window size</p>
<p>Congestion avoidence specifies its own algorithms for how to grow the window to minimize further loss</p>
<p>Bandwidth-Delay Product</p>
<p>
The bandwidth-delay product (BDP) is a network parameter that represents the amount of data that can be in transit in the network at any given time. It is calculated by multiplying the available bandwidth of a network link by the round-trip time (RTT) of the connection</p>
<p>Head-of-Line Blocking</p>
<p>Packet loss causes subsequent packets to stall in the TCP buffer and until the lost packet is retransmitted.This is called HOL blocking</p>
<p>Since this is done at the TCP layer, the application doesn't need to worry about dealing with packet reassembly.However, this introduces unpredictable latency variations within applications, refered to as jitters</p>
<Chapter title="3 Building Blocks of UDP"/>
<p>Datagrams: A self-contained, independent entity of data carrying sufficient information to be routed from the source to the destination nodes without reliance on earlier exchanges between the nodes and the transporting network.</p>
<p>Null Protocol Services</p>
<p>The IP layer is solely responsible for routing packets, but dosen't guarantee about message delivery or notification failures.</p>
<p>Compared to TCP, UDP dosen't guarantee message delivery,order of delivery,state tracking,congestion control</p>
<p>NAT (Network Address Translation) and UDP (User Datagram Protocol) can pose challenges when used together due to the stateless and connectionless nature of UDP</p>
<p>Outbound traffic is fine, but inbound traffic requires an entry in the translation table.Translators will need this mapping.</p>
<Chapter title="4 : TLS"/>
<p>Encryption, Authentication, and Integrity</p>
<p>TLS protocol was designed to add three essential services to all applications running above it </p>
<p>Encryption : A mechanism to obfuscate what is sent from one host to another.</p>
<p>Authentication : A mechanism to verify the validity of provided identification material.</p>
<p>Integrity : A mechanism to detect message tampering and forgery.</p>
<Subheader title="TLS Handshake"/>
<p>Requires two full round trips before application data starts to send.</p>
<p>However, there are a few methods of optimization</p>
<p>False Start : Client to start transmitting encrypted application data before the handshake is completed</p>
<p> Abbreviated Handshake : Reusing previously negotiated parameters for the secure session</p>
<Chapter title="5 : Ubiquitous Connectivity"/>
<Subheader title="Types of Wireless Networks"/>
<p>PAN : Within reach of a person</p>
<p>LAN : Within a building or campus</p>
<p>MAN : Within a city</p>
<p>WAN : Worldwide</p>
<Subheader title="Performance Fundamentals of Wireless Networks"/>
<p>Regardless of wireless technology, all communication methods have meximum channel capacity</p>
<p>Shannon's Law, formulated by Claude Shannon, is a fundamental theorem in information theory. It states that the channel capacity, or the maximum rate at which information can be reliably transmitted over a communication channel, is directly proportional to the bandwidth (frequency range) of the channel and the logarithm of the signal-to-noise ratio. </p>
<p>Increasing the assigned frequency range, such as doubling the bandwidth from 20 MHz to 40 MHz, can result in a proportional increase in the channel data rate.</p>
<p>While wider bandwidth generally allows for higher data rates, there are trade-offs. Wider channels may be more susceptible to interference and may have regulatory limitations. </p>
<Subheader title="Signal Power"/>
<p>SNR is a critical factor in wireless communication. It compares the level of the desired signal to the level of background noise and interference. A higher SNR indicates a better quality signal. </p>
<p>Wireless communication takes place over a shared medium, and other devices may introduce unwanted interference.</p>
<p>Cell-breathing is described as a condition where the coverage area (distance of the signal) expands and shrinks based on cumulative noise and interference levels</p>
<Chapter title="9 : Brief History of HTTP"/>
<Subheader title="HTTP 0.9: The One-Line Protocol"/>
<p>Simple, client/server request response protocol</p>
<p>Desgined to only transfer html documents</p>
<Subheader title="HTTP/1.0: Rapid Growth and Informational RFC"/>
<p>Web browser was introduced, quick growth of consumer oriented</p>
<p>Key protocol changes : Request Header fields,Response  status,Response Header fields,Response object is not  limited to hypertext</p>
<Subheader title="HTTP/1.1: Internet Standard"/>
<p>Two response objects, keep alive connection</p>
<Subheader title="HTTP/2: Improving Transport Performance"/>
<p>Lower latency and high throughput</p>
<Chapter title="Primer on Web Performance"/>
<Subheader title="Hypertext, Web Pages, and Web Applications"/>
<p>Hypertext document : Plain text version, with support for hyperlinks</p>
<p>Web Page : HTML working group, support hyperemedia resources</p>
<p>Web application : Interactive web applications</p>
<Subheader title="Anatomy of a Modern Web Application"/>
<p>Contains HTML, images,javascript,css, and other files</p>
<Subheader title="Performance Pillars: Computing, Rendering, Networking"/>
<p>Latency is the bottleneck. Many of the HTTP data flows are small amounts of data flow. The network roundtrip time is the limiting factor.</p>
<Chapter title="11 : HTTP/1.X"/>
<p>Improving the performance of HTTP was the ultimate goal, thus 1.1 introduced a few optimizations</p>
<p>Persistenct connections : Allow connection reuse</p>
<p>Chunked transfer, Request pipelining,Byte serving, etc</p>
<Subheader title="Benefits of Keepalive Connections"/>
<p>HTTP/1.1 introduced the concept of persistent connections, allowing multiple requests and responses to be sent over the same TCP connection. However, the lack of true multiplexing meant that the requests and responses had to be processed in a sequential order. If one resource was slow to load, it could block the loading of subsequent resources.
</p>
<Subheader title="Using Multiple TCP Connections"/>
<p>6 connections per host, but there are costs to opening up multiple TCP connections. Sockets consuming resources on the client ,server and intermediaries. Competition for shared bandwidth between parallel TCP streams</p>
<Subheader title="Domain Sharding"/>
<p>Why limit ourselves to only one host? Serving resources from multiple subdomains to achieve higher parallelism</p>
<p>Often overused, resulting in tens of underutilized TCP streams, which can slow down performance</p>
<p>Each HTTP request will carry an additional few 500-800 bytes of metadata</p>
<p>Not uncommon to see http overhead exceed paylaod</p>
<Subheader title="Concatenation and Spriting"/>
<p>Concatenation : Multiple files are combined into a single resource</p>
<p>Spriting : Images are combined into a larger composite image</p>
<Chapter title="12 : HTTP/2"/>
<p>Primary goal of reducing latency by redoing a lot of what 1.1 was trying to implement</p>
<Subheader title="Binary Framing Layer"/>
<p>Defined how http messages are encapsulated and transformmed between the client and server</p>
<p>Split into smaller messages and frames, each encoded in binary format</p>
<p>To understand this new implementation, the book defines a few terms</p>
<p>Stream : Bidirection flow of bytes within an established connection</p>
<p>Message : A complete sequence of frames that map to a logical request or response message</p>
<p>Frame : Smallest unit of communication in HTTP/2, each containing frame header, which identifies which stream the frame belongs to.</p>
<p>All communication is performed over a single TCP connection that can carry any number of streams</p>
<p>Streams have a unique indentifier and optional priority information that is used to carry bidirectional messages</p>
<p>Each message is a logical HTTP message, which can contain one or multiple frames</p>
<p>Frame is the smallest unit of communucation that carries a specific types of data</p>
<Subheader title="Request and Response Multiplexing"/>
<p>1.x introduced parallelism by using multipl TCP connections. The binary framing layer in 2 enbales full request and response multiplexing by allowing the client and server to break down an HTTP message into independent frames</p>
<p>This allows the server to break down an HTTP message into frames and interleave them, and then reasemble them on the other end</p>
<Subheader title="Stream Prioritization
"/>
<p>Frames from multiple streams to be multiplexed, in the order in which the frames are interleaved and delivered both by the client and server becomes a critical performance consideration</p>
<p>Stream are assigned priorty levels, which helps the server understand the importance of different resources</p>
<Subheader title="Flow Control
"/>
<p>Overwhelming the receiver with data it may not want or be able to process</p>
<p>Flow control mechamnims are applicaed independently to each stream. This means that the sender can apply flow control constrains on a per-stream basis, perventing any single stream from overwhelming the recipient </p>
<Subheader title="Server Push"/>
<p>Server can send multiple responses for a single client request. Server already knows ahead of time what it needs</p>
<Subheader title="Header Compression
"/>
<p>1.x, headers are always sent as plain text and adds additional overhead</p>
<p>To reduce overhead, 2 compresses request and response header metadata</p>
 

            </div>
            </div>
   </Layout>
  )
}
