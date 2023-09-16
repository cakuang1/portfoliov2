import React from 'react';

interface Technology {
  name: string;
  description: string;
  // Add more properties as needed
}

interface TechnologiesProps {
  technologies: Technology[];
}


const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <div className="technologies">
      <h2 className="section-title">Technologies</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <div key={index} className="technology-item p-4 rounded-lg shadow-md">
            <h3 className="technology-name text-xl font-semibold mb-2">{tech.name}</h3>
            <p className="technology-description text-gray-700">{tech.description}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
