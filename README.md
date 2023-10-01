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


### Frontend (Next.js,Tailwind)

Instead of using raw html and css, I decided to use the NextJS framework. The NextJS framework builds on top of React, but adds some additional benefits such as serverside rendering and client-routing. However,since I simply deploying a static webpage,I was more interested in the the client-side routing and static export features. Using NextJS' great developer experience with features like automatic TypeScript support and file based routing,while also combining  I was able to quickly develop a minimum viable portfolio in a few hours. Then, when I was finished with my application, I would simply run 'npm build' which would generate the necessary components for my application (HTML,CSS,JS) in a  .out folder.

### Backend (AWS API Gateway)
I spent a few days clicking around in AWS IAM, Lambda, DynamoDB and API Gateway. This is a good way to get to know the service and what it does. Once I felt comfortable, I set up a Visitor count function that my frontend would use to track the amount of visitors who visit my site. To start, I created all of these resources using the console. By the time I got it working I had encountered dozens of errors. First, I had to figure out how I wanted to store my visitor count in DynamoDB. This was fairly easy since I decided I only needed to read and write the same record. Next, I used Lambda to write the code needed to read and write from my DynamoDB table. It took me a few days, but I finally got this working (although I created all the resources manually). I also created my python tests using pytest. It was a simple test that just looked for a successful response (more on this and CICD later). At this point I only knew how to use the unittest library, but I came to find it was much easier and faster to use pytest (because of the tutorials I found for SAM) instead.


Connecting the two
After my Lambda function, DynamoDB table and API Gateway were able to work together I was ready to write the JavaScript needed to display my visitor count. The flow needed was Fronted (S3) -> API Gateway -> Lambda -> DyanmoDB. Once I was able to get Javascript to hit an API and update the screen, my website kept giving me a CORS error. I copied my a bunch of variations of my error message into google to find the resources I needed to fix this error. The problem ended up being related to enabling CORS in API Gateway AND returning an appropriate response from Lambda.

Infrastructure as Code (IAC)
Now that I had everything working, It was time to work with SAM to deploy the resources I needed for the project as infrastructure as code. This was my favorite part because SAM makes it extremely easy to deploy your services using infrastructure as code (AWS CloudFormation behind the scenes). Again, I deployed a practice project first because I was not confident using SAM, and I did not want to mess-up my working web-app. Now I can honestly say this was not an easy one and done as I made quite a few errors. YAML Indentation was one of the hardest things for me when it came to deployment. I realized that although SAM generated alot of the started code for me, undersatnding it would be necessary to add more resources such as a DynamoDB table. I kept receiving error message after error message but I was persistent and finally got it right. When the time came to SAM deploy my project I was ready and confident it would work, and the cool thing is now that I had it as IAC I could create and delete the resources at will. This is when the real usefulness of IAC was clear to me.

CI/CD
Finally, after my project was fully functioning I used GitHub Actions to set up CI/CD. I have a few projects hosted on GitHub but I had never worked with or heard of GitHub Actions. The first thing I did was read GitHub's documentation to see how everything should be set up. Next, I had followed their docs and made my backend redeploy (using a cool SAM Github Action) once the tests were passed. Next, and this is the most useful part, I setup my frontend GitHub repo to automatically push to s3! This was really cool if you are anything like me and like to change things often. This was a game changer because now if I want to edit my website, I just make the change locally, commit to GitHub and the change will be live!

Getting Certified
Lastly, I created a study guide and studied about 2 weeks for the cloud practitioner certification exam and passed! This was a fun project and I've aquired skills that I will continue to develop. I highly recommend this challenge to anyone who is learning to code or learning cloud development. Please reach out to me on Twitter LinkedIn or via email if you have any questions! P.S I am happy to share my study guide if anyone is interested.












