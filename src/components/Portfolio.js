import React from 'react';
export const myProjects = [
    {
        id: "3a",
        name: "NINJA MISSION",
        year: 2021,
        technologies: "HTML5, CSS3, JS, NodeJS, MongoDB, Express, Socket.io, React, API Rest, external API",
        description: "A job hunting website that feels like a dating app.",
        text: "Looking for a job is never something we are so excited about. My website is to make applying for a job a fun experience with a job search app that feels more like a dating app instead of the traditional serious looking job boards out there. I had so much fun build this project with my teammate. React is definitely my new bestfriend. We also had the chance to use Socket.io to create chat room for candidat and recruiter.",
        link:"https://ninjamission.herokuapp.com/",
        imageUrl:[
            "https://res.cloudinary.com/vanbaotran/image/upload/v1631466622/Screen_Shot_2021-09-12_at_6.54.02_PM_qaj034.png",
            "https://res.cloudinary.com/vanbaotran/image/upload/v1631466932/Screen_Shot_2021-09-12_at_7.15.13_PM_sm4uqd.png",
            "https://res.cloudinary.com/vanbaotran/image/upload/v1631466932/Screen_Shot_2021-09-12_at_7.13.58_PM_y4xjjz.png",
            "https://res.cloudinary.com/vanbaotran/image/upload/v1631466932/Screen_Shot_2021-09-12_at_7.16.11_PM_o6kmfs.png",
            "https://res.cloudinary.com/vanbaotran/image/upload/v1631472403/Screen_Shot_2021-09-12_at_8.46.07_PM_yszsrb.png",
            "https://res.cloudinary.com/vanbaotran/image/upload/v1631472404/Screen_Shot_2021-09-12_at_8.46.25_PM_xwf2j9.png"
        ],
        qrCodeUrl:'https://res.cloudinary.com/vanbaotran/image/upload/v1631465786/qrcode_ninjamission.herokuapp.com_era5ao.png'
    },
    {
        id: "2b",
        name: "SLAY&STAY",
        year: 2021,
        technologies: "Mongo DB, ExpressJS, NodeJS, JavaScript, HTML, CSS",
        description: "An E-commerce website for my vintage business.",
          text: "I started Slay & Stay Vintage because I really enjoy vintage clothing. It’s so much fun to find unique pieces and to style them with other items to create different outfits.  At first I just bought vintage clothing for myself, but I’ve discovered it’s also a lot of fun to help other people finding their own unique style!",
        link:"https://slayandstay.herokuapp.com/",
        imageUrl:[
            'https://res.cloudinary.com/vanbaotran/image/upload/v1631471821/Screen_Shot_2021-09-12_at_8.34.19_PM_ajyqyg.png',
            "https://res.cloudinary.com/vanbaotran/image/upload/v1631471821/Screen_Shot_2021-09-12_at_8.34.07_PM_kgjyji.png",
            "https://res.cloudinary.com/vanbaotran/image/upload/v1631471835/Screen_Shot_2021-09-12_at_8.35.24_PM_vyxd5j.png",
            "https://res.cloudinary.com/vanbaotran/image/upload/v1631471834/Screen_Shot_2021-09-12_at_8.36.19_PM_ha24rz.png",
            "https://res.cloudinary.com/vanbaotran/image/upload/v1631471835/Screen_Shot_2021-09-12_at_8.35.36_PM_dqofbj.png",
            "https://res.cloudinary.com/vanbaotran/image/upload/v1631471821/Screen_Shot_2021-09-12_at_8.34.32_PM_xdep9s.png"
        ],
        qrCodeUrl:"https://res.cloudinary.com/vanbaotran/image/upload/v1631465595/qrcode_slayandstay.herokuapp.com_epapfd.png"
    },
    {
        id: "1a",
        name: "NEKO SUSHI BAR",
        year: 2021,
        technologies: "HTML5, CSS3, Canvas, Figma, JS, DOM",
        description: " A cooking game with limited time.",
        text:'I love Overcooked on Twitch, it was the inspiration for my very first project at Ironhack. I had so much fun building this project because I love food and it also helped me practice everything I have learned on Javascript.',
        link: "https://vanbaotran.github.io/SushiBar/",
        imageUrl:["https://res.cloudinary.com/vanbaotran/image/upload/v1631465327/Screen_Shot_2021-09-12_at_6.47.34_PM_vwpujr.png"]
    }
  ]
class Portfolio extends React.Component {
    state = {
        currentProject: myProjects[0]
    }
    chooseProject = (id) => {
        let theProject = myProjects.find(el=>el.id===id)
        this.setState({
            currentProject: theProject
        })
    }
    componentDidUpdate(){

    }
    render(){
    
    return (
        <div className='portfolio'>
            {/* <h2>PORTFOLIO</h2> */}
            <section className='portfolio-header'>
            <div className='project-list'>
            {myProjects.map((el)=>{
                return <div onClick={()=>this.chooseProject(el.id)} className='element' key={el.id}>
                <img className='project-image' src={el.imageUrl[0]} alt='projectImage'/>
                <h3>
                {el.name}</h3>
                </div>
            })}
            </div>
            </section>

            <section>
            <h1 className='project-title'>{this.state.currentProject.name}</h1>
            <main className='project-details'>
            <div className='image'>
            {this.state.currentProject.imageUrl.map((el,id)=>{
                return <img src={el} alt='details'/>
            })}
            </div>
            <div className='details'>
            <p>{this.state.currentProject.description}</p>
            <p>{this.state.currentProject.text}</p>
            <p>Technologies: {this.state.currentProject.technologies}</p>
            <a href={this.state.currentProject.link}>Check the website out here → {this.state.currentProject.link}</a>
            <div className='last-line'>
                {this.state.currentProject.link && <p>Scan this QR Code to experience the app on Mobile</p>}
                <img src={this.state.currentProject.qrCodeUrl} alt=''/>
            </div>
            </div>
            </main>
            </section>

        </div>
    )

    }
}
export default Portfolio