// components/Project.tsx
import React from 'react';
import ProjectItem from '@/components/projectitem';
import Layout from '@/components/layout';





const stocksimulator = {
    image : '/stock.png',
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


const actionmap = {
  image : '/rubyapp.png',
  title : "ActionMap",
  description : "Worked in a group of 4 to develop a Rails based web application in a two week Agile sprint. Each team member selected a set of user stories and briefed each other during standup meetings.",
  technologies : ["Rails","Rspec","Cucumber","PostgreSQL"],
  languages : ['Ruby'],
  functionality : ['Allows users to search for US representatives by districts',"Users are able to POST and GET news articles for a specific representative","Search for Campaign Finances for each cycle"],
  link : 'https://su23-41-35439441bb3f.herokuapp.com/'

}
const data102 = {
  image : '/data102final.png',
  title : "Data 102 Final Project",
  description : "Research Project aiming to investigate correlation between air pollution and prevalence of respiratory disesases. In order to draw a conclusion, we used common Data Science techniques such as EDA,Hypothesis Testing, and Causal Inference.",
  technologies : ["MatPlotLib","scikit-learn"],
  languages : ["Python"],
  functionality : [],
  link : '/data102.pdf'
}




const data100 = {
  image : '/data100final.png',
  title : "Traffic Model",
  description : "Built a traffic model using previous commute data to predict travel times. We used a Multivariate Linear regression model,in which we were able to increase model accuracy over multiple iterations.",
  technologies : ["MatPlotLib","scikit-learn"],
  languages : ["Python"],
  functionality : [],
  link : '/data100.pdf'
}

const datapipeline = {
  image : '/pipeline.svg',
  title : "DDs3tosf",
  description : "A manual step-by-step data pipeline that extracts data files from s3, transforms the data, and loads them into a snowflake table. Also contains an EDA portion for the data.",
  technologies : ["AWS S3","Pandas",'SnowFlake',"Docker"],
  languages : ["Python"],
  functionality : ["A batch processing pipeline that pulls data from the "],
  link : '/projects/pipeline'

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
                      <ProjectItem items={portfolio}/>
                      <ProjectItem items={chrome}/>
                      <ProjectItem items={datapipeline}/>

                      
      </div>
            </div>
        <div className='Other Projects'>
        <h2 className='font bold text-2xl border-b border-dotted mt-4'>Highlighted Course Projects </h2>
        <div className="mx-auto max-w-6xl  ">
        <ProjectItem items={actionmap}/>
        <ProjectItem items={data100}/>
        <ProjectItem items={data102}/>
      </div>
        </div>
        </div>

    </div>
    </Layout>
  );
};

export default Project;
