
import Link from "next/link";

  
    interface BlogItemProps {
        image :string;
        title: string;
        description: string;
        link: string;
    }
    interface BlogItemPropes {
        items: BlogItemProps;
      }

  const BlogItem: React.FC<BlogItemPropes> = ({items}) => {
    return (
        <Link href={items.link}>
          <div className="grid grid-cols-1 md:grid-cols-2 hover:bg-gray-100 transition duration-200 rounded-lg  gap-2 mt-2 p-2 ease-in-out">
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
    </div>

    </div></Link>
    );
  };
  



  export default BlogItem;
  