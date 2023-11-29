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
                <h2>Notes from Geeksforgeeks Java Tutorial</h2>
                <Chapter title="Overview of Java"/>
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
                <p>Execution Enginer</p>
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
                <p>Class : Blueprint of the instance of a class(Object)</p>
                <p>Object : An instance of a class</p>
                <p>Method : The behavior of an object is the method</p>
                <p>Instance variables :Every object has a unique set of instance variables</p>
                <Subheader title="Java Hello World Program"/>
                <p>Implementing a java program</p>
                <p>1 : Create the program</p>
                <p>2 : Compile the program</p>
                <p>3 : Running the program</p>
                <p>Syntax explanations</p>
                <p>public : JVM can executre the method from anywhere</p>
                <p>static : The main method can be called without an object. You can simply use the class name</p>
                <Subheader title="Java Data Types"/>
                <p>Primitive type : boolean,char,int,short,byte,long,float</p>
                <p>Non-Primitive type : String,array etc, these are memory address of variable values. These are also called reference data types</p>
                <p>Local Variables : Variables defined within blocks or methods or constructors</p>
                <p>Instance Variables : Non-Static variables in a class. Created when an object of the class is created</p>
                <p>Static Variables :   </p>

            </div>
            
            <div>
                <Chapter title="Lecture 1 "/>

                    </div>
            </div>
   </Layout>
  )
}
