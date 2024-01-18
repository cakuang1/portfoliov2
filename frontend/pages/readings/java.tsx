import Layout from "@/components/layout"
import Chapter from "@/components/blogcomponents/chapter"
import Subheader from "@/components/blogcomponents/subheader"
import Bullet from "@/components/blogcomponents/bulletpoints"


export default function TCPIPnotes() {
  return (
    <Layout> 
          <div className='w-3/5 mx-auto'>
          <div className="text-center mt-14">
                <h1 className="font-bold text-3xl inline-block border-b-2 border-purple  ">DataBase Internals</h1>
                <h2>Notes for Java Roadmap <a>https://roadmap.sh/java</a></h2>
                <Chapter title="Learn the fundamentals"/>
                <Subheader title="Basic Syntax"/>
                <p>Java is an OOP language, which is a programming paradigm that uses objects to design and strcuture software </p>
                <p>Class : Blueprint of the instance of a class(Object)</p>
                <p>Object : An instance of a class</p>
                <p>Method : The behavior of an object is the method</p>
                <p>Instance variables :Every object has a unique set of instance variables</p>
                <p>Single line comments use '//' while multiline comments use /*</p>
                <p>The source file name should match the public class name with the .java extension.</p>
                <p>Case senstitive language, System.out.println("GeeksforGeeks") works, but system.out.println("GeeksforGeeks") does not</p>
                <p>Class names should have the first letter uppercased. This means numbers or symbols can't be the first character</p>
                <p> public static void main(String [] args) standard entry point for a Java program, where the processing starts</p>
                <p>Method names should start with lowercase letters. Ex. public void employeeRecords(). We will get to the public and void keywords later</p>
                <p>Identifiers are local variables,instance, and class variables</p>
                <p>Access modifiers</p>
                <Bullet bullets={["default : Can be accessed within class and package","public : Can be accessed anywhere","protected : Can be accessed anywhere except outside package","private : Can only be accessed within class defined in"]}/>
                <Subheader title="Data Types and Variables"/>
                <p>Variable declaration : Specify data type and give the variable a unique name Ex. int count,string a,b,c;</p>
                <p>Primitive type : boolean,char,int,short,byte,long,float</p>
                <p>Non-Primitive type : String,array etc, these are memory address of variable values. These are also called reference data types</p>
                <p>Local Variables : Variables defined within blocks or methods or constructors</p>
                <p>Instance Variables : Non-Static variables in a class. Created when an object of the class is created</p>
                <p>Static Variables : Can be used without the creation of a an object</p>
                <Subheader title="Conditionals"/>
               <p>Taken straight from the roadmap.</p> 
               <p>                Java has the following conditional statements:
                Use if to specify a block of code to be executed, if a specified condition is true
                Use else to specify a block of code to be executed if the same condition is false
                Use else if to specify a new condition to test; if the first condition is false
                Use switch to specify many alternative blocks of code to be executed
                Use ?,: operator to specify one line condition</p>


                <Subheader title="Functions"/>
                <p>A method/function is a way to perform some task. Similarly, in programming like Java, a function method is a block of code written to perform a specific task repeatedly. It provides reusability of code. We write the function once and use it many times. It works on the ‘DRY’ principle i.e., “Do not repeat yourself”.</p>
                <Subheader title="DataStructures"/>
                 <p>Data Structures are fundamental, but language-agnostic. Since this  is purely for Java learning, I will skip this section.</p>
                 <Subheader title="OOP"/>
                 <p>Inheritance</p>
                <p>Mechanism in Java by which one class is able to inherit the features of another class. A class that inherits from another class can reuse the methods and fields of the superclass</p>
                <p>Why do we need inheritance?</p>
                <p>Code Reusability :The code written in the superclass is common to all subclasses. Child classes can directly use the parent class code</p>
                <p>Method Overriding : One of the ways by which java achieves Run time polymorphism</p>
                <p>Abstraction</p>
                <p>Deals with the abstract keyword, and can be defined with classes,methods, and interfaces</p>
                <p>Abstract class in Java is a class that can't be instnatiated on its own, but rather as a blueprint. </p>
                <p>Analogy in book. Methods are defined, but details are hidden. For children to be subclass, these abstract methods must be implemented in the subsclass</p>
                <p>Way to define a common interface fora set of related classes, using abstract classes and methods.</p>
                <p>Encapsulation</p>
                <p>Bundling data attributes and methods that operate on the data into a unit known as a class. Restricts direct access to some of the object's components and can prevent unintended interference</p>
                <p>This allows hiding of the internal state of an object from the outside World, and external code to directly manipulate the object's data.</p>
                <p>Can defined which parts are visible and which parts are not</p>
                <p>Polymorphism</p>
                <p>The idea that we can perform a single action in different ways</p>
                <p>Can be perfomed by method overloading and method overriding</p>
                <p>Method overloading (Compile-time poloymorphism)</p>
                <p>Multiple methods with the same name, but different parameters. The appropriate method is called based on the types of arguments during compile-time</p>
                <p>Method Overriding (Runtime Polymorphism)</p>
                <p>Allows a subclass to provide a specific implementation of a method already defined in its superclass. Must contain the same method signature(Return type)</p>
                <Subheader title="Packages"/>
                <p>Java Packages are groups of similar type classes,inferfaces, or subpackages. They can either be user-defined or built-in packages</p>
                <p>In order to create a package, you need to use the 'package' keyword.</p>
                <p>The Java API is a set of packages that make of java's standard library. Examples include java.lang,java.io,java.util</p>

                <Subheader title="Loops"/>
                <p>Four types of loops</p>
                <p>While Loop : while (boolean condition) {}</p>
                <p>For Loop : for (initialization condition; testing condition;increment/decrement) {}</p>
                <p>For Each : for (type var : array) {}</p>
                <p>Do While : do {} while (condition);</p>  
                <Subheader title="Exception Handling"/>
                <p>Exception handling is important to handle runtime errors so the regular flow of the application can be preserved</p>
                <p>Checked Exception - exceptions checked at compile time. Example - IOException</p>
                <p>Unchecked Exception - exceptions checked at run time. Example - NullPointerException</p>
                <p>Error - It is irrecoverable. Example - OutOfMemoryError</p>
                <Chapter title="Getting Deeper"/>
                <Subheader title="Memory Management"/>
                <p>Process of allocating and deallocating objects.</p>
                <p>Unlike C,Java has a built-in garbage collector, so why do we need to learn about it? It can help benefit the programmer to write high performance based programs that will not crash</p>
                <p>Two major concepts in Javas memory management. Memory structure and Garbage Collector</p>
                <p>JVM memory structure: Heap,Method,Stack,Native,PC Registers</p>
                <p>Heap:Most significant memory area in the JVM. Objects are dynamically allocated at runtime.</p>
                <p>Method Area : Stores metadata about classes ,methods, and other structural information about the program</p>
                <p>Stack : Each thread has its own private stack memory,which is used for storing local variables,method calls, and partial results.</p>
                <p>PC Registers : Store the address of the curent instruction being executed by a thread. Thread specific</p>
                <p>Garbage collector</p>
                <p>The garbage collector process causes the rest of the processes or threads to be paused and this is costly in nature. This is not acceptable for the client, thus we must apply garbage collector tuning.</p>
                <p>Overview of how the garbage collector works : </p>
                <Bullet bullets={["Identifying Unreachable/Reachable Objects and marking them as live or unreachable", "Sweeping phase, unmarked objects are added back to the free memory pool"]}/>
                <Subheader title="Collections"/>
                <p>Framework that provides an architecture to store and manipulate the group of objects</p>
                <p>A collection in java is defined as a single unit of objects</p>
                <p>The java.util package contains all classes and interfaces for the collection. Descriptions of specific classes and interfaces can be found on the Java documentation</p>
                <Subheader title="Serialization"/>
                <p>Serialization is the conversion of the state of an object into a byte stream; deserialization does the opposite. Stated differently, serialization is the conversion of a Java object into a static stream (sequence) of bytes, which we can then save to a database or transfer over a network.</p>
                <p>To make a Java object serializable, we must implement java.io.Serializable and tack on the marker interface similar to this : public class Person implements Serializable </p>
                <p>Serializing involves using the writeObject() method and deserializing invovles using the readObject()</p>
                <Subheader title="Networking sockets"/>
                <p>Sockets provide the communication mechanism between two computers using TCP. A client program creates a socket on its end of the communication and attempts to connect that socket to a server.</p>
                <p>Will not go in depth</p>
                <Subheader title="Generics"/>
                <p>Generics in Java provide a way to create classes, interfaces, and methods with placeholders for data types.</p>
                <p>class Test<T, U> as an example , takes in types T,U as parameters. These parameters can be used throughout your class as placeholders for the type you want to pass in, similar to passing in parameters in a function</p>
                <Subheader title="Streams"/>
                <p>Streams were introduced in Java8, used to process a collection of items.They are not data structures, but takes input from Collections</p>
                <p>Two types of stream Operations. Intermediate and Terminate.</p>
                <p>Intermediate operations are chained together. They transform a stream into another stream. Some examples of Intermediate Operations are map(), filter(),sorted()</p>
                <p>Terminal Operations are the type of Operations that return the result. Some examples include collect(),forEach(),reduce()</p>
                <Subheader title="How JVM Works"/>
                <p>JVM acts as a run-time engine to run Java applications</p>
                <p>Class loader system has three activities. Loading,Linking,Initialization</p>
                <p>Loader : Reads the .class file and generates the corresponding binary data and saves it in the method area. The information being stored is the name of the loaded class and its parent class,Modifier,variables and methods</p>
                <p>Linker : Performs verification,preparation, and resolution</p>
                <p>Intitialization : Static variables are assigned with their values and defined inthe code and static block</p>
                <p>JVM memory</p>
                <p>Methods Area : All class level information like class name, methods,and variable information.</p>
                <p>Heap Area :Information of all objects stored in the heap area</p>
                <p>Stack Area:Each thread,JVM creates a run-time stack which is stored here.</p>
                <p>PC registers:Store the address of the current excution instruction of a thread.Each thread has a seperate PC register</p>
                <p>Native method stack: For every thread, a seperate native stack is created</p>
                <p>Execution Engine</p>
                <p>Executes the .class bytecode.Reads the bytecode line by line uses data and information present in various memory area and executes instructions</p>
                <p>Interpreter : Interprets the the bytecode line by line. When a method is called multiple times, the interpreter is required</p>
                <p>JIT: Increases efficiency of an interpreter. Compiles the entire bytecode and changes it to native code. If JIT has compiled repeated method calls, JIT provides direct native code</p>
                <p>Garbage collector : Destroyed unreferenced objects</p>
                <Subheader title="Java Garbage"/>
                <p>Automatic process which lives in the JVM.There are many specifications but Oracle HotSpot if the most popular</p>
                <p>Mark,delete,compact</p>
        
                <Subheader title="Basics of Threads"/>
                <p>Processces vs Threads.</p>
                <p>Proccesses are heavy weight, each allocating a seperate memory area. Costs of communication is high and takes along time</p>
                <p>Threads are lightweights and share the same memory space</p>
                <p>Threads are typically 5 states</p>
                <p>1 : New State - By default, a thread will be in a new state, which code has not been run</p>
                <p>2 : Active state - Active state when it is invoked by the start() method. Contain two sub-states.Runnable state(Thread is ready to run at any given time). Running State - Thread receives CPU allocated by Thread Scheduler, runs, and then transfers back to the runnable state</p>
                <p>3 : Waiting/Blocked State  - Waiting for another thread to finish some work before running again. The scheduler optimizes this by allocating the CPU on a priority basis.</p>
                <p>4 : Timed Waiting State - Each thread has a time period for which sleep() method is invoked after the time expires</p>
                <p>5 : Terminated State - Terminated State when the task is finnished, unsual effects.</p>
                <p> Creating threads manually in Java</p>
                <p> Threads must be created manually by extending the Thread class. This provides the contructors and methods for creating and performing operations  on a thread</p>
                <Chapter title="Build Tools"/>
                <p>A build tool is a program or command-line utility that automates the process of compiling, assembling, and deploying software.

Build tools are not only limited to compiling code; they can also help with package management, dependency handling, and continuous integration systems.</p>
                <p>Will only go over Maven here</p>
                <Subheader title="Maven"/>
                <p>Maven is an open-source build tool, used primarily for Java projects</p>
                <p>Maven files are in the form of POM files, which are XML type files that contains information such as related to the project and configuration information such as dependencies, source directory, plugin, goals etc.</p>
                <p>Dependencies are external Java libraries required for Project and repositories are directories of packaged JAR files.</p>
                <p>Maven lifecycle</p>
                <p>validate: Validates the project configuration.</p>
                <p>compile: Compiles the source code into bytecode.</p>
                <p>test: Runs the tests for the project.</p>
                <p>package: Packages the compiled code and resources into an artifact (e.g., JAR, WAR).</p>
                <p>install: Installs the artifact in the local repository.</p>
                <p>deploy: Copies the artifact to a remote repository.</p>
                <p>Maven reads the pom.xml file.Maven downloads the dependencies defined in the pom.xml file into the local repository from the central or remote repository.Maven executes the life cycles, phases, goals, and plugins defined in the pom.xml file.</p>
                

                <Chapter title="Web Frameworks"/>
                <p>Will go over the Spring/Springboot frameworks on a serperate post</p>
                <Chapter title="ORM"/>
                <p>A programming method to map objects in Java to relational entities in a database. In other words, converting data between relational databases and object-oriented programming languages.</p>
                <Subheader title="JPA"/>
                <p>JPA is not a tool nor a framework, but a set of interfaces for accessing, persisting, and managing data between Java objects and (a) relational database.</p>
                <p>Since it is a set of interfaces, it will require implementation to work with and persist Java Objects</p>
                <p>Features of JPA include Caching,Cleaner ORM,and can plug in persistence providers like Hibernate</p>
                <Subheader title="Hibernate"/>
                <p> Hibernate is an Object-Relational Mapping (ORM) framework that implements the JPA specification. This means that Hibernate provides a concrete implementation of the JPA interfaces and specifications. </p>
                <p>Hibernate simplifies database interactions by abstracting away the details of SQL queries and providing a way to work with Java objects directly.</p>
                <p>It handles the mapping between Java entities and database tables, manages transactions, and provides a convenient API for developers to perform database operations in a Java-centric way.</p>
                <Chapter title="JDBC"/>
                <p>JDBC is an API(Application programming interface) used in java programming to interact with databases. The classes and interfaces of JDBC allow the application to send requests made by users to the specified database.</p>
                <p>JDBC is a low-level API that provides a direct connection to the database. It requires developers to write SQL queries and handle the details of database connections, statements, result sets, and transactions.</p>
            </div>
            <div className="text-center mt-20 font-bold">Spring Boot Section</div>
            <div className="mt-4">
            <Chapter title="Spring Core"/>
            <p>The core module of Spring, also known as the “Spring Core” module, is at the heart of the framework and provides the fundamental functionality for dependency injection (DI) and inversion of control (IoC).</p>
            <Subheader title="IOC"/>
            <p>Objects define their dependencies only through contructor arguments, arguments to a factory method.</p>
            <p>Container then injects those dependencies when it creates the bean</p>
            <p>The idea of IOC is that instead of objects creating their own dependecies, the dependencies are instead being injected into the components by some external entity, like the IOC container</p>
            <p>The Container is represented by the org.springframework.context.ApplicationContext interface, which is responsible for instantiating, configuring, and assembling the beans</p>
            <Subheader title="Beans"/>
            <p>IOC container manages beans.Beans that are stored in an IOC container are represented as BeanDefinition Objects, which contain metadata about the bean</p>
            <p>A Bean definition is a recipe for creating the object.</p>
            <Subheader title="Dependency Injection"/>
            <p>Different ways of injecting a dependency</p>
            <p>Constructor-based Dependency Injection : Container invoking a contructor with a number of arguments each representing a depedency</p>
            <p>Lazy-initialized Beans : Beans are eagerly created at default </p>
            <Subheader title="Spring AOP"/>
            <p>Spring AOP (Aspect-Oriented Programming) is a feature of the Spring Framework that allows developers to define certain behaviors (i.e., “aspects”) that cut across multiple classes, such as logging or transaction management.</p>
            <p>Here are some common concepts</p>
            <p>Aspect: A module encapsulating a cross-cutting concern. It contains advice and possibly additional code for various join points.</p>
            <p>The code that gets executed at a particular join point. There are different types of advice, including "before," "after," "around," etc. For example, "before" advice executes before a join point, and "after" advice executes after a join point. </p>
            <p>Join Point: A point in the execution of a program, such as method calls, exception handling, or field access. Join points are where advice can be applied.</p>
            <p>Pointcut: A set of one or more join points where advice should be applied. Pointcuts define the conditions for selecting join points.</p>
            <Subheader title="Spring MVC"/>
            <p>A Spring MVC is a Java framework which is used to build web applications. It follows the Model-View-Controller design pattern.</p>
            <p>Desgined around the DispatcherServelet that dispatches requests to handlers.</p>
            <p>Heres how a general HTTP request looks like </p>
            <Bullet bullets={["After receiving request, the DispatcheServlet consults the HandlerMapping to call the appropriate controller","The controller takes the request and calls the service methods , which will set the model data","The Dispatcher servlet will take help from ViewResolver to pickup the defined view", "Model data and view is then passed back to the serlet and rendered"]}/>
            <Subheader title="Annotations"/>
            <p>Annotations are used to provide metadata and configuration information to the sping container. Here are some common ones and what they do</p>
            <Bullet bullets={["@Component : Marks a Java class as a Spring component, indicating that the class should be automatically detected and registered as a bean",
          "@Controller : Mark class as a spring MVC controller. Handle web requests and define methods to process those requests",
          "@Service : Indicates class is a service class,typically used to contain business logic (After you query your database",
      
          "@Repository : Indicates that a class is a Spring Data repository. It is used to work with databases and provides mechanisms for CRUD operations.",
          "@Autowired :Marks a constructor, field, or setter method to be autowired by the Spring container. It injects a dependency, and you don't have to explicitly write the bean injection code.",
          "@Value:Used to inject values from properties files or other sources into Spring beans. It can be applied to fields, methods, and constructor parameters."]}/>

            </div>
            </div>
   </Layout>
  )
}
