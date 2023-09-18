// components/Project.tsx
import React from 'react';
import ProjectItem from '@/components/projectitem';
import Layout from '@/components/layout';


interface ProjectItemProps {
    image :string;
    title: string;
    description: string;
    technologies :string[];
    functionality : string[];
    link: string;
}



const stocksimulator = {
    image : '/pipeline.svg',
    title : "StockSimulator",
    description : "A web application that allows you",
    technologies : ["React","Django","test"],
    functionality : ['Allows users to a buy and sell stocks to build their portfolios',"Stock Search up through the yahoo finance API","Tracks the users portfo"],
    link : '/test'
}




const Project: React.FC = () => {
  return (
    <Layout>
    <div className="project">
        <div className='w-3/5 mx-auto'>
            <div className='title text-cent er'>
                <h1 className='font-bold text-5xl text-center mt-14 mb-16'>Here are some of the things I've built</h1>
                    <h2 className='font bold text-2xl border-b border-dotted'>Highlighted Projects</h2>
                    <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="text-lg">
            <h3 className="font-bold  text-2xl mb-2 sm:text-3xl ">
              Stock Simulator
            </h3>
          </div>
          <div className="flex mt-8">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-6">
                <svg viewBox="0 0 24 24" className="w-5 h-5" astro-icon="mdi:package-variant-closed"><path fill="currentColor" d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15l-1.89 1.07L16 8.61l1.96-1.11L12 4.15M6.04 7.5 12 10.85l1.96-1.1-5.88-3.4L6.04 7.5M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71l6-3.38z"></path></svg>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="font-medium  leading-6 text-lg">Description</h3>
              <p className="text-muted mt-2">
                A collection of loading spinner components built for ReactJS, with zero external
                dependencies. Each component includes storybook demos and documentation.
              </p>
            </div>
          </div>

          <div className="flex mt-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-6">
                <svg viewBox="0 0 24 24" className="w-5 h-5" astro-icon="ic:outline-highlight"><path fill="currentColor" d="m6 14 3 3v5h6v-5l3-3V9H6v5zm2-3h8v2.17l-3 3V20h-2v-3.83l-3-3V11zm3-9h2v3h-2zM3.502 5.874 4.916 4.46l2.122 2.12-1.414 1.415zm13.458.708 2.123-2.12 1.413 1.416-2.123 2.12z"></path></svg>
              </div>
            </div>
            <div className="ml-4">

            </div>
          </div>

          <div className="flex mt-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-6">
                <svg viewBox="0 0 24 24" className="w-5 h-5" astro-icon="ic:baseline-open-in-new"><path fill="currentColor" d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="font-medium dark:text-white leading-6 text-lg">Links</h3>

            </div>
          </div>
        </div>


      </div>
            </div>
        
        </div>

    </div>
    </Layout>
  );
};

export default Project;
