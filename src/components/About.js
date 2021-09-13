import React from 'react'
const skills = {
    soft:["Meeting short deadlines","Teamwork","Communication","Autonomy","Work well under pressure", "Strong problem solver","Self-directed","Public speaking"],
    hard:["HTML5","CSS","Javascript","ReactJS","NodeJS","Express","NextJS","MongoDB","Axios","Socket.io"]
}
const facts = [
    {
        number:"8",
        fact:'years since the first day I moved to France'
    },
     {
        number:"6",
        fact:'months of intensive Web Development bootcamp that changed my career for the better'
    },
       {
        number:"5",
        fact:'years of studies in Business Management  and Fashion Business'
    },
       {
        number:"5",
        fact:'years of experience in Fashion Industry'
    },
       {
        number:"3",
        fact:'languages that I speak fluently: English, French and Vietnamese'
    },
       {
        number:"1",
        fact:'vintage business owner. I am a sustainable fashion enthusiast and I believe in the future of preloved fashion.'
    },
    ]
 const About = () => {
    return (
        <section className='about'>
        <h2>ABOUT ME</h2>
            <div className='box'>
            {facts.map((el,id)=>{
                return <div className='fact'>
                    <div className='number'>{el.number}</div>
                    <div className='content'>{el.fact}</div>
                </div>
            })}
            </div>
            <div className='skills'>
            <img src='/images/skills.png' alt=''/>
            <ul className='hard'>
                {skills.hard.map((el,id)=>{
                    return <li>{el}</li>
                })}
            </ul>
            <ul className='soft'>
               {skills.soft.map((el,id)=>{
                    return <li>{el}</li>
                })}
            </ul>
            </div>
        </section>
    )
}
export default About;