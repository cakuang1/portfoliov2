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
    link : '/projects/stocksimulator'
}

const bookrecc = {
  image : '/newgateway.png',
  title : "OpenAIBookRecommender",
  description : "A book recommender web application. However,instead of your typical machine learning algorithm, we used OpenAI's API to recommend books for users instead.",
  technologies : ["React","TailwindCSS","OpenAI","SpringBoot","Redis","GoogleBooks API","Docker"],
  languages : ['Java',"Typescript"],
  functionality : ['Users can create their lists of books using a search feature fed from GoogleBooksAPI',"Recomendation engine powered by OpenAI to suggest new books"],
  link : '/projects/bookrecc'
}


const chrome = {
  image : '/rabbit.png',
  title : "ChromeClickTracker",
  description : "A book recommender web application that allows users to add books to their ",
  technologies : ["Flask","Chrome Extension","RabbitMQ","Docker"],
  languages : ['JavaScript',"Python"],
  functionality : ['Allows users to a buy and sell stocks to build their portfolios',"Stock Search up through the yahoo finance API","Tracks the users portfolio and determines profits or losses","Real Time Stock Information"],
  link : '/projects/clicktracker'
}

const portfolio = {
  image : '/arch.png',
  title : "CloudPortfolio",
  description : "Instead of your typical portfolio resume, I decided to tackle the Cloud Resume Challenge, using cloud computing skills to develop a cloud-hosted resume website",
  technologies : ["AWS","NextJS"],
  languages : ['TypeScript',"Python"],
  functionality : ['A porfolio page that connects to a DynamoDB database through an API GateWay and Lambda functions',"CI/CD workflows powered by github actions allowing changes to the applications to be conviently tested and deployed"],
  link : '/project/cloudresume'
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
                    <h2 className='font bold text-2xl border-b border-dotted'>Highlighted Personal Projects</h2>
                    <div className="mx-auto max-w-6xl  ">
                      <ProjectItem items={stocksimulator}/>
                      <ProjectItem items={bookrecc}/>
                      <ProjectItem items={chrome}/>
                      <ProjectItem items={portfolio}/>
                      
      </div>
            </div>
        <div className='Other Projects'>
        <h2 className='font bold text-2xl border-b border-dotted mt-4'>Highlighted Course Projects (Final Write Ups/No) </h2>
        <div className="mx-auto max-w-6xl  ">

                      
      </div>
        </div>
        </div>

    </div>
    </Layout>
  );
};

export default Project;
