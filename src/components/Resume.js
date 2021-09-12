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
            "• Built back-end projects using asynchrone programming in JS, NodeJS, MongoDB, Express, HandlebarsJS, Axios.",
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
      name:"LAGARDERE TRAVEL RETAIL",
      city: "Paris",
      country:"France",
      jobTitle:"Collections Manager",
      jobDescription:[
        "• Built OTB, buying budgets by country, by brands in partnership with others 7 countries.",
        "• Elaborated sales listing, making sales report and follow-ups for all countries, achieved 90% Sell-Through of old collections.",
        "• Established weekly sales report (turnovers, sell-through), and daily co-ordinated with teams and countries in my perimeter."
      ],
      jobStarted:"2019",
      jobEnded:""
    },
    {
      name:"KENZO - LVMH",
      city: "Paris",
      country:"France",
      jobTitle:"Retail Merchandiser",
      jobDescription:[
        "• Addressed product assortment for retail stores in France and advised buying quantities.",
        "• Managed product assortment for 5 Kenzo stores in America, led weekly meeting with the team.",
        "• Demonstrated follow-up on the marchandise delivery.",
        "• Authored and publicized weekly sales report."
      ],
      jobStarted:"2017",
      jobEnded:"2019"
    },
    {
      name:"SUNGLASS HUT FRANCE - LUXOTTICA",
      city: "Paris",
      country:"France",
      jobTitle:"Procurement assistant",
      jobDescription:["• Moderated orders to meet urgent needs with SAP for 63 stores in France.",
      "• Prepared, maintained and reviewed purchasing files, reports and price lists.",
      "• Resolved shortages, missed or late deliveries, by scheduling, expediting deliveries and other problems, report directly to Luxottica."],
      jobStarted:"Jun",
      jobEnded:"Sept 2017"
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