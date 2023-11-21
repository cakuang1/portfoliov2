
import Link from "next/link";
  
    interface Blogprops {
        title :string,
        description :string,
        image:string,
    }



  const BlogItem: React.FC<Blogprops> = ({title,description,image}) => {
    return (
        <Link {...linkProps} >
         
</Link>
    );
  };
  
  export default BlogItem;
  