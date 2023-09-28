// components/Project.tsx
import React from 'react';
import ProjectItem from '@/components/projectitem';
import Layout from '@/components/layout';





const stocksimulator = {
    image : '/pipeline.svg',
    title : "StockSimulator",
    description : "A web application that allows users to simulate buying and selling stocks and build their portfolio.",
    technologies : ["React","TailwindCSS","Django","Yahoo Finance","Docker"],
    languages : ['Javascript',"Python"],
    functionality : ['Allows users to a buy and sell stocks to build their portfolios',"Stock Search up through the yahoo finance API","Tracks the users portfolio and determines profits or losses","Real Time Stock Information"],
    link : '/p'
}

const bookrecc = {
  image : '/newgateway.png',
  title : "OpenAIBookRecommender",
  description : "A book recommender web application. However,instead of your typical machine learning algorithm, we used OpenAI's API to recommend books for users instead. This the core of this project consists of a Spring Boot backend and a React Frontend.",
  technologies : ["React","TailwindCSS","OpenAI","SpringBoot","Redis","GoogleBooks API","Docker"],
  languages : ['Java',"Typescript"],
  functionality : ['Users can create their lists of books using a search feature fed from GoogleBooksAPI',"Recomendation engine powered by OpenAI to suggest new books"],
  link : '/test'
}


const chrome = {
  image : '/.png',
  title : "OpenAIBookRecommender",
  description : "A book recommender web application that allows users to add books to their ",
  technologies : ["React","TailwindCSS","OpenAI","SpringBoot","Docker"],
  languages : ['Java',"Typescript",""],
  functionality : ['Allows users to a buy and sell stocks to build their portfolios',"Stock Search up through the yahoo finance API","Tracks the users portfolio and determines profits or losses","Real Time Stock Information"],
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
