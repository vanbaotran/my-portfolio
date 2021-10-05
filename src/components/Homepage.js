import React from 'react';
import Portfolio from './Portfolio'

const Homepage = () => {
    const skills = {
    soft:["Meeting short deadlines","Teamwork","Communication","Autonomy","Work well under pressure", "Strong problem solver","Self-directed","Public speaking"],
    hard:["HTML5","CSS","Javascript","ReactJS","NodeJS","Express","NextJS","MongoDB","Axios","Socket.io"]
    }
    return (
        <>
        <main className='homepage'>
        <div className='header'>
            <div className='text'>
                <p>Hello, I'm</p>
                <h2>Bao-Tran Van</h2>
                <p>and I am a Web Developer</p>
            </div>
            <img src='https://res.cloudinary.com/vanbaotran/image/upload/v1631464401/newlandpage_ixw6qm.png' alt='landpage'/>
        
        </div>
        <div className='feature'>
        <div className='text-span'>
        <ul className='skills'>  {skills.hard.map((el,id)=>{
                    return <li> {el} </li>
                })}
        </ul>
        <span>Featured</span>
        <span className='text-bold'> Portfolio</span>
        </div>
        </div>
        </main>
        <Portfolio />
        </>
    )
}

export default Homepage