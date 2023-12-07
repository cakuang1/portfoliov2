import Layout from "@/components/layout"
import Chapter from "@/components/blogcomponents/chapter"
import Subheader from "@/components/blogcomponents/subheader"
import Bullet from "@/components/blogcomponents/bulletpoints"




export default function GrokkingAlgorithms() {
  return (
    <Layout> 
          <div className='w-3/5 mx-auto'>
          <div className="text-center mt-14">
                <h1 className="font-bold text-3xl inline-block border-b-2 border-purple  ">Operating Systems:Three Easy Pieces</h1>
                <h2>Chapter by Chapter notes of the book OSTEP</h2>
            </div>
            <div>
                <p>Skipping Introduction and Diaglogues</p>
                <Chapter title="Virtualization"/>
                <Subheader title="4 : The Abstraction: The Process"/>
                <p>Programs are lifeless, Processes are live. A process is a running instance of a program. You have multiple processes running on a machine concurrently</p>
                <p>Whats the problem? How do you provide the illusion of multiple CPUs?</p>
                <p>This is solved using something called Virtualization, in which the CPU shares its resources.</p>
                <p>Policies: Algorithms for making decisions within the OS. For example, a scheduling policy is used to make decisions using historical information</p>
                <p>4.2 Process API</p>
                <p>Create : Operating system must include some method to create a process</p>
                <p>Destroy : Also provide an interface to destroy</p>
                <p>Wait :  Wait for a process</p>
                <p>Status : Status information Ex. Time running or what state its in</p>
                <p>4.3 Process Creation: A Little More Detail</p>
                <p>How does a program transform into a process? </p>
                <Bullet bullets={["Load code or static data into memory into the addresss space of the process","Memory is allocated for the stack for local variables and parameters, and the Heap, for dynamically allocated memory"]}/>
                <p>4.4 Process States</p>
                <p>Three States</p>
                <p>Running :Running state,Executing instructions</p>
                <p>Ready : Process is ready to execute, but the OS has not given it time</p>
                <p>Blocked :Blocked state, Dependent on other actions like I/O</p>
                <Subheader title="5 : Interlude: Process API"/>
                <p>5.1 The fork() System Call</p>
                <p>The Process API in C allows you to explicitly create multiple processes using the fork() method</p>
                <p>The fork() method creates a child process that has its own memory space, but starts executing from where it was created(called in the parent process).</p>
                <p>5.2 The wait() System Call</p>
                <p>How can you make the output deterministic? How can we ensure the parent finishes after the child?</p>
                <p>The wait() system call</p>
                <p>5.3 Finally, The exec() System Call</p>
                <p>What about when you want to call a different program instead of copying the same process using fork?</p>
                <p>Use the exec() from a child component overwrites the current code segment along with other memory.</p>
                <p> A superuser can control all processes (and indeed do many other
things); this role should be assumed infrequently and with caution
for security reasons.</p>
<Subheader title="6 :Mechanism: Limited Direct Execution"/>
<p>Crux : How to efficiently virtualize the CPU with Control</p>
<p>6.1 Basic Technique: Limited Direct Execution</p>
<p>Direct execution : The idea of loading a program into memory and running the process all  the way.</p>
<p>Gives rise to problems : How does the OS maintain control? How does time sharing work here?</p>
<p>6.2 Problem #1: Restricted Operations</p>
<p>User mode : Restricted in what it can do. EX . I/O would kill the process</p>
<p>Kernel Mode : Do whatever it likes.</p>
<p>Now the question remains, what should a user process do when it wishes to perform a priveleged operation ?</p>
<p>OSs allow user processes to perform system calls by default. This includes read/writing to files, creating/destroing processes,allocating memory</p>
<p>Traps are special instructions that a process raises when it needs to do a system call. Once the system call is finished, the OS returns to the running process</p>
<p>6.3 Problem #2: Switching Between Processes</p>
<p>How can the operating system regain control of the CPU so that it can
switch between processes?</p>
<p>A Cooperative Approach: Wait For System Calls : When a process makes a system call, the process gives up control back to the OS</p>
<p>A Non-Cooperative Approach: The OS Takes Control : A timer device can be programmed to interrupt a process and regain control forcefully</p>
<p>To save the context of the currently-running process, the OS will execute some low-level assembly code to save the general purpose registers, PC, and the kernel stack pointer of the currently-running process,
and then restore said registers, PC, and switch to the kernel stack for the
soon-to-be-executing process. </p>
<Subheader title="7 : Scheduling: Introduction"/>
<p>THE CRUX: HOW TO DEVELOP SCHEDULING POLICY
How should we develop a basic framework for thinking about
scheduling policies? What are the key assumptions? What metrics are
important? What basic approaches have been used in the earliest of computer systems?</p>
<p>7.1 Workload Assumptions</p>
<p>Initial Assumptions : 1. Each job runs for the same amount of time.
2. All jobs arrive at the same time.
3. Once started, each job runs to completion.
4. All jobs only use the CPU (i.e., they perform no I/O)
5. The run-time of each job is known.</p>
<p>7.2 Scheduling Metrics</p>
<p>Turn around time is defined as the time when the job completes minus the time the job arrived in the system</p>
<p>7.3 First In, First Out (FIFO)</p>
<p>First Algorithm is FIFO. Simple, but bottlenecked by a large job. Not a good idea</p>
<p>7.4 Shortest Job First (SJF)</p>
<p>If we relax assumption 2, we might get a large job that comes first, which follows the same issue. How do we address this issue?</p>
<p>7.5 Shortest Time-to-Completion First (STCF)</p>
<p>Prempt long jobs to short jobs.</p>
<p>7.6 A New Metric: Response Time</p>
<p>We define response time as the time from when the job arrives in a
system to the first time it is scheduled</p>
<p>How can we build a scheduler sensitive to response  time</p>
<p>7.7 Round Robin</p>
<p>Round Robin scheduling RR runs a job for a
time slice (sometimes called a scheduling quantum) and then switches
to the next job in the run queue.</p>
<Subheader title="8 : Scheduling:
The Multi-Level Feedback Queue"/>
<p>THE CRUX:
HOW TO SCHEDULE WITHOUT PERFECT KNOWLEDGE?
How can we design a scheduler that both minimizes response time for
interactive jobs while also minimizing turnaround time without a priori
knowledge of job length?</p>
<p>Basic Algorithm : Distinct queues,measuring priority level</p>
<p>

• Rule 1: If Priority(A) > Priority(B), A runs (B doesn’t).
• Rule 2: If Priority(A) = Priority(B), A & B run in round-robin fashion using the time slice (quantum length) of the given queue.
• Rule 3: When a job enters the system, it is placed at the highest
priority (the topmost queue).
• Rule 4: Once a job uses up its time allotment at a given level (regardless of how many times it has given up the CPU), its priority is
reduced (i.e., it moves down one queue).
• Rule 5: After some time </p>

<Subheader title="10 Multiprocessor Scheduling (Advanced)"/>
<p>Newer models of CPUs now contain multiple cores packed into a single chip. How can you rewrite your application to run in parallel, perhaps using threads?</p>
<p>CRUX: HOW TO SCHEDULE JOBS ON MULTIPLE CPUS
How should the OS schedule jobs on multiple CPUs? What new problems arise? Do the same old techniques work, or are new ideas required?</p>
<p>10.1 Background: Multiprocessor Architecture</p>
<p>Hardware caches are based on the notion of locality. Two types. Spatial and Temporal locality</p>
<p>With multiple CPUs, you will have multiple caches, and since a process runs on multiple CPUs, the process might not see the data cached because it was initially cached on another CPU. Thus, the CPU has the wrong information</p>
<p>This is called cache coherence. Bus snooping, is a away for caches to recognize changes to memory, and invalidate or update these cache items</p>
<p>10.2 Don’t Forget Synchronization</p>
<p>Concepts of locks are introduced here,but is further explained in the concurrency section</p>
<p>10.3 One Final Issue: Cache Affinity</p>
<p>Cache Affinity  : The notion that processes that have run on CPUs should favor to be run again on the same CPU. This idea is simple, as the cache has already cached many of the items you would need from the process.</p>
<p>10.4 Single-Queue Scheduling</p>
<p>All jobs that need to be scheduled into a single queue</p>
<p>Not scale well, and does not preserve cache affinity</p>
<p>10.5 Multi-Queue Scheduling</p>
<p>One queue for each processor, and processes stay on the same queue when scheduled(cache affinity)</p>
<p>New issue : Load imbalancing. Can lead to idle processors</p>
<p>CRUX: HOW TO DEAL WITH LOAD IMBALANCE
How should a multi-queue multiprocessor scheduler handle load imbalance, so as to better achieve its desired scheduling goals?</p>
<p>Migration: Migrating a job betweeen processors</p>

<Subheader title="13 The Abstraction: Address Spaces"/>
<p>13.1 Early Systems</p>
<p>Only physical memory. OS sat on memory address 0 and used the rest of memory for the single running program</p>
<p>13.2 Multiprogramming and Time Sharing</p>
<p>Later, multiprogramming was born, and you were able to load multiple programs into memory and swap between different processes to efficiently use the CPU</p>
<p>Protection : One process should not alter the memory in another process</p>
<p>13.3 The Address Space</p>
<p>Abstraction of physical memory, called the address space</p>
<p>Contains all of the memory state of the program, Code,Stack,Heap etc</p>
<p>THE CRUX: HOW TO VIRTUALIZE MEMORY
How can the OS build this abstraction of a private, potentially large
address space for multiple running processes (all sharing memory) on
top of a single, physical memory?</p>
<Subheader title="14 : Interlude: Memory API"/>
<p>CRUX: HOW TO ALLOCATE AND MANAGE MEMORY
In UNIX/C programs, understanding how to allocate and manage
memory is critical in building robust and reliable software. What interfaces are commonly used? What mistakes should be avoided?</p>
<p>14.1 Types of Memory</p>
<p>Stack : Managed implicitly. Stores local variables and passed in parameters</p>
<p>Heap : Allocated and deallocated manually by the programmer.</p>
<p>14.2 The malloc() Call</p>
<p>Malloc takes in a size in bytes as the parameter, and gives you a pointer referencing the allocated space</p>
<p>14.3 The free() Call</p>
<p>Free takes in a pointer that was created using malloc and 'frees' the memory</p>
<p>14.4 Common Errors</p>
<p>Forgetting To Allocate Memory. Can result in segmentation faults, where you are trying to access memory you have not allocated</p>
<p>Not Allocating Enough Memory . Also called a buffer overflow</p>
<p>Forgetting to Initialize Allocated Memory</p>
<p>Forgetting To Free Memory. Memory leak</p>
<p>Freeing Memory Before You Are Done With It</p>
<p>Freeing Memory Repeatedly</p>
<p>Calling free() Incorrectly</p>
<p>14.5 Underlying OS Support</p>
<p>Malloc and Free mangages space within your virtual address space</p>
<Subheader title="15 Mechanism: Address Translation"/>
<p>THE CRUX:
HOW TO EFFICIENTLY AND FLEXIBLY VIRTUALIZE MEMORY
How can we build an efficient virtualization of memory? How do
we provide the flexibility needed by applications? How do we maintain
control over which memory locations an application can access, and thus
ensure that application memory accesses are properly restricted? How
do we do all of this efficiently?</p>

<p>Address translation. Virtual addresses are mapped to physical addresses. Every time a process accesses memory, this translation happens</p>
<p>The goal of this is to create an image of a program having its own private memory</p>
<p>15.1 Assumptions</p>
<p>Assume for the that uesr's address space must be placed contiguously in physical memory.</p>
<p>Assume also that the address space is less than the size of the physical memory. Each of these address spaces are the same size</p>
<p>15.3 Dynamic (Hardware-based) Relocation</p>
<p>Base and Bound or Dynamic relocation are used interchangebly</p>

<p>Two hardware registers within within each CPU. One is the base register and the other is the bound register</p>
<p>Physical adress = virtual address + base. This is called address translation</p>
<p>15.5 Operating System Issues</p>
<p>OS must take action when a process is created. A smaller or same size virtual address is eqasy for the OS, where it can view the pyhsical adress as an array of slots</p>
<p>Os must do some work when the process is terminated</p>
<p>Third, the OS must perform few additional steps when a context switch occurs</p>
<p>The OS must provide exceeption handlers, or funcitons to be called</p>
<Subheader title="16 Segmentation"/>
<p>THE CRUX: HOW TO SUPPORT A LARGE ADDRESS SPACE
How do we support a large address space with (potentially) a lot of
free space between the stack and the heap? Note that in our examples,
with tiny (pretend) address spaces, the waste doesn’t seem too bad. Imagine, however, a 32-bit address space (4 GB in size); a typical program will
only use megabytes of memory, but still would demand that the entire
address space be resident in memory.</p>

<p>16.1 Segmentation: Generalized Base/Bounds</p>
<p>Multiple base and bound pairs per logical segment of the address space</p>
<p>Seperate different areas of memory (stack,code,heap) in seperate areas in the physical memory</p>
<p>16.4 Support for Sharing</p>
<p>To save memory, it is sometimes useful to share memory, such as the code section of every process</p>
<p>16.5 Fine-grained vs. Coarse-grained Segmentation</p>
<p>Coarse grained segmentation is what have been talking about , when the address space is chopped up into code,stack,heap etc</p>
<p>Fine Grained segmentation allowed smaller, more flexible segments</p>
<Subheader title="17 Free-Space Management"/>
<p>Manageing free space can be easy when you are divinding the memory space into fixed size units</p>
<p>The probllem arises when you are manging variable sized units. No contiguous sized space that can satify the request, even though there is enough free space in total</p>
<p>CRUX: HOW TO MANAGE FREE SPACE
How should free space be managed, when satisfying variable-sized requests? What strategies can be used to minimize fragmentation? What
are the time and space overheads of alternate approaches?</p>
<p>Assumptions</p>
<p>Primarily concerned with external fragmention, when contiguous sized chunks are chopped.</p>
<p>17.2 Low-level Mechanisms</p>
<p>Splitting and Coalescing </p>
<p>Free list contains a set of elements that escribe the free space still remaining in the heap</p>
<p>Splitting : Finding a free chunk fo memory that can satisfy the request and split it into two. </p>
<p>Coalescing  : Merging chunks of contingous free memory together. This is crucial so allocating memory dosent need skip a contigous memory space that fits its needs</p>
<p>Tracking The Size Of Allocated Regions</p>
<p>Given a pointer, the malloc library can quickly determine the size of the region of memory being freed and thus incorporate the space back</p>
<p>This is done using a head block, kept in memory before the handed out chunk of memory</p>
<p>17.3 Basic Strategies</p>
<p>The ideal allocator is both fast and minimizes fragmentation. We will be talking about some basiscs and discuvss proes and cons</p>
<p>Best fit stategy, search through the free list and find chunks of free memory that are big or bigger than the requested size and return the msallest in that group of candidates</p>
<p>Worst Fit strategy is the opposite of best fit. Find the largest chunk available to fit the requested space and return it</p>
<p>First fit strategy finds the first block that is big enough and returns</p>
<p>Next fit strategy maintains a pointer to the block that was allocated last, and finds the next fit from there</p>
<Subheader title="18 : Paging: Introduction"/>
<p>Problem : Variable-sized pieces comes with inherent difficulties. Space can become fragmented, and thus allocation becomes difficult overtime</p>
<p>Introducing pages : fixed size frames of memory called page frames which can contain a single virtual memory page</p>
<p>THE CRUX:
HOW TO VIRTUALIZE MEMORY WITH PAGES
How can we virtualize memory with pages, so as to avoid the problems of segmentation? What are the basic techniques? How do we make
those techniques work well, with minimal space and time overheads?</p>
<p>18.1 A Simple Example And Overview</p>
<p>Section simply shows fixed size frames of 16 kb in a 64 kb memory. </p>
<p>Paging has a number of advantages over previous approaches, with the most important being flexibility and simplicity</p>
<p>Does not lead to external fragmentation by dividing memory into fixed sizes.</p>
<p>Leads to slower machine, with many extra memory accesses.</p>

<p className="font-bold">Rest of the chapters go more low-level into the workings of advanced paging which I will skip</p>
<Chapter title="Concurrency"/>
<Subheader title="26 : Concurrency: An Introduction"/>
<p>New abstraction for a single running process, the thread. Threads share the same adress space and can access the same data as other threads</p>
<p>Contains a PC to track where the program is fetching instructions from, each with its private set of registers. Similar to a process, a context switch occurs, where register states are saved in something called a thread control block</p>
<p>Major difference between a process and a thread : Stacks</p>
<p>Multi threaded processes, there will be one stack per thread. The stack memory allocated for a thread is called the thread-local storage.</p>
<p>26.1 Why Use Threads?</p>
<p>Parallism : Running a process with multiple cpus, rather than one at the same time. The conversion between a single threaded program to a multi-threaded program is called paralellism</p>
<p>Avoid blocking problems like I/O</p>
<p>26.2 An Example: Thread Creation</p>
<p>Example is just a main thread creating two seperate threads in C</p>
<p>Threads make like complicated, as they are intrinsically undeterministic</p>
<p>26.3 Why It Gets Worse: Shared Data</p>
<p>Threads that share data are bad can cause dirty reads. Ex  Thread 1 reads,Thread 2 reads, and they both write, only one of the writes gets saved</p>
<p>26.4 The Heart Of The Problem: Uncontrolled Scheduling</p>
<p>The book gives a good example in x86. Two threads that update a shared counter variable. The program reads to counter in memory to register and adds 1</p>
<p>Called a data race or race condition. A code that may produce a data race is called a critical section</p>
<p>Atomic operations or all or nothing operations are a set</p>
<p>26.5 The Wish For Atomicity</p>
<p>A way to solve this is to have more powerful instructions that in a single step did exactly what was needed.</p>
<p>This instrucution could not be interleaved</p>
<p>THE CRUX: HOW TO SUPPORT SYNCHRONIZATION
What support do we need from the hardware in order to build useful synchronization primitives? What support do we need from the OS?
How can we build these primitives correctly and efficiently? How can
programs use them to get the desired results?</p>
<Subheader title="27 : Interlude: Thread API"/>
<p>Brief overview of the thread API</p>
<p>CRUX: HOW TO CREATE AND CONTROL THREADS
What interfaces should the OS present for thread creation and control?
How should these interfaces be designed to enable ease of use as well as
utility?</p>
<p>27.1 Thread Creation</p>
<p> In c pthread_create takes in 4 parameters, thread,attr,start_routine, and arg</p>
<p>Thread is a pointer to  a strucutre of type pthread_t,attr is used to specify and attributes this thread might have , like stack size,start_routine is a function pointer to where you want the thread to start,arg is the parameters to the function call</p>
<p>27.2 Thread Completion</p>
<p>How do you wait for a thread completion</p>
<p>int pthread_join(pthread_t thread, void **value_ptr);</p>
<p>pthread_t is the specific thread you want to wait for, and the second argument is a pointer to the return value</p>
<p>27.3 Locks</p>
<p>int pthread_mutex_lock(pthread_mutex_t *mutex);
int pthread_mutex_unlock(pthread_mutex_t *mutex);</p>
<p>Used for critical sections and away shared variables so only one thread has access</p>
<Subheader title="28 : Locks"/>
<p>Global variable lock. Routine Lock() shares the lock to the thread if no other thread has the lock.unlock() routine unlocks the lock and the lock is available to other threads</p>
<p>28.2 Pthread Locks</p>
<p>POSIX library, the thread lock is called a mutex, which stands for mutually exclusive</p>
<p>28.3 Building A Lock</p>
<p>THE CRUX: HOW TO BUILD A LOCK
How can we build an efficient lock? Efficient locks provide mutual
exclusion at low cost, and also might attain a few other properties we
discuss below. What hardware support is needed? What OS support?</p>
<p>28.4 Evaluating Locks</p>
<p>Understanding the goal of a lock</p>
<p>First, does it do its job. Is it mutually exclusive and only one thread can access the critical section at the same time</p>
<p>Second , is the lock fair? How do you handle multiple threads trying to grab a lock</p>
<p>Third , performance. Is there additional overhead for using the lock. </p>
<p>28.5 Controlling Interrupts</p>
<p>Disabling interupts before entering a critical section will not be interuppted. This is in a single proccessor system</p>
<p>Dosen't work for multi processor systems and exposes a privelaged operation to threads</p>
<p>28.6 A Failed Attempt: Just Using Loads/Stores</p>
<p>First attempt is to use a flag variable to indicate when a thread has a lock. When a thread tries to access a lock, if the flag is 1, the thread spin-waits in a while until the thread calls unlock()</p>
<p>This is a bad idea</p>
<p>28.7 Building Working Spin Locks with Test-And-Set</p>
<p>Uses a test and set model, where a thread will continuously read and set the flag variable until the thread using a lock in unlocked</p>
<p>28.8 Evaluating Spin Locks</p>
<p>Correctness : Yes, the spin lock will only allow a single thread to enter the critical section</p>
<p>Fairness : Not fair, may lead to starvation </p>
<p>Performance : Single core ? Pretty bad, as the thread that has the lock may switch. On multiple cores, sping locks can work will if the number of threads is roughlt equal to the number of CPUs</p>
<p>28.9 Compare-And-Swap</p>
<p>The idea is simple check is a value of a ptr is equal to expected, if so, ipdate the memory location pointed t oby ptr with the new value. Else do nothing. In either case, return the original value</p>
<p>28.10 Load-Linked and Store-Conditional</p>
<p>LL loads a value from a memory location atomically and returns the value. SC attempts to store a value into a memory location only if not other changes have occured at that location since LL instruction</p>
<p>Non-locking model</p>
<p>28.11 Fetch and Add</p>
<p>Atomically increments a value while returning the bold value at the address.</p>
<p>This is used to create a ticket lock, in which the globally shared variable lock is used to determine which thread's turn it is</p>
<p>28.12 Too Much Spinning: What Now?</p>
<p>THE CRUX: HOW TO AVOID SPINNING
How can we develop a lock that doesn’t needlessly waste time spinning on the CPU?</p>
<p>A simple approach would be to yield. Yield when you are locked out instead of spinning for the threads duration </p>
<p>This works if there are a few threads, but imagine if you have 100 threads who are waiting for a 1 lock. All of these threads must yeild, and in the cost of context switching will be substantial</p>
<p>We have also not addresed starvation</p>
<Subheader title="29 : Lock-based Concurrent Data Structures"/>
<p>How do we add locks to data structures and make them thread safe?</p>
<p>CRUX: HOW TO ADD LOCKS TO DATA STRUCTURES
When given a particular data structure, how should we add locks to
it, in order to make it work correctly? Further, how do we add locks such
that the data structure yields high performance, enabling many threads
to access the structure at once, i.e., concurrently?</p>
<p>29.1 Concurrent Counters</p>
<p>A simple counter with a single lock will do. Each operation is wrapped in a lock (get,increment,decrement)</p>
<p>However, the performance slows down massively as more threads are added on</p>
<p>Scalable Counting</p>
<p>Approximate counters can be a solution to scalability.The idea is to use local counters for each CPU core and a global counter with periodic transfers to the global counter</p>
<p>This make scaling much faster, as threads are not constantly fighting for locks</p>
<p>29.2 Concurrent Linked Lists</p>
<p>Instead of one lock, we introduce a lock per node model</p>
<p>The hand over hand approach may limit its scalability and performance compared to simpler locking strategies</p>
<p>29.3 Concurrent Queues</p>
<p>Two locks, front and back of queue</p>
<p>29.4 Concurrent Hash Table</p>
<p>Lock per hashbucket, allowing many conccurent operations to happen</p>
<Subheader title="30 : Condition Variables"/>

<p>THE CRUX: HOW TO WAIT FOR A CONDITION
In multi-threaded programs, it is often useful for a thread to wait for
some condition to become true before proceeding. The simple approach,
of just spinning until the condition becomes true, is grossly inefficient
and wastes CPU cycles, and in some cases, can be incorrect. Thus, how
should a thread wait for a condition?</p>
<p>30.1 Definition and Routines</p>
<p>A condition variabl is a sycnhronization primitive used in a multithreaded program. It allows threads to wait for a specific condition ot be come true before proceeding</p>
<p>The two main operations associated with condition variables are wait() and signal()</p>
<p>30.2 The Producer/Consumer (Bounded Buffer) Problem </p>
<p>Also called the bounded buffer problem. Problem statement: One or more producer threads and one or more consumer threads.Producers produce onto buffers and consumers consume</p>
<p>The Single Buffer Producer/Consumer Solution</p>
<p>Two condition variables. Producer waits on the condtition empty, and signals fill. Consumer waits on fill and signals empty</p>
<Subheader title="31 : Semaphores"/>
<p>THE CRUX: HOW TO USE SEMAPHORES
How can we use semaphores instead of locks and condition variables?
What is the definition of a semaphore? What is a binary semaphore? Is
it straightforward to build a semaphore out of locks and condition variables? To build locks and condition variables out of semaphores?</p>
<p>31.1 Semaphores: A Definition</p>
<p>Semaphores contain an initial parameter and two ways to interact with it. Wait and Post</p>
<p>The idea behind a semaphore is to act as a counter that tracks the number of available resources.This limit</p>
<p>Binary Semaphores</p>
<p>Two states, 0 or 1. 0 means no permit is available and trying to aquire a permit will result in blocking. Can act as simpel mutex locks</p>
<Chapter title="Persistence"/>
<Subheader title="36 : IO Devices"/>
<p>CRUX: HOW TO INTEGRATE I/O INTO SYSTEMS
How should I/O be integrated into systems? What are the general
mechanisms? How can we make them efficient?</p>
<p>36.1 System Architecture</p>
<p>Memory bus : Connects CPU to memory</p>
<p>General IO Bus or PCI :  Graphics and other higher performance I/O</p>
<p>Peripheral I/O : Disks,Mices,KeyBoards</p>
<p>CPU connects to an I/O chip DMI, and the rest of devices connect to this chip through different interfaces</p>
<p>36.2 A Canonical Device</p>
<p>Two components : Hardware interface it presents to the rest of the system. Internal structure :Responsible for implementing the abstraction the device presents to the system</p>
<p>36.3 The Canonical Protocol</p>
<p>The example interface shown in the book consists of three components. Status,Data, and Command</p>
<p>The OS kernel interacts with these devices through these interfaces. Heres the typical protocol.</p>
<Bullet bullets={["Os starts by polling (asking the device for status)","If available , the OS sends data through the data register", "OS writes a command", "OS waits for device by consistently polling"]}/>
<p>36.4 Lowering CPU Overhead With Interrupts</p>
<p>The interrupt : Instead of polling until the device is finished, the OS issues a request,puts the calling process to sleep, and context switches to another task</p>
<p>These interrupts aren't always helpful for short tasks, as the overhead of context switching may take longer than the actual task itself. Can use a hybrid approach which polls for a short amount of time before</p>
<p>36.5 More Efficient Data Movement With DMA</p>
<p>THE CRUX: HOW TO LOWER PIO OVERHEADS
With PIO, the CPU spends too much time moving data to and from
devices by hand. How can we offload this work and thus allow the CPU
to be more effectively utilized?</p>
<p>The solution to this is DMA, which can orchestrate transfers between devices and main memory without CPU intervention</p>
<p>This offloads the tasks of copying from memory from the CPU to the DMA, and allows the CPU to work on other tasks.The DMA raises an interupt when finished</p>
<p>36.6 Methods Of Device Interaction</p>
<p>THE CRUX: HOW TO COMMUNICATE WITH DEVICES
How should the hardware communicate with a device? Should there
be explicit instructions? Or are there other ways to do it?</p>
<p>Method 1 : Explicity I/O instructions. Devices will have a specific I/O instructions to specify a way for the OS to send data</p>
<p>Method 2 : Memory mapped I/O . Hardware makes device registers available as if they were memory locations. You simply load and store to the address</p>
<p>36.7 Fitting Into The OS: The Device Driver</p>
<p>THE CRUX: HOW TO BUILD A DEVICE-NEUTRAL OS
How can we keep most of the OS device-neutral, thus hiding the details of device interactions from major OS subsystems?</p>
<p>Device Drivers : A way for the OS to interact with devices. Serves as an interface between the OS and devices</p>
<p>Works as an abstraction that allows developers to write software that can work with a variety of hardware devices without having to rely on specifics about the device.</p>
<p>Similar to an API, where the device provides a set of rules and protocols for the OS to follow</p>
<Subheader title="37 : Hard Disk Drives"/>
<p>CRUX: HOW TO STORE AND ACCESS DATA ON DISK
How do modern hard-disk drives store data? What is the interface?
How is the data actually laid out and accessed? How does disk scheduling improve performance?</p>
<p>Basic interface is simple. 512 byte blocks numbered from 0 to n - 1 which represent address spaces. These blocks are also called sectors</p>
<p>37.2 Basic Geometry</p>
<p>Platter : Circular surface that stores persistent data by inducting magnetic charges. Disk may have one or many</p>
<p>Spindle : Motor that spins the platters. Rate of rotation is 7200 - 15000 rpm</p>
<p>Track  : Concentric circles of sectors</p>
<p>Disk Head : Reading and writing. One head per surface</p>
<p>Disk Arm : Attaches to the disk head</p>
<p>Rest of the subsection goes over scheduling disk jobs, similar to the process section. Will not go over</p>
<Subheader title="39 : Interlude: Files and Directories"/>
<p>CRUX: HOW TO MANAGE A PERSISTENT DEVICE
How should the OS manage a persistent device? What are the APIs?
What are the important aspects of the implementation?</p>
<p>39.1 Files And Directories</p>
<p>Two key abstractions have been developed over time in the virtualization of storage, the file and directory</p>
<p>Files : Linear array of bytes which you can read or write. Directory : Consists of a list of pairs, which are mappings from user provided names and low-level names</p>
<p>39.3 Creating Files</p>
<p>open() routine returns a file descriptor that allows you to call other methods to access the file (read and write)</p>
<p></p>
            </div>
                
   </Layout>
  )
}
