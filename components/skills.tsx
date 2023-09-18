import { ReactNode } from "react";



  interface skillprop {
      icon : ReactNode;
      title : string;
    }
  const Skill: React.FC<{ data: skillprop }> = ({ data }) => {
    return (
<div className="flex items-center border rounded-lg p-4 hover:bg-purple hover:shadow-md transition duration-300 ease-in-out">
    <div className="text-xl text-purple-600 mr-3">{data.icon}</div>
    <div className="text-lg font-semibold text-gray-800">{data.title}</div>
</div>


    );
  } 
  
  export default Skill;
  


