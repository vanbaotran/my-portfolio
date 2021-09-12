import React from 'react';
import {Link} from 'react-router-dom'
const myProjects = [
    {
        id: "3a",
        name: "Ninja Mission",
        year: 2021,
        technologies: "HTML5, CSS3, JS, NodeJS, MongoDB, Express, React, API Rest, external API",
        description: "A job hunting website that feels like a dating app.",
        link:"https://ninjamission.herokuapp.com/",
        imageUrl:"",
        qrCodeUrl:'https://res.cloudinary.com/vanbaotran/image/upload/v1631465786/qrcode_ninjamission.herokuapp.com_era5ao.png'
    },
    {
        id: "2b",
        name: "Stay&Stay",
        year: 2021,
        technologies: "Mongo DB, ExpressJS, NodeJS, JavaScript, HTML, CSS",
        description: "An E-commerce website for my vintage business.",
        link:"https://slayandstay.herokuapp.com/",
        imageUrl:'https://res.cloudinary.com/vanbaotran/image/upload/v1631465465/Screen_Shot_2021-09-12_at_6.50.27_PM_jm9tk1.png',
        qrCodeUrl:"https://res.cloudinary.com/vanbaotran/image/upload/v1631465595/qrcode_slayandstay.herokuapp.com_epapfd.png"
    },
    {
        id: "1a",
        name: "Neko Sushi Bar",
        year: 2021,
        technologies: "HTML5, CSS3, Canvas, Figma, JS, DOM",
        description: " A cooking game with limited time.",
        link:"https://vanbaotran.github.io/SushiBar/",
        imageUrl:"https://res.cloudinary.com/vanbaotran/image/upload/v1631465327/Screen_Shot_2021-09-12_at_6.47.34_PM_vwpujr.png"
    }
  ]
const Portfolio = () => {
    return (
        <div>
            <h2>My Projects:</h2>
            {myProjects.map((el)=>{
                return <div key={el.id}>
                <h3>
                <Link to={`/projects/${el.id}`}>{el.name}</Link></h3>
                <h4>{el.technologies}</h4>
                <hr />
                </div>
            })}
        </div>
    )
}
export default Portfolio