

import Image from "next/image";
import Link from "next/link";


    interface ProjectItemProps {
        image :string;
        title: string;
        description: string;
        technologies :string[];
        functionality : string[];
        link: string;
    }

    interface ProjectItem {
        items: ProjectItemProps;
      }
      

  const ProjectItem: React.FC<ProjectItem> = ({items}) => {
    return (
        <Link href={items.link}>
      <div className="project-item rounded-lg mt-4">
        <div className="flex ">
        <div className="image border" style={{ width: '50%', height: '500px' }}>
            <img
                src={items.image}
                alt=""
                style={{ width: '100%', height: '100%' }}
            />
            </div>
            <div className="description">
            <h3 className="project-title font-bold text-3xl">{items.title}</h3>
            <div>
                <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 18h8v-2H8v2Zm0-4h8v-2H8v2Zm-4 8V2h10l6 6v14H4Zm9-13h5l-5-5v5Z"/></svg>
                <h1 className="text-xl font-bold mt-2">Description</h1>
                </div>
                <p className="project-description">{items.description}</p>
            </div>
            <div>
                <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 3h8v8H3V3Zm0 10h8v8H3v-8ZM13 3h8v8h-8V3Zm0 10h8v8h-8v-8Zm2-8v4h4V5h-4Zm0 10v4h4v-4h-4ZM5 5v4h4V5H5Zm0 10v4h4v-4H5Z"/></svg>
                <h1 className="">Functionality</h1>
                </div>
                <ul>
                {items.functionality.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div>
                <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m21.71 20.29l-1.42 1.42a1 1 0 0 1-1.41 0L7 9.85A3.81 3.81 0 0 1 6 10a4 4 0 0 1-3.78-5.3l2.54 2.54l.53-.53l1.42-1.42l.53-.53L4.7 2.22A4 4 0 0 1 10 6a3.81 3.81 0 0 1-.15 1l11.86 11.88a1 1 0 0 1 0 1.41M2.29 18.88a1 1 0 0 0 0 1.41l1.42 1.42a1 1 0 0 0 1.41 0l5.47-5.46l-2.83-2.83M20 2l-4 2v2l-2.17 2.17l2 2L18 8h2l2-4Z"/></svg>                <h1 className="">Functionality</h1>
                <h1>Technologies</h1>
                </div>
                <div className="items">
                    {items.technologies.join(' · ')}
                </div>
            </div>
            </div>
        </div>
      </div></Link>
    );
  };
  



  export default ProjectItem;
  