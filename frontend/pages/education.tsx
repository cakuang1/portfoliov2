import React from 'react';
import Layout from '@/components/layout';


const Education = () => {
  return (
    <Layout>
 <div className="bg-100 h-screen  text-blue w-3/5 mx-auto">
 <div className="text-center mt-14">
                <h1 className="font-bold text-3xl inline-block border-b-2 border-purple  ">Education</h1>
              </div>
        <div className="Logo flex justify-center">
          <div className="logo">

          </div>
          <div className="ml-5 text-l font-bold pt-10">
           <h2>The University of California,Berkeley</h2>
           <h3 className="mt-2">Major : Data Science </h3>
           <p>Emphasis : Mathmatical Modeling</p>
          </div>
        </div>
        <div className="space-y-1 ">
          <div className="justify-center"> 
          <h1 className="font-bold text-l">Relevant Coursework</h1>

          </div>

        <div className="flex justify-center">
        <div className="flex text-md">
        <div className="cs font-bold " >
          <h2 className="underline">Computer Science Courses</h2>
          <ul className="">
            <li className="" >Structure and Interpretation of Computer Programs (CS 61A)</li>
            <li className="">Data Structures (CS 61B)</li>
            <li className="">Great Ideas in Computer Architecture (Machine Structures) (CS 61C)</li>
            <li className="">Introduction to Software Engineering (CS 169)</li>
            <li>Designing Information Devices and Systems (EECS 16A)</li>
            <li>Discrete Mathematics and Probability Theory (CS 70)</li>
            <li>Efficient Algorithms and Intractable Problems (CS 170)</li>
            <li>Introduction to Algorithmic Thinking (CS 198)</li>
          </ul>
          <div className="pt-10"><h1>Math Courses</h1>
        <ul>
          <li>Calculus II (MATH1B)</li>
          <li>Multivariable Calculus (MATH53)</li>
          <li>Linear Algebra and Differential Equations (Math 54)</li>
          <li> Theory and Proof based Linear Algebra(Math 110)</li>
          <li> Theory and Proof based Linear Algebra(INDENG 160)</li>
          </ul>
        </div>
          </div>

        <div className="ds font-bold"> <h2 className="underline">Data Science Courses</h2>
        <ul>
          <li>Foundations of Data Science (DATA 8)</li>
          <li>Linear Algebra for Data Science(STAT 89A)</li>
          <li>Principles and Techniques of Data Science (Data 100)</li>
          <li>Data Engineering (Data 101)</li>
          <li>Data, Inference, and Decisions(Data C102)</li>
          <li>Human Contexts and Ethics of Data (Data C104)</li>
          <li>Probability for Data Science(DATA 140)</li>
          </ul></div>
        </div>

        <div className="font-bold pl-6">
              <h1 >Course Projects</h1>
              <ul>
                <li className="">The Game of Hog (Java)</li>
                <li>Autocorrected Typing Software (Java)</li>
                <li>Ants Vs. SomeBees (Java)</li>
                <li>Double Ended Queue (Java)</li>
                <li>Gitlet(Java)</li>
                <li>Build Your own World(Java)</li>
                <li>Data Transformation(Java)</li>
                <li>Build Your own World(Java)</li>
                <li>Traffic Model (Python (Pandas,SKlearn,Feature Engineering))</li>
                <li>Mongo (Non-Relational Databases(Mongodb),pyMongo,MQL,JSON)</li>
                <li>Data Transformation(SQL,Interpolation,Entity Resolution)</li>
                <li>Query Performance (SQL,Query Optimization,Indexes)</li>
                <li>Mongo (Non-Relational Databases(Mongodb),pyMongo,MQL,JSON)</li>
                <li>Penguins (Python,NP-Hard,Efficiency)</li>
                <li>Data 102 Final Project (Casual Inference and Hypothesis testing)(Python,)</li>

              </ul>
              <div className="">Code for Course Projects available upon request</div>
            </div>
        </div>







  
      </div>
      </div>
    </Layout>
  );
};

export default Education;
