
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
          <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="rounded-lg hover:bg-gray-100 mt-2 ">
      <div className="text-lg">
        <h3 className="font-bold  text-2xl mb-2 sm:text-3xl ">
          Stock Simulator
        </h3>
      </div>
      <div className="flex mt-8">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 18h8v-2H8v2Zm0-4h8v-2H8v2Zm-2 8q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h8l6 6v12q0 .825-.588 1.413T18 22H6Zm7-13V4H6v16h12V9h-5ZM6 4v5v-5v16V4Z"/></svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5 18l7.68-6L5 6V4h14v2H8.263L16 12l-7.737 6H19v2H5v-2Z"/></svg>
          </div>
        </div>
        <div className="ml-4">
        <h3 className="font-medium  leading-6 text-lg">Functionality</h3>
        <ul>
                {items.functionality.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
        </div>
      </div>
      <div className="flex mt-4">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m21.71 20.29l-1.42 1.42a1 1 0 0 1-1.41 0L7 9.85A3.81 3.81 0 0 1 6 10a4 4 0 0 1-3.78-5.3l2.54 2.54l.53-.53l1.42-1.42l.53-.53L4.7 2.22A4 4 0 0 1 10 6a3.81 3.81 0 0 1-.15 1l11.86 11.88a1 1 0 0 1 0 1.41M2.29 18.88a1 1 0 0 0 0 1.41l1.42 1.42a1 1 0 0 0 1.41 0l5.47-5.46l-2.83-2.83M20 2l-4 2v2l-2.17 2.17l2 2L18 8h2l2-4Z"/></svg>
          </div>
        </div>
        <div className="ml-4">
          <h3 className="font-medium dark:text-white leading-6 text-lg">Technologies</h3>
          <p>
          {items.technologies.join(' · ')}
          </p>
        </div>
      </div>
    </div>
    <div className=""></div>
    </div></Link>
    );
  };
  



  export default ProjectItem;
  