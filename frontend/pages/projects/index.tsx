// components/Project.tsx
import React from 'react';
import ProjectItem from '@/components/projectitem';
import Layout from '@/components/layout';





const stocksimulator = {
    image : '/pipeline.svg',
    title : "StockSimulator",
    description : "A web application that allows you",
    technologies : ["React","Django","test"],
    languages : ['Javascript',"Python"],
    functionality : ['Allows users to a buy and sell stocks to build their portfolios',"Stock Search up through the yahoo finance API","Tracks the users portfo"],
    link : '/test'
}







const Project: React.FC = () => {
  return (
    <Layout>
    <div className="project">
        <div className='w-3/5 mx-auto'>

            <div className='title '>
            <div className="text-center mt-14">
                <h1 className="font-bold text-3xl inline-block border-b-2 border-purple  ">Projects</h1>
              </div>
                <h1 className='font-bold text-5xl text-center mt-14 mb-16'>Here are some of the things I've built</h1>
                    <h2 className='font bold text-2xl border-b border-dotted'>Highlighted Projects</h2>
                    <div className="mx-auto max-w-6xl  ">
                      <ProjectItem items={stocksimulator}/>
                      <ProjectItem items={stocksimulator}/>
                      <ProjectItem items={stocksimulator}/>
                      <ProjectItem items={stocksimulator}/>
                      
      </div>
            </div>
        <div className='Other Projects'>
          

        </div>
        </div>

    </div>
    </Layout>
  );
};

export default Project;
