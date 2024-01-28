
import Link from "next/link";

    interface ProjectItemProps {
        image :string;
        title: string;
        description: string;
        languages:string[];
        technologies :string[];
        functionality : string[];
        link: string;
        deployed?: boolean;
    }
    interface ProjectItem {
        items: ProjectItemProps;
      }
      
  const ProjectItem: React.FC<ProjectItem> = ({items}) => {
    const linkProps = items.deployed
    ? { href: items.link, target: "_blank", rel: "noopener noreferrer" }
    : { href: items.link,target: "_blank", rel: "noopener noreferrer" };

    return (
        <Link {...linkProps} >
     <div
  className={`grid grid-cols-1 md:grid-cols-2 hover:bg-gray-100 transition duration-200 rounded-lg gap-2 mt-2 p-2 ease-in-out ${
    items.deployed ? 'bg-green-100' : ''
  }`}
>
      <div className=" ">
      <div className="text-lg">
        <h3 className="font-bold  text-2xl mb-2 sm:text-3xl ">
          {items.title}
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
            {items.description}
          </p>
        </div>
      </div>
      {items.functionality.length != 0?  <div className="flex mt-4">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5 18l7.68-6L5 6V4h14v2H8.263L16 12l-7.737 6H19v2H5v-2Z"/></svg>
          </div>
        </div>

        <div className="ml-4">

        <h3 className="font-medium  leading-6 text-lg">Functionality</h3>
        <ul>
                {items.functionality.map((item, index) => (
                    <li key={index}>- {item}</li>
                    ))}
                </ul>
        </div>
      </div> : <div></div>}

      <div className="flex mt-4">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.05 0-3.875-.788t-3.188-2.15q-1.362-1.362-2.15-3.187T2 12q0-2.075.788-3.888t2.15-3.174Q6.3 3.575 8.124 2.788T12 2q2.075 0 3.888.788t3.174 2.15q1.363 1.362 2.15 3.175T22 12q0 2.05-.788 3.875t-2.15 3.188q-1.362 1.362-3.175 2.15T12 22Zm0-2.05q.65-.9 1.125-1.875T13.9 16h-3.8q.3 1.1.775 2.075T12 19.95Zm-2.6-.4q-.45-.825-.788-1.713T8.05 16H5.1q.725 1.25 1.813 2.175T9.4 19.55Zm5.2 0q1.4-.45 2.488-1.375T18.9 16h-2.95q-.225.95-.562 1.838T14.6 19.55ZM4.25 14h3.4q-.075-.5-.113-.988T7.5 12q0-.525.038-1.012T7.65 10h-3.4q-.125.5-.188.988T4 12q0 .525.063 1.012T4.25 14Zm5.4 0h4.7q.075-.5.113-.988T14.5 12q0-.525-.038-1.012T14.35 10h-4.7q-.075.5-.113.988T9.5 12q0 .525.038 1.012T9.65 14Zm6.7 0h3.4q.125-.5.188-.988T20 12q0-.525-.063-1.012T19.75 10h-3.4q.075.5.113.988T16.5 12q0 .525-.038 1.012T16.35 14Zm-.4-6h2.95q-.725-1.25-1.812-2.175T14.6 4.45q.45.825.788 1.713T15.95 8ZM10.1 8h3.8q-.3-1.1-.775-2.075T12 4.05q-.65.9-1.125 1.875T10.1 8Zm-5 0h2.95q.225-.95.563-1.838T9.4 4.45Q8 4.9 6.912 5.825T5.1 8Z"/></svg>          </div>
        </div>
        <div className="ml-4">
          <h3 className="font-medium dark:text-white leading-6 text-lg">Languages</h3>
          <p>
          {items.languages.join(' · ')}
          </p>
        </div>
      </div>
      <div className="flex mt-4">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m21.71 20.29l-1.42 1.42a1 1 0 0 1-1.41 0L7 9.85A3.81 3.81 0 0 1 6 10a4 4 0 0 1-3.78-5.3l2.54 2.54l.53-.53l1.42-1.42l.53-.53L4.7 2.22A4 4 0 0 1 10 6a3.81 3.81 0 0 1-.15 1l11.86 11.88a1 1 0 0 1 0 1.41M2.29 18.88a1 1 0 0 0 0 1.41l1.42 1.42a1 1 0 0 0 1.41 0l5.47-5.46l-2.83-2.83M20 2l-4 2v2l-2.17 2.17l2 2L18 8h2l2-4Z"/></svg>
          </div>
        </div>
        <div className="ml-4">
          <h3 className="font-medium dark:text-white leading-6 text-lg">Frameworks/Other tools</h3>
          <p>
          {items.technologies.join(' · ')}
          </p>
        </div>
      </div>
    </div>
    <div className="my-auto"><img src={items.image} className=""></img></div>
    </div></Link>
    );
  };
  
  export default ProjectItem;
  