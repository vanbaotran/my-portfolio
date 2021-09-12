import React from 'react';
export const myProjects = [
    {
        id: "3a",
        name: "NINJA MISSION",
        year: 2021,
        technologies: "HTML5, CSS3, JS, NodeJS, MongoDB, Express, React, API Rest, external API",
        description: "A job hunting website that feels like a dating app.",
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
        link:"https://vanbaotran.github.io/SushiBar/",
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
            <h4>{this.state.currentProject.description}</h4>
            <h4>Technologies: {this.state.currentProject.technologies}</h4>
            </div>
            </main>
            </section>

        </div>
    )

    }
}
export default Portfolio