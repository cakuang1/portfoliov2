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
  link : '/projects/openai'
}


const chrome = {
  image : '/rabbit.png',
  title : "ChromeClickTracker",
  description : "A Click tracking data pipeline that stores where your clicks are through a chrome extension using RabbitMQ as a broker. Click locations are stored in a postgres database ran in Docker. ",
  technologies : ["Flask","Chrome Extension","RabbitMQ","HeatMapJS","Docker"],
  languages : ['JavaScript',"Python"],
  functionality : ['Uses a Chrome extension to track user clicks',"Coordinates are entered into a RabbitMQ queue and consumed by a python script that stores data into a Postgres databse","Provides a heatmap for users that visualize where your clicks are"],
  link : '/projects/clicktracker'
}

const portfolio = {
  image : '/arch.png',
  title : "CloudPortfolio",
  description : "Instead of your typical portfolio resume, I decided to tackle the Cloud Resume Challenge, using cloud computing skills to develop a cloud-hosted resume website",
  technologies : ["AWS","NextJS","TailwindCSS"],
  languages : ['TypeScript',"Python"],
  functionality : ['A porfolio page that connects to a DynamoDB database through an API GateWay and Lambda functions',"CI/CD workflows powered by github actions allowing changes to the applications to be conviently tested and deployed"],
  link : '/projects/cloudresume',
  deployed : true
}


const actionmap = {
  image : '/rubyapp.png',
  title : "ActionMap",
  description : "Worked in a group of 4 to develop a Rails based web application in a two week Agile sprint. Each team member selected a set of user stories and briefed each other during standup meetings. Application deployed on heroku.",
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
  functionality : ["A batch processing pipeline that is created to develop trainable machine learning data","Data follows a pipeline through such that this trainable data is stored into SnowFlake","Contains an EDA portion in an jupyter notebook to visualize a step by step process of the transformation"],
  link : '/projects/pipeline'
}

const punapi = {
  image : '/punapi.png',
  title : "punapi.rest",
  description : "A fun free to use REST API so you can develop your apps using puns and pun based memes! Currently deployed on Vercel.",
  technologies : ["NextJS","Prisma",'PostgreSQL',"NodeJS","TailwindCSS","Edge/Serverless Functions","QueryCaching","Vercel Blob Storage"],
  languages : ["Typescript"],
  functionality : ["Documented API for multiple endpoints to GET puns and memes","Deployed edge functions and cached endpoints for optimization",],
  link : 'https://www.punapi.rest/',
  deployed: true
}


const leettracker = {
  image : '/leetcode.png',
  title : "LeetTracker",
  description : "LeetTracker is a simple, free-to-use LeetCode productivity app designed to help you schedule your problems and track your overall progress.Hosted on Vercel with Next as front and backend. Postgres hosted on Neon.",
  technologies : ["NextJS","Express",'PostgreSQL(Neon)',"Prisma","TailwindCSS","Neon","Serverless Functions","OAuth"],
  languages : ["Typescript","SQL"],
  functionality : ["Users can add questions ","Deployed edge functions and cached endpoints for optimization",],
  link : 'https://www.leetcodetracker.codes/',
  deployed: true
}




const leaflet = {
  image : '/leetcode.png',
  title : "LeetTracker",
  description : "LeetTracker is a simple, free-to-use LeetCode productivity app designed to help you schedule your problems and track your overall progress.Hosted on Vercel with Next as front and backend. Postgres hosted on Neon.",
  technologies : ["NextJS","Express",'PostgreSQL(Neon)',"Prisma","TailwindCSS","Neon","Serverless Functions"],
  languages : ["Typescript,Java"],
  functionality : ["Documented API for multiple endpoints to GET puns and memes","Deployed edge functions and cached endpoints for optimization",],
  link : 'https://www.leetcodetracker.codes/',
  deployed: true
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
                <h1 className='font-bold text-5xl text-center mt-14 mb-8'>Here are some of the things I've built</h1>
                <div className=" items-center text-center flex justify-center">
                    <div className="w-4 h-4 flex bg-green-100 mr-2"></div>
                    <div className="text-gray-700 ">Deployed Project</div>
                  </div>
                    <h2 className='font bold text-2xl border-b border-dotted'>Highlighted Personal Projects</h2>
                  
                    <div className="mx-auto max-w-6xl  ">
                    <ProjectItem items={leettracker} />
                        <ProjectItem items={punapi} />
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
