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
                <Subheader title=""/>
                <Subheader title="JDK in Java"/>
                <p>Stands for Java development kit, offering a collection of tools and libraries needed for developing java-based software applications.</p>
                <p>Core package used in Java, along with the JVM and JRE. JVM is a component of JRE, with extra classes</p>
                <p>Comes with the following:</p>
                <Bullet bullets={["JRE,Interpreter,compiler,archiver"]}/>
                <p>Jar files are nothing but a pack of classes.</p>
                <Subheader title="How JVM works"/>
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
                <Subheader title="JIT"/>
                <p>Converts bytecode to native machine language for execution has a huge impact on its speed.</p>
                <p>Can perform simple optimizations while compiling a series of bytecode to native machine code.</p>
                <p>For a compiled method,the JVM calls the method directly instead of interpreting the code, similar to caching.</p>
                <p>JIT compilation can affect start up time,even if the end result is a very good perfomance optimization</p>
                <Subheader title="Difference between Byte Code and Machine Code"/>
                <p>ByteCode : Intermediate between source code and machine code. It cannot be run directly on the CPU. Represented in .class files, that represent classes</p>
                <p>MachineCode : Code that is proccessed by the cpu. Obtained after compilation or interpretation</p>
                <Chapter title="Java Basic Syntax"/>
                <p>Basic terminology</p>

                <Subheader title="Java Hello World Program"/>
                <p>Implementing a java program</p>
                <p>1 : Create the program</p>
                <p>2 : Compile the program</p>
                <p>3 : Running the program</p>
                <p>Syntax explanations</p>
                <p>public : JVM can executre the method from anywhere</p>
                <p>static : The main method can be called without an object. You can simply use the class name</p>
                <Subheader title="Java Data Types"/>

                <Chapter title="4 Main Object Oriented Programming concepts "/>

            </div>
            
            <div>


                    </div>
            </div>
   </Layout>
  )
}
