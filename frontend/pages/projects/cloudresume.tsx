import Layout from "@/components/layout"
import MarkdownComponent from "@/components/md"


export default function Clicktracker() {


  const md = ''

  return (
    <Layout> 
      <div className="w-3/5 mx-auto">
      <div className="text-center mt-14">
                <h1 className="font-bold text-4xl inline-block border-b-2 border-purple  ">CloudResume</h1>
              </div>
<MarkdownComponent markdownContent={md} />


</div>

   </Layout>

  )
}


