import React from 'react';
 
const Resume = () => {
  const myEducation = [
    {
        schoolName:"IRONHACK",
        city: "Paris",
        country:"France",
        degree:"Full-Stack Web Developer",
        schoolStarted:"Feb",
        schoolEnded:"Aug 2021",
        content:[
            "• 24-week web development bootcamp.",
            "• Build collaboratif projects with Github. (50 repos)",
            "• Build back-end projects using asynchrone programming in JS, NodeJS, MongoDB, Express, HandlebarsJS, Axios.",
            "• Build front-end projects using HTML, CSS, Javascript.",
            "• Build a simple page application using React: Creation API Rest, Architecture MVVM with React, Using external API."
            ]
    },
    {
        schoolName:"MOD’ART INTERNATIONAL SCHOOL",
        city: "Paris",
        country:"France",
        degree:"Management de la Mode",
        schoolStarted:"2018",
        schoolEnded:"2019",
        content:[
            "Thesis: Sustainable fashion - How to reduce fashion waste in the future?"
            ]
    },
    {
        schoolName:"INSEEC BUSINESS SCHOOL",
        city: "Paris",
        country:"France",
        degree:"Supply Chain & Purchasing",
        schoolStarted:"2015",
        schoolEnded:"2018",
        content:[
           "Trade & Negotiation, Supply Chain & Logistics"
            ]
    },
      {
        schoolName:"IUT DE MANTES-EN-YVELINES",
        city: "Paris",
        country:"France",
        degree:"GEA - Accounting and Finance",
        schoolStarted:"2013",
        schoolEnded:"2015",
        content:[
           "Projects, Financial and Accounting management"
            ]
    }
  ]
 const myExperience = [
      {
      name:"KOALA - GOLAO",
      city: "Paris",
      country:"France",
      jobTitle:"Back-End Developer",
      jobDescription:[
        "• Design and develop new features for our API dedicated to our partners to provide them with travel insurance services using NestJS, TypeScript, and PostgreSQL, in collaboration with the product team.",
        "• Maintain Clean Code principles within a complex back-end infrastructure organized in a monorepo on AWS (EC2, EventBridge, Lambda, QuickSight).",
        "• Create dashboards on QuickSight using datasets created by Athena for fraud management and to monitor product performance (BI).",
          "• Create endpoints for a claim funnel dedicated to the partners' clients that allows them to view their booking information and the status of their claims."
      ],
      jobStarted:"Sep 2023",
      jobEnded:"Aug 2024"
    },
    {
      name:"KOOALYS - ADMIRAL GROUP",
      city: "Paris",
      country:"France",
      jobTitle:"Retail Merchandiser",
      jobDescription:[
        "• Develop an API for a fleet insurance platform serving SMEs and micro-enterprises using TypeScript, NodeJS, and built with event sourcing and microservices.",
        "• Infrastructure: AWS CDK and Serverless Framework. CI/CD based on GitHub Actions, integrated with Nx to deploy only the relevant services. AWS S3, DynamoDB, and Step Functions are used for our scale-to-zero cost stack. We used Algolia as the search engine, React, and TailwindCSS for the front end."
      ],
      jobStarted:"Nov 2021",
      jobEnded:"Aug 2023"
    },
     {
         name:"LAGARDERE TRAVEL RETAIL",
         city: "Paris",
         country:"France",
         jobTitle:"Collections Manager",
         jobDescription:[
             "• Built OTB, buying budgets by country, by brands in partnership with others 7 countries.",
             "• Elaborated sales listing, making sales report and follow-ups for all countries, achieved 90% Sell-Through of old collections.",
             "• Established weekly sales report (turnovers, sell-through), and daily co-ordinated with teams and countries in my perimeter."
         ],
         jobStarted:"Nov 2019",
         jobEnded:"Oct 2021"
     },

 ]
 const checkJobEnded = (end) => {
    let endYear;
    if (end === ""){
        endYear = "current";
    } else {
        endYear = end;
    }
    return endYear;
  }
 
  return (
      <section className='resume'>
    <div className='education'>
      <h2>EDUCATION</h2>
      {myEducation.map((eachSchool, index) => {
        return (
          <div className='school' key={index}>
            <div className='line'>
            <h3>{eachSchool.schoolName}</h3>
            <p>{eachSchool.city}, {eachSchool.country}</p>
            </div>
              <div className='line'>
            <h4>{eachSchool.degree}</h4>
            <p>{eachSchool.schoolStarted} - {eachSchool.schoolEnded}</p>
            </div>
            {eachSchool.content.map((el,id)=>{
                return <p key={id}>{el}</p>
            })}
          </div>
          )
      })}
    </div>
    <div className="experience">
      <h2>WORK EXPERIENCE</h2>
      {myExperience.map((eachPlace, index) => {
        return (
          <div className="experience-content" key={index}>
            <div className='line'>
            <h3>{eachPlace.name}</h3>
            <p>{eachPlace.jobStarted} - {checkJobEnded(eachPlace.jobEnded)}</p>
            </div>
            <div className='line'>
             <h4>{eachPlace.jobTitle}</h4>
            <p>{eachPlace.city}, {eachPlace.country}</p>
           </div>
            <p>{eachPlace.jobDescription.map((el,id)=>{
              return <p key={id}>{el}</p>
            })}</p>
        
          </div>
          )
      })}
    </div>
    </section>
  )
}
 
export default Resume;