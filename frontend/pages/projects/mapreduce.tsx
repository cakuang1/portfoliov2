import Layout from "@/components/layout"
import MarkdownComponent from "@/components/md"


export default function Clicktracker() {


  const md1 = `
  #
  
  A Click tracking data pipeline that stores where your clicks are through a chrome extension using RabbitMQ as a broker. Click locations are stored in a postgres database ran in Docker.
  
  ## Architecture`


  const md2 = `
  ## How this Works/File Structure
  
  | Directory/file  | Description |
  |-------------------|------------------------------------------------------------------------------------------------------|
  | chromeextension   | The unpacked folder being loaded. Contains JavaScript code to listen to user clicks and sends locations of these clicks to the producer. |
  | producer          | Contains the Flask application (producer.py) that listens to POST requests from the extension and pushes them onto a queue in RabbitMQ. This also connects to the database and provides a heat map for users to visualize their clicks. |
  | consumer          | Contains the Python file that listens for incoming messages from the queue and relays them into a PostgreSQL Database.|
  | docker-compose.yaml | Docker Compose file. Contains the RabbitMQ broker and the PostgreSQL database needed so you don't need to install them locally.|
  
  ## Run Locally
  
  To run this locally, you will need to do a few steps.
  
  1. Clone the repository locally
     \`\`\`bash
     git clone https://github.com/cakuang1/clickschrome.git
     \`\`\`
  
  2. Install the required python packages
     \`\`\`bash
     cd clickschrome
     pip install -r producer/requirements.txt
     pip install -r consumer/requirements.txt
     \`\`\`
  
  3. Upload the chromeextension folder to chrome through chrome://extensions/ by clicking the Load Unpacked button. Ensure the extension is enabled.
  
  4. Finally, run the docker compose command to get your RabbitMQ and Postgres Services running.
     \`\`\`bash
     docker-compose up
     \`\`\`
  
     All your services should now be up and running, and your producer should be logging each time you click somewhere on the browser.
  
  5. Additionally, you can open up your heatmap in your browser by going to http://127.0.0.1:5000/heatmap, which should be something similar to the following picture
     ![Alt Text](/heatmap.png)
  
  ### Debugging
  
  Sometimes clicks aren't sending requests to the producer. One thing that fixed it for me was sending an initial request to http://127.0.0.1:5000/send_click through a Chrome extension or your command line with no arguments.
  `
  return (
    <Layout> 
      <div className="w-3/5 mx-auto">
      <div className="text-center mt-14">
                <h1 className="font-bold text-4xl inline-block border-b-2 border-purple  ">ClickTracker</h1>
              </div>
        <MarkdownComponent markdownContent={md1} />
<img src="/rabbit.png" className="w-full"></img>
<MarkdownComponent markdownContent={md2} />
</div>





   </Layout>

  )
}


