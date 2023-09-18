import React, { ReactNode } from 'react';

interface technologyprop {
  icon : ReactNode;
  title : string;
  des : string;
  link : string;
}



const Technology: React.FC<{ data: technologyprop }> = ({ data }) => {
  return (
    <a href={data.link} className="">
      <div className="p-4 rounded-lg shadow-md hover:bg-blue-300 transition duration-300 ease-in-out">
        <div className="text-3xl  flex justify-center">
          {data.icon}
        </div>
        <div className="text-xl font-semibold text-center my-2">{data.title}</div>
        <div className="text-sm text-gray-700 text-center">{data.des}</div>
      </div>
    </a>
  );
} 

export default Technology;
