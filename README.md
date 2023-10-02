# The Cloud Portfolio

Welcome to my portfolio. As part of the final segment of the Cloud Resume challenge, I have decided to write my 'Blog Post' as a README instead. 



## Overview

This portfolio showcases my journey through the Cloud Resume Challenge, a project designed to demonstrate proficiency in various cloud technologies and services while creating a professional online presence. This challenge was not just about building a resume but also about showcasing my skills in cloud computing.

## About the Cloud Resume Challenge

The Cloud Resume Challenge, inspired by Forrest Brazeal, is a hands-on project that combines several aspects of cloud computing, including infrastructure as code (IaC), serverless computing, containerization, and more. It's a fantastic way to dive deep into cloud technologies and create a practical and modern resume.

## What I Accomplished and Learned

- **Infrastructure as Code (IaC):** I've automated the deployment of my resume website using Terraform. This ensures that I can easily recreate my infrastructure if needed.

- **Serverless Functions:** I've implemented serverless functions that map to my API endpoints that serve as communication to DynamoDB.

- **Continuous Integration/Continuous Deployment (CI/CD):** I've set up CI/CD pipelines using GitHub Actions to frequently test and deploy my applications on pushes to the main branch.


- **Cloud Services:** I've utilized various cloud services like AWS S3 for static website hosting, AWS API Gateway for RESTful APIs, and AWS DynamoDB for data storage.





## Technologies Used

- **Cloud Platforms:** AWS
- **Infrastructure as Code:** TerraForm
- **Serverless:** AWS Lambda
- **CI/CD:** GitHub Actions
- **Web Hosting:** AWS S3,AWS CloudFront
- **Databases:** AWS DynamoDB
- **Monitoring:** AWS CloudWatch


## Architecture

![Sample Image](/arch.png)


## Blog


### Getting Started
I found the Cloud Resume Challenge through a forum post on Reddit and thought it would be a cool project to work while I was developing my portfolio. I was already familiar with a lot of the popular Cloud services such as Lambda and S3, but never used them in a production like setting. Looking over the schema of the project, it seemed like a very fun,but challenging project, as I would be incorperating services I have never used before into my project. Therefore, I knew I was going to learn quite a bit and decided to take on the challenge.


### Frontend (Next.js,Tailwind,S3,CloudFront,Route 53)

Instead of using raw html and css, I decided to use the NextJS framework. The NextJS framework builds on top of React, but adds some additional benefits such as serverside rendering and client-routing. However,since I simply deploying a static webpage,I was more interested in the the client-side routing and static export features. Using NextJS' great developer experience with features like automatic TypeScript support and file based routing,while also combining  I was able to quickly develop a minimum viable portfolio in a few hours. Then, when I was finished with my application, I would simply run 'npm build' which would generate the necessary components for my application (HTML,CSS,JS) in a  .out folder. As for the cloud portion, the setup was fairly easy by reading a few tutorials. I learned how to sync my .out folder into an S3 bucket,bought my own domai and ,set up a Cloudfront CDN and enables https for my domain name.

### Backend (Python,AWS API Gateway,AWS Lambda,AWS DynamoDB)
As I had some previous knowledge of the backend services I was going to use in this project, I found this part fairly do-able. Although never having specifically worked with AWS API Gateway and AWS DynamoDB, I have had some experience with analagous technologies, such as Spring's API Gateway, and MongoDB. Thus, the main challenge was the setup part. I first set up the DynamoDB database, which was fairly straightforward. I then created two python scripts that uses boto3 to connect to DynamoDB in order to handle the GET and POST requests from our frontend in order to track the number or views my portfolio was receiving. Although I could have done this in one script(Updating the view counter and returning the number of views using the same endpoint), I decided to split it up in order to follow RESTful architecture.Thus, I created two lambda functions and linked the scripts. Then finally, I created was able to create API endpoints for the two lambda functions using AWS API Gateway. Overall, the process was tedious as it took me a few hours to click around the AWS console and provision resources. However, I was able to learn a lot about what each of these components do and the process of setting up services using the web UI.

### Javascript
In one of the segments of the challenge, I was expected to have a view counter on my portfolio which was the main focus of the backend. Since the data was stored on DynamoDB and I already had the endpoints set up, I simply needed to call these endpoints. In order to connect the frontend to the backend, I simply needed to write a up a tiny javascript function such that would call the both lambda functions when the user lands on my page. This was easily done by using Reacts useEffect hook, which I used to call both endpoints.


### Terraform (IAC)
I had two options for IAC. AWS SAM or Terraform. I chose the latter, as it is more commonly used in the industry. This was my first-hand experience with any sort of IAC language, and I found it much more manageable than manually setting up infrastructure using the web UI. I chose to only provision the services that would most likely change in the future (AWS API Gateway,AWS Lambda,AWS DynamoDB). Other than a few integration and syntax issues, linking everything up seemed fairly straightforward.


### GitHub Actions (CI/CD)
Finally, I was able to develop a CI/CD pipeline to test and deploy my code efficiently. Having used Github Actions in the pass, this was all relatively straightforward. Thus, everytime my code is pushed onto the main branch, I would run python integration tests that called the lambda functions locally and determined if my database reflected these changes. As for deployment, I also had a workflow that would would push my new frontend code onto the s3 bucket that was distributing the static files. I think the main challenge here was finding out how to configure the workflow environments so they were able to run the AWS commandlines. 


### My Overall Thoughts on the projects
The challenge provides a hands-on learning experience for participants. It encourages them to build a real-world project using cloud services, which is one of the most effective ways to learn. Participants gain a diverse set of skills during the challenge, including cloud computing, web development, and infrastructure as code (IaC).











