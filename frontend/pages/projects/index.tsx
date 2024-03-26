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
    link : 'https://github.com/cakuang1/stocksimulator'
}

const bookrecc = {
  image : '/newgateway.png',
  title : "OpenAIBookRecommender",
  description : "A book recommender web application. However,instead of your typical machine learning algorithm, we used OpenAI's API to recommend books for users instead.",
  technologies : ["React","TailwindCSS","OpenAI","SpringBoot","Redis","GoogleBooks API","Docker"],
  languages : ['Java',"Typescript"],
  functionality : ['Users can create their lists of books using a search feature fed from GoogleBooksAPI',"Recomendation engine powered by OpenAI to suggest new books"],
  link : 'https://github.com/cakuang1/OpenAIBookRecommender'

}

const chrome = {
  image : '/rabbit.png',
  title : "ChromeClickTracker",
  description : "A Click tracking data pipeline that stores where your clicks are through a chrome extension using RabbitMQ as a broker. Click locations are stored in a postgres database ran in Docker. ",
  technologies : ["Flask","Chrome Extension","RabbitMQ","HeatMapJS","Docker"],
  languages : ['JavaScript',"Python"],
  functionality : ['Uses a Chrome extension to track user clicks',"Coordinates are entered into a RabbitMQ queue and consumed by a python script that stores data into a Postgres databse","Provides a heatmap for users that visualize where your clicks are"],
  link : 'https://github.com/cakuang1/clickschrome'
}

const portfolio = {
  image : '/arch.png',
  title : "Serverless Portfolio",
  description : "Completely serverless web application built using a variety of  ",
  technologies : ["AWS","NextJS","TailwindCSS"],
  languages : ['TypeScript',"Python"],
  functionality : ['A porfolio page that connects to a DynamoDB database through an API GateWay and Lambda functions',"CI/CD workflows powered by github actions allowing changes to the applications to be conviently tested and deployed"],
  link : '/projects/cloudresume',
  deployed : true
}


const actionmap = {
  image : '/rubyapp.png',
  title : "ActionMap (CS169)",
  description : "Worked in a group of 4 to develop a Rails based web application in a two week Agile sprint. Each team member selected a set of user stories and briefed each other during standup meetings. Application deployed on heroku.",
  technologies : ["Rails","Rspec","Cucumber","PostgreSQL"],
  languages : ['Ruby'],
  functionality : ['Allows users to search for US representatives by districts',"Users are able to POST and GET news articles for a specific representative","Search for Campaign Finances for each cycle"],
  link : 'https://su23-41-35439441bb3f.herokuapp.com/',
  deployed : true

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
  title : "Traffic Model (DATA 100)",
  description : "Built a traffic model using previous commute data to predict travel times. We used a Multivariate Linear regression model,in which we were able to increase model accuracy over multiple iterations.",
  technologies : ["MatPlotLib","scikit-learn"],
  languages : ["Python"],
  functionality : [],
  link : '/data100.pdf',
  deployed : true
}

const datapipeline = {
  image : '/pipeline.svg',
  title : "DDs3tosf",
  description : "A manual step-by-step data pipeline that extracts data files from s3, transforms the data, and loads them into a snowflake table. Also contains an EDA portion for the data.",
  technologies : ["AWS S3","Pandas",'SnowFlake',"Docker"],
  languages : ["Python"],
  functionality : ["A batch processing pipeline that is created to develop trainable machine learning data","Data follows a pipeline through such that this trainable data is stored into SnowFlake","Contains an EDA portion in an jupyter notebook to visualize a step by step process of the transformation"],
  link : 'https://github.com/cakuang1/DDs3tosf'
}

const punapi = {
  image : '/punapi.png',
  title : "punapi.rest",
  description : "A fun free to use REST API so you can develop your apps using puns and pun based memes! Currently deployed on Vercel.",
  technologies : ["NextJS","Prisma",'PostgreSQL',"NodeJS","TailwindCSS","Edge/Serverless Functions","QueryCaching","Vercel Blob Storage"],
  languages : ["Golang","Typescript"],
  functionality : ["Documented API for multiple endpoints to GET puns and memes","Deployed edge functions and cached endpoints for optimization",],
  link : 'https://www.punapi.rest/',
  deployed: true
}



const leettracker = {
  image : '/leetcode.png',
  title : "LeetManager",
  description : "LeetManager is a simple, free-to-use LeetCode productivity app designed to help you schedule your problems and track your overall progress.Hosted on Vercel with Next as front and backend. Postgres hosted on Neon.",
  technologies : ["NextJS","Express",'PostgreSQL(Neon)',"Prisma","TailwindCSS","Neon","Serverless Functions","OAuth"],
  languages : ["Typescript","SQL"],
  functionality : ["Users can Schedule and edit problems in a Kanban view","Graph UI to visualize progress","Plan Tracking for NeetCode's Blind 75 and Neetcode 150"],
  link : 'https://www.leetmanager.com/',
  deployed: true
}


const remotesf = {
  image : '/remotesf.png',
  title : "RemoteSF",
  description : "Database of remote work places in SF,displayed using an OSM ",
  technologies : ["React","Spring/SpringBoot",'MongoDB(Atlas)',"React Leaflet","TailwindCSS"],
  languages : ["Typescript,Java"],
  functionality : ["Map UI created using OSM(Open Source Map) and Leaflet where users to click to query nearby remote work places"],
  link : 'https://wifi-locator.vercel.app/',
  deployed: true
}

const mapreduce  = {
  image : '/mapreduce.png',
  title : "Multi-Threaded Single Machine MapReduce Framework",
  description : "Basic implementation of a multi-threaded MapReduce framework in a single Golang process. Done by simulating ",
  technologies : ["Docker"],
  languages : ["Golang"] ,
  functionality : ["Easily customizable by simply altering the reduce and map functions", "Provides a single and multithreaded implementation" , "Simple and easy to use API "],
  link : 'https://github.com/cakuang1/ThreadedMapreduce',
  deployed : false,
}

const connectfour  = {
  image : '/connect.png',
  title : "Connect4API",
  description : "An API to play connect 4 from your terminal or web browser with a friend",
  technologies : ["Docker","AWS EC2", "NGINX", "Redis" , "Kafka"],
  languages : ["Golang"] ,    
  functionality : ["Connect4API is a web service that enables users to play the classic game of Connect 4 with friends or against themselves","Provides a set of HTTP endpoints that allow players to create game sessions, join sessions, make moves on the game board, and receive real-time updates during gameplay"],
  link : 'https://connectfourapi.com',
  deployed : true,
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
                <h1 className='font-bold text-4xl text-center mt-10 mb-8'>Here are some of the things I've built</h1>
                <div className=" items-center text-center flex justify-center">
                    <div className="w-4 h-4 flex bg-green-100 mr-2"></div>
                    <div className="text-gray-700 ">Deployed Project</div>
                  </div>
                    <h2 className='font bold text-2xl border-b border-dotted'>Highlighted Personal Projects</h2>
                  
                    <div className="mx-auto max-w-6xl  ">
                    <ProjectItem items={leettracker} />
                        <ProjectItem items={punapi} />
                      <ProjectItem items={connectfour}/>
                      <ProjectItem items={stocksimulator}/>
                      <ProjectItem items={bookrecc}/>
                      <ProjectItem items={portfolio}/>
                      <ProjectItem items={remotesf}/> 
                      <ProjectItem items={mapreduce}/>
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
